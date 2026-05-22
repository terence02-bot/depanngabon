"use client";

import { useEffect, useState } from "react";
import React from "react";
import { supabase } from "@/lib/supabase";

export default function CharpentierPage() {

  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetchArtisans();
  }, []);

  const fetchArtisans = async () => {
    const { data } = await supabase
      .from("artisans")
      .select("*")
      .eq("metier", "charpentier");

    setArtisans(data || []);
  };

  return (
    <div style={pageStyle as React.CSSProperties}>
      <div style={overlayStyle as React.CSSProperties}>

        <h1>🪚 Charpentiers</h1>

        {artisans.length === 0 && <p>Aucun artisan</p>}

        {artisans.map((a) => (
          <div key={a.id} style={cardStyle as React.CSSProperties}>

            {a.image && (
              <img src={a.image} style={imgStyle as React.CSSProperties} />
            )}

            <h2>{a.nom}</h2>
            <p>📞 {a.telephone}</p>
            <p>📍 {a.quartier}</p>
            <p>{a.description}</p>

          </div>
        ))}

      </div>
    </div>
  );
}

/* ================= STYLE ================= */

const pageStyle = {
  minHeight: "100vh",
  backgroundImage: "url('/charpentier.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center"
};

const overlayStyle = {
  minHeight: "100vh",
  backgroundColor: "rgba(0,0,0,0.7)",
  padding: 20,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "white"
};

const cardStyle = {
  backgroundColor: "rgba(255,255,255,0.1)",
  padding: 15,
  marginBottom: 15,
  borderRadius: 12,
  width: "100%",
  maxWidth: 500
};

const imgStyle = {
  width: 100,
  height: 100,
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: 10
};