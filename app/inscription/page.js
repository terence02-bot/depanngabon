"use client";

import { useState } from "react";
import { supabase } from "../supabase";

export default function Inscription() {

  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [metier, setMetier] = useState("electricien");
  const [quartier, setQuartier] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  // UPLOAD PHOTO
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

  // INSCRIPTION
  const inscrire = async () => {

    if (!nom || !telephone || !password) {
      alert("Remplis les champs obligatoires");
      return;
    }

    const { error } = await supabase
      .from("artisans")
      .insert([
        {
          nom,
          telephone,
          metier,
          quartier,
          password,
          description,
          image
        }
      ]);

    if (!error) {

      alert("Inscription réussie !");

      setNom("");
      setTelephone("");
      setQuartier("");
      setPassword("");
      setDescription("");
      setImage("");

    } else {
      console.log(error);
      alert("Erreur inscription");
    }
  };

  return (
    <div style={{
      padding: 20,
      maxWidth: 500,
      margin: "auto"
    }}>

      <h1>Inscription Artisan</h1>

      {/* PHOTO */}
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
        placeholder="Nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        style={input}
      />

      <br /><br />

      <input
        placeholder="Téléphone"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
        style={input}
      />

      <br /><br />

      <select
        value={metier}
        onChange={(e) => setMetier(e.target.value)}
        style={input}
      >
        <option value="electricien">Électricien</option>
        <option value="plombier">Plombier</option>
        <option value="mecanicien">Mécanicien</option>
        <option value="macon">Maçon</option>
        <option value="charpentier">Charpentier</option>
      </select>

      <br /><br />

      <input
        placeholder="Quartier"
        value={quartier}
        onChange={(e) => setQuartier(e.target.value)}
        style={input}
      />

      <br /><br />

      <textarea
        placeholder="Décris tes compétences"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={textarea}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={input}
      />

      <br /><br />

      <button onClick={inscrire} style={button}>
        S'inscrire
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