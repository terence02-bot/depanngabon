"use client";

import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function Charpentiers() {

  const [charpentiers, setCharpentiers] = useState([]);

  useEffect(() => {
    fetchCharpentiers();
  }, []);

  const fetchCharpentiers = async () => {

    const { data } = await supabase
      .from("artisans")
      .select("*")
      .eq("metier", "charpentier");

    setCharpentiers(data || []);
  };

  return (
    <div style={{ padding: 20 }}>

      <h1>Charpentiers 🪚</h1>

      {charpentiers.map((a) => (
        <div key={a.id} style={card}>

          {a.image && (
            <img
              src={a.image}
              alt=""
              style={image}
            />
          )}

          <h3>{a.nom}</h3>

          <p>📞 {a.telephone}</p>

          <p>📍 {a.quartier}</p>

          <p>🛠 {a.description}</p>

        </div>
      ))}

    </div>
  );
}

const card = {
  border: "1px solid #ddd",
  borderRadius: 12,
  padding: 15,
  marginBottom: 15
};

const image = {
  width: 90,
  height: 90,
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: 10
};