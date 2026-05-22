"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function PlombierPage() {

  const [artisans, setArtisans] = useState([]);
  const [searchVille, setSearchVille] = useState("");
  const [searchQuartier, setSearchQuartier] = useState("");

  useEffect(() => {
    fetchArtisans();
  }, []);

  const fetchArtisans = async () => {
    const { data } = await supabase
      .from("artisans")
      .select("*")
      .eq("metier", "plombier");

    setArtisans(data || []);
  };

  return (
    <div style={pageStyle}>
      <div style={overlayStyle}>
        <h1>🚰 Plombiers</h1>

        <input placeholder="🏙️ Ville" value={searchVille} onChange={(e) => setSearchVille(e.target.value)} style={inputStyle} />
        <input placeholder="📍 Quartier" value={searchQuartier} onChange={(e) => setSearchQuartier(e.target.value)} style={inputStyle} />

        {artisans
          .filter((a) =>
            a.quartier?.toLowerCase().includes(searchQuartier.toLowerCase()) &&
            (a.ville?.toLowerCase().includes(searchVille.toLowerCase()) || searchVille === "")
          )
          .map((a) => (
            <div key={a.id} style={cardStyle}>
              {a.image && <img src={a.image} style={imgStyle} alt={a.nom} />}
              <h2>{a.nom}</h2>
              <p>📞 {a.telephone}</p>
              <p>🏙️ {a.ville}</p>
              <p>📍 {a.quartier}</p>
              <p>{a.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

/* styles identiques */
const pageStyle = { minHeight: "100vh", backgroundImage: "url('/plombier.jpeg')", backgroundSize: "cover", backgroundPosition: "center" };
const overlayStyle = { minHeight: "100vh", backgroundColor: "rgba(0,0,0,0.7)", padding: 20, display: "flex", flexDirection: "column", alignItems: "center", color: "white" };
const cardStyle = { backgroundColor: "rgba(255,255,255,0.1)", padding: 15, marginBottom: 15, borderRadius: 12, width: "100%", maxWidth: 500 };
const imgStyle = { width: 100, height: 100, borderRadius: "50%", objectFit: "cover" };
const inputStyle = { padding: 10, marginBottom: 10, borderRadius: 10, border: "none", width: "100%", maxWidth: 300 };