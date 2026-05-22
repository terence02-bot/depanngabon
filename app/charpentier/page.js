"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function CharpentierPage() {

  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetchArtisans();
  }, []);

  const fetchArtisans = async () => {

    const { data, error } = await supabase
      .from("artisans")
      .select("*")
      .eq("metier", "charpentier");

    if (error) {
      console.log(error);
    } else {
      setArtisans(data || []);
    }
  };

  return (
    <div style={pageStyle}>

      {/* overlay */}
      <div style={overlayStyle}></div>

      {/* content */}
      <div style={contentStyle}>

        <h1 style={{ color: "white" }}>🪚 Charpentiers</h1>

        {artisans.length === 0 && (
          <p style={{ color: "white" }}>Aucun artisan</p>
        )}

        {artisans.map((artisan) => (
          <div key={artisan.id} style={card}>

            {artisan.image ? (
              <img src={artisan.image} alt={artisan.nom} style={img} />
            ) : (
              <p>Pas de photo</p>
            )}

            <h2>{artisan.nom}</h2>
            <p>📞 {artisan.telephone}</p>
            <p>📍 {artisan.quartier}</p>
            <p>{artisan.description}</p>

          </div>
        ))}

      </div>
    </div>
  );
}

/* ===================== */
/* BACKGROUND           */
/* ===================== */

const pageStyle = {
  minHeight: "100vh",
  backgroundImage: "url('/charpentier.jpeg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative"
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  zIndex: 1
};

const contentStyle = {
  position: "relative",
  zIndex: 2,
  padding: 20
};

/* ===================== */
/* CARDS                */
/* ===================== */

const card = {
  backgroundColor: "rgba(255,255,255,0.95)",
  border: "1px solid #ddd",
  padding: 15,
  marginBottom: 15,
  borderRadius: 10
};

const img = {
  width: 100,
  height: 100,
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: 10,
  display: "block"
};