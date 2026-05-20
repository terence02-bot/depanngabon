"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../supabase";

export default function Dashboard() {

  const router = useRouter();

  const [artisan, setArtisan] = useState(null);

  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [quartier, setQuartier] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {

    const data = localStorage.getItem("artisan");

    if (!data) {
      router.push("/connexion");
    } else {

      const user = JSON.parse(data);

      setArtisan(user);

      setNom(user.nom || "");
      setTelephone(user.telephone || "");
      setQuartier(user.quartier || "");
      setDescription(user.description || "");
      setImage(user.image || "");
    }

  }, []);

  // UPLOAD IMAGE
  const uploadImage = async (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const fileName = Date.now() + file.name;

    const { error } = await supabase.storage
      .from("depanngabon")
      .upload(fileName, file);

    if (!error) {

      const { data } = supabase.storage
        .from("depanngabon")
        .getPublicUrl(fileName);

      setImage(data.publicUrl);

    } else {
      console.log(error);
      alert("Erreur upload image");
    }
  };

  // SAUVEGARDE PROFIL
  const sauvegarder = async () => {

    const { error } = await supabase
      .from("artisans")
      .update({
        nom,
        telephone,
        quartier,
        description,
        image
      })
      .eq("id", artisan.id);

    if (!error) {

      const updatedUser = {
        ...artisan,
        nom,
        telephone,
        quartier,
        description,
        image
      };

      localStorage.setItem(
        "artisan",
        JSON.stringify(updatedUser)
      );

      setArtisan(updatedUser);

      alert("Profil mis à jour !");
    } else {
      console.log(error);
      alert("Erreur modification");
    }
  };

  // DECONNEXION
  const logout = () => {
    localStorage.removeItem("artisan");
    router.push("/");
  };

  if (!artisan) return null;

  return (
    <div style={{
      padding: 20,
      maxWidth: 500,
      margin: "auto"
    }}>

      <h1>Mon Profil 👤</h1>

      {/* IMAGE */}
      {image && (
        <img
          src={image}
          alt=""
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: 20
          }}
        />
      )}

      <input type="file" onChange={uploadImage} />

      <br /><br />

      <input
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Nom"
        style={input}
      />

      <br /><br />

      <input
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
        placeholder="Téléphone"
        style={input}
      />

      <br /><br />

      <input
        value={quartier}
        onChange={(e) => setQuartier(e.target.value)}
        placeholder="Quartier"
        style={input}
      />

      <br /><br />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Compétences"
        style={textarea}
      />

      <br /><br />

      <button onClick={sauvegarder} style={button}>
        Sauvegarder
      </button>

      <br /><br />

      <button onClick={logout} style={logoutBtn}>
        Déconnexion
      </button>

    </div>
  );
}

const input = {
  width: "100%",
  padding: 12,
  borderRadius: 10,
  border: "1px solid #ccc"
};

const textarea = {
  width: "100%",
  height: 120,
  padding: 12,
  borderRadius: 10,
  border: "1px solid #ccc"
};

const button = {
  width: "100%",
  padding: 12,
  border: "none",
  borderRadius: 10,
  background: "#0ea5e9",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};

const logoutBtn = {
  width: "100%",
  padding: 12,
  border: "none",
  borderRadius: 10,
  background: "red",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};