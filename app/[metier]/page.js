"use client";

import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function MetierPage({ metier, titre }) {

  const [list, setList] = useState([]);
  const [avis, setAvis] = useState({});

  useEffect(() => {
    load();
  }, []);

  const load = async () => {

    const { data } = await supabase
      .from("artisans")
      .select("*")
      .eq("metier", metier);

    const artisans = data || [];
    setList(artisans);

    loadAvis(artisans);
  };

  const loadAvis = async (artisans) => {

    let obj = {};

    await Promise.all(
      artisans.map(async (a) => {

        const { data } = await supabase
          .from("avis")
          .select("*")
          .eq("artisan_id", a.id);

        obj[a.id] = data || [];
      })
    );

    setAvis(obj);
  };

  const moyenne = (list) => {
    if (!list || list.length === 0) return "0.0";

    return (
      list.reduce((a, b) => a + b.note, 0) / list.length
    ).toFixed(1);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>{titre}</h1>

      {list.map((a) => (
        <div key={a.id} style={card}>

          {a.image && (
            <img src={a.image} style={img} />
          )}

          <h3>{a.nom}</h3>
          <p>📞 {a.telephone}</p>
          <p>📍 {a.quartier}</p>
          <p>🛠 {a.description}</p>

          <p>⭐ {moyenne(avis[a.id] || [])}</p>

          <a href={`/avis?artisan=${a.id}`}>
            ⭐ Laisser un avis
          </a>

          <div>
            {(avis[a.id] || []).map((av) => (
              <div key={av.id} style={box}>
                <b>{av.nom_client}</b>
                <p>{"⭐".repeat(av.note)}</p>
                <p>{av.commentaire}</p>
              </div>
            ))}
          </div>

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
  width: 80,
  height: 80,
  borderRadius: "50%",
  objectFit: "cover"
};

const box = {
  background: "#f9f9f9",
  padding: 8,
  marginTop: 5,
  borderRadius: 8
};