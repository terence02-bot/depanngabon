"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function PlombierPage() {

  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetchArtisans();
  }, []);

  const fetchArtisans = async () => {

    const { data, error } = await supabase
      .from("artisans")
      .select("*")
      .eq("metier", "plombier");

    if (error) {
      console.log(error);
    } else {
      setArtisans(data || []);
    }
  };

  return (
    <div style={{ padding: 20 }}>

      <h1>🚰 Plombiers</h1>

      {artisans.length === 0 && <p>Aucun artisan</p>}

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