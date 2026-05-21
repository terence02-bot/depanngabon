"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Inscription() {

  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    email: "",
    mot_de_passe: "",
    metier: "electricien",
    quartier: "",
    description: ""
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      let imageUrl = "";

      // ✅ UPLOAD IMAGE
      if (image) {

        const filePath = `artisans/${Date.now()}-${image.name.replace(/\s/g, "_")}`;

        const { error: uploadError } = await supabase.storage
          .from("artisans")
          .upload(filePath, image);

        if (uploadError) {
          console.log("UPLOAD ERROR :", uploadError.message);
          alert("Erreur upload image");
          setLoading(false);
          return;
        }

        const { data } = supabase.storage
          .from("artisans")
          .getPublicUrl(filePath);

        imageUrl = data.publicUrl;
      }

      // ✅ INSERT DATABASE
      const { error: insertError } = await supabase
        .from("artisans")
        .insert([
          {
            nom: form.nom,
            telephone: form.telephone,
            email: form.email,
            mot_de_passe: form.mot_de_passe,
            metier: form.metier,
            quartier: form.quartier,
            description: form.description,
            image: imageUrl
          }
        ]);

      if (insertError) {
        console.log("INSERT ERROR :", insertError.message);
        alert("Erreur inscription");
      } else {
        alert("Inscription réussie !");

        // RESET FORM
        setForm({
          nom: "",
          telephone: "",
          email: "",
          mot_de_passe: "",
          metier: "electricien",
          quartier: "",
          description: ""
        });

        setImage(null);
      }

    } catch (err) {
      console.log(err);
      alert("Erreur générale");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>

      <h1>Inscription Artisan</h1>

      <form
        onSubmit={submit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          maxWidth: 400
        }}
      >

        <input
          name="nom"
          placeholder="Nom"
          value={form.nom}
          onChange={handleChange}
          required
        />

        <input
          name="telephone"
          placeholder="Téléphone"
          value={form.telephone}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="mot_de_passe"
          type="password"
          placeholder="Mot de passe"
          value={form.mot_de_passe}
          onChange={handleChange}
          required
        />

        <select
          name="metier"
          value={form.metier}
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
          placeholder="Quartier"
          value={form.quartier}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        {/* IMAGE */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Chargement..." : "S'inscrire"}
        </button>

      </form>

    </div>
  );
}