"use client";

import { useState } from "react";

export default function AjouterArtisan() {

  const [nom, setNom] = useState("");
  const [tel, setTel] = useState("");
  const [image, setImage] = useState("");
  const [metier, setMetier] = useState("electriciens");

  const ajouter = () => {

    const nouveau = { nom, tel, image };

    // on récupère les anciens artisans
    const anciens = JSON.parse(localStorage.getItem(metier)) || [];

    // on ajoute le nouveau
    anciens.push(nouveau);

    // on sauvegarde
    localStorage.setItem(metier, JSON.stringify(anciens));

    alert("Artisan ajouté avec succès ✅");
  };

  return (
    <div style={{ textAlign: "center", padding: 30 }}>

      <h1>📝 Ajouter un artisan</h1>

      <input
        placeholder="Nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="Téléphone (ex: 241...)"
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="URL image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        style={inputStyle}
      />

      <select
        value={metier}
        onChange={(e) => setMetier(e.target.value)}
        style={inputStyle}
      >
        <option value="electriciens">Électricien</option>
        <option value="plombiers">Plombier</option>
        <option value="macons">Maçon</option>
        <option value="mecaniciens">Mécanicien</option>
        <option value="charpentiers">Charpentier</option>
      </select>

      <br />

      <button onClick={ajouter} style={btn}>
        Ajouter ➕
      </button>

    </div>
  );
}

const inputStyle = {
  display: "block",
  margin: "10px auto",
  padding: "10px",
  width: 250
};

const btn = {
  padding: "12px",
  background: "green",
  color: "white",
  border: "none",
  cursor: "pointer"
};