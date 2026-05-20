"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Avis() {

  const [form, setForm] = useState({
    artisan_id: "",
    nom_client: "",
    note: 5,
    commentaire: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("avis")
      .insert([form]);

    if (!error) {
      alert("Avis ajouté !");
    }
  };

  return (
    <div style={{ padding: 20 }}>

      <h1>Laisser un avis</h1>

      <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>

        <input name="artisan_id" placeholder="ID artisan" onChange={handleChange} />
        <input name="nom_client" placeholder="Votre nom" onChange={handleChange} />

        <select name="note" onChange={handleChange}>
          <option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select>

        <textarea name="commentaire" placeholder="Commentaire" onChange={handleChange} />

        <button>Envoyer</button>

      </form>

    </div>
  );
}