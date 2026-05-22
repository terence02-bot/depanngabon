"use client";

import { useEffect, useState } from "react";
import React from "react";
import { supabase } from "@/lib/supabase";

export default function ElectricienPage() {

  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetchArtisans();
  }, []);

  const fetchArtisans = async () => {
    const { data } = await supabase
      .from("artisans")
      .select("*")
      .eq("metier", "electricien");

    setArtisans(data || []);
  };

  return (
    <div style={pageStyle as React.CSSProperties}>

      <div style={overlayStyle as React.CSSProperties}>

        <h1>⚡ Électriciens</h1>

        {artisans.length === 0 && <p>Aucun artisan</p>}

        {artisans.map((artisan) => (
          <div key={artisan.id} style={cardStyle as React.CSSProperties}>

            {artisan.image ? (
              <img
                src={artisan.image}
                alt={artisan.nom}
                style={imgStyle as React.CSSProperties}
              />
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

/* ================= STYLE ================= */

const pageStyle = {
  minHeight: "100vh",
  backgroundImage: "url('/electricien.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center"
};

const overlayStyle = {
  backgroundColor: "rgba(0,0,0,0.7)",
  minHeight: "100vh",
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