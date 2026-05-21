"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ElectricienPage() {

  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetchArtisans();
  }, []);

  const fetchArtisans = async () => {

    const { data, error } = await supabase
      .from("artisans")
      .select("*")
      .eq("metier", "electricien");

    if (error) {
      console.log("ERROR FETCH:", error);
    } else {
      console.log("DATA:", data); // 👈 IMPORTANT DEBUG
      setArtisans(data || []);
    }
  };

  return (
    <div style={{ padding: 20 }}>

      <h1>⚡ Électriciens</h1>

      {artisans.length === 0 && <p>Aucun artisan</p>}

      {artisans.map((artisan) => (

        <div key={artisan.id} style={card}>

          {/* IMAGE SAFE DISPLAY */}
          {artisan.image ? (
            <img
              src={artisan.image}
              alt={artisan.nom}
              style={img}
              onError={(e) => e.target.style.display = "none"}
            />
          ) : (
            <p style={{ fontStyle: "italic" }}>Pas de photo</p>
          )}

          <h2>{artisan.nom}</h2>
          <p>📞 {artisan.telephone}</p>
          <p>📍 {artisan.quartier}</p>
          <p>{artisan.description}</p>

        </div>

      ))}

    </div>
  );
}

const card = {
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