"use client";

import { useState } from "react";
import { supabase } from "../supabase";

export default function AvisPage() {

  const [artisanId, setArtisanId] = useState("");
  const [nomClient, setNomClient] = useState("");
  const [note, setNote] = useState(5);
  const [commentaire, setCommentaire] = useState("");

  const envoyerAvis = async () => {

    const { error } = await supabase
      .from("avis")
      .insert([
        {
          artisan_id: artisanId,
          nom_client: nomClient,
          note: Number(note),
          commentaire
        }
      ]);

    if (!error) {
      alert("Avis envoyé ⭐");
      setNomClient("");
      setCommentaire("");
      setNote(5);
    } else {
      alert("Erreur");
      console.log(error);
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: "auto" }}>

      <h1>Laisser un avis ⭐</h1>

      <input
        placeholder="ID artisan"
        value={artisanId}
        onChange={(e) => setArtisanId(e.target.value)}
        style={input}
      />

      <br /><br />

      <input
        placeholder="Ton nom"
        value={nomClient}
        onChange={(e) => setNomClient(e.target.value)}
        style={input}
      />

      <br /><br />

      <select
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={input}
      >
        <option value="5">⭐⭐⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
        <option value="2">⭐⭐</option>
        <option value="1">⭐</option>
      </select>

      <br /><br />

      <textarea
        placeholder="Commentaire"
        value={commentaire}
        onChange={(e) => setCommentaire(e.target.value)}
        style={textarea}
      />

      <br /><br />

      <button onClick={envoyerAvis} style={button}>
        Envoyer
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
  background: "#f59e0b",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};