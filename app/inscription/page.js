"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Inscription() {

  const [form, setForm] = useState({
    email: "",
    password: "",
    nom: "",
    telephone: "",
    metier: "electricien",
    quartier: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    // 1. création du compte auth
    const { data: user, error: err1 } = await supabase.auth.signUp({
      email: form.email,
      password: form.password
    });

    if (err1) {
      alert("Erreur création compte");
      return;
    }

    // 2. enregistrement artisan
    const { error: err2 } = await supabase
      .from("artisans")
      .insert([{
        nom: form.nom,
        telephone: form.telephone,
        metier: form.metier,
        quartier: form.quartier,
        description: form.description,
        user_id: user.user.id
      }]);

    if (err2) {
      alert("Erreur inscription artisan");
    } else {
      alert("Inscription réussie !");
    }
  };

  return (
    <div style={{ padding: 20 }}>

      <h1>Inscription Artisan</h1>

      <form onSubmit={submit} style={formStyle}>

        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Mot de passe" onChange={handleChange} />

        <input name="nom" placeholder="Nom" onChange={handleChange} />
        <input name="telephone" placeholder="Téléphone" onChange={handleChange} />

        <select name="metier" onChange={handleChange}>
          <option value="electricien">Électricien</option>
          <option value="plombier">Plombier</option>
          <option value="mecanicien">Mécanicien</option>
          <option value="macon">Maçon</option>
          <option value="charpentier">Charpentier</option>
        </select>

        <input name="quartier" placeholder="Quartier" onChange={handleChange} />
        <textarea name="description" placeholder="Description" onChange={handleChange} />

        <button type="submit">S'inscrire</button>

      </form>

    </div>
  );
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  maxWidth: 400
};