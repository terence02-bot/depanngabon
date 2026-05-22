"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import {
  page,
  overlay,
  title,
  searchInput,
  card,
  img,
  phoneStyle,
  rateBtn,
  ratingContainer
} from "../../styles/globalStyles";

export default function ElectricienPage() {

  const [artisans, setArtisans] = useState([]);
  const [search, setSearch] = useState("");

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

  const noter = async (id, note) => {
    await supabase.from("artisans").update({ avis: note }).eq("id", id);
    fetchArtisans();
  };

  return (
    <div style={{ ...page, backgroundImage: "url('/electricien.jpg')" }}>
      <div style={overlay}>

        <h1 style={title}>⚡ Électriciens</h1>

        <input
          style={searchInput}
          placeholder="Rechercher ville ou quartier"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {artisans
          .filter(a =>
            a.quartier?.toLowerCase().includes(search.toLowerCase()) ||
            a.ville?.toLowerCase().includes(search.toLowerCase())
          )
          .map(a => (
            <div key={a.id} style={card}>

              <img src={a.image} style={img} />

              <h2>{a.nom}</h2>

              <p>📞 <a href={`tel:${a.telephone}`} style={phoneStyle}>{a.telephone}</a></p>
              <p>📍 {a.quartier}</p>
              <p>🌍 {a.ville}</p>
              <p>⭐ {a.avis || 5}/5</p>

              <div style={ratingContainer}>
                {[1,2,3,4,5].map(n => (
                  <button key={n} onClick={() => noter(a.id, n)} style={rateBtn}>
                    ⭐{n}
                  </button>
                ))}
              </div>

              <p>{a.description}</p>

            </div>
          ))}
      </div>
    </div>
  );
}