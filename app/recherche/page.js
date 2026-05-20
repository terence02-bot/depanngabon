"use client";

import { useState } from "react";
import { electriciens, plombiers, macons, mecaniciens, charpentiers } from "../data";

export default function Recherche() {

  const [search, setSearch] = useState("");

  const all = [
    ...electriciens,
    ...plombiers,
    ...macons,
    ...mecaniciens,
    ...charpentiers
  ];

  const resultat = all.filter((a) =>
    a.nom.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", padding: 30 }}>

      <h1>🔍 Recherche d’artisans</h1>

      <input
        type="text"
        placeholder="Rechercher un artisan..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: 12,
          width: 250,
          marginBottom: 20
        }}
      />

      {resultat.map((a, i) => (
        <div key={i} style={{ margin: 20 }}>

          <img
            src={a.image}
            style={{ width: 100, height: 100, borderRadius: "50%" }}
          />

          <h3>{a.nom}</h3>

          <a href={`https://wa.me/${a.tel}`} target="_blank">
            <button style={{ background: "green", color: "white" }}>
              WhatsApp 📞
            </button>
          </a>

        </div>
      ))}

    </div>
  );
}