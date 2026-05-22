"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function MecanicienPage() {

  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetchArtisans();
  }, []);

  const fetchArtisans = async () => {
    const { data } = await supabase
      .from("artisans")
      .select("*")
      .eq("metier", "mecanicien");

    setArtisans(data || []);
  };

  return (
    <div style={pageStyle}>
      <div style={overlayStyle}>

        <h1>🔧 Mécaniciens</h1>

        {artisans.map((a) => (
          <div key={a.id} style={cardStyle}>

            {a.image && <img src={a.image} style={imgStyle} />}

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

/* STYLES */

const pageStyle = {
  minHeight: "100vh",
  backgroundImage: "url('/mecanicien.jpg')",
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
  objectFit: "cover"
};