"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {

  const router = useRouter();

  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {

    const data = localStorage.getItem("artisan");

    if (!data) {
      router.push("/connexion");
      return;
    }

    setArtisan(JSON.parse(data));

  }, []);

  const handleChange = (e) => {
    setArtisan({
      ...artisan,
      [e.target.name]: e.target.value
    });
  };

  const updateProfile = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {

      let imageUrl = artisan.image;

      // ✅ upload nouvelle image
      if (image) {

        const filePath = `artisans/${Date.now()}-${image.name.replace(/\s/g, "_")}`;

        const { error: uploadError } = await supabase.storage
          .from("artisans")
          .upload(filePath, image);

        if (uploadError) {
          alert("Erreur upload image");
          setLoading(false);
          return;
        }

        const { data } = supabase.storage
          .from("artisans")
          .getPublicUrl(filePath);

        imageUrl = data.publicUrl;
      }

      // ✅ update supabase
      const { error } = await supabase
        .from("artisans")
        .update({
          nom: artisan.nom,
          telephone: artisan.telephone,
          email: artisan.email,
          mot_de_passe: artisan.mot_de_passe,
          metier: artisan.metier,
          quartier: artisan.quartier,
          description: artisan.description,
          image: imageUrl
        })
        .eq("id", artisan.id);

      if (error) {
        console.log(error);
        alert("Erreur modification");
      } else {

        const updatedArtisan = {
          ...artisan,
          image: imageUrl
        };

        localStorage.setItem(
          "artisan",
          JSON.stringify(updatedArtisan)
        );

        setArtisan(updatedArtisan);

        alert("Profil mis à jour ✅");
      }

    } catch (err) {
      console.log(err);
      alert("Erreur générale");
    }

    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem("artisan");
    router.push("/connexion");
  };

  if (!artisan) {
    return <p>Chargement...</p>;
  }

  return (
    <div style={{ padding: 20 }}>

      <h1>Espace Artisan</h1>

      {artisan.image && (
        <img
          src={artisan.image}
          alt="artisan"
          width={150}
          style={{
            borderRadius: 10,
            marginBottom: 20
          }}
        />
      )}

      <form
        onSubmit={updateProfile}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          maxWidth: 400
        }}
      >

        <input
          name="nom"
          value={artisan.nom}
          onChange={handleChange}
        />

        <input
          name="telephone"
          value={artisan.telephone}
          onChange={handleChange}
        />

        <input
          name="email"
          value={artisan.email}
          onChange={handleChange}
        />

        <input
          name="mot_de_passe"
          value={artisan.mot_de_passe}
          onChange={handleChange}
        />

        <select
          name="metier"
          value={artisan.metier}
          onChange={handleChange}
        >
          <option value="electricien">Électricien</option>
          <option value="plombier">Plombier</option>
          <option value="mecanicien">Mécanicien</option>
          <option value="macon">Maçon</option>
          <option value="charpentier">Charpentier</option>
        </select>

        <input
          name="quartier"
          value={artisan.quartier}
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={artisan.description}
          onChange={handleChange}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Modification..." : "Mettre à jour"}
        </button>

      </form>

      <button
        onClick={logout}
        style={{
          marginTop: 20
        }}
      >
        Déconnexion
      </button>

    </div>
  );
}