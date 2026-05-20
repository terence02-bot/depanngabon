"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Electriciens() {

  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    const { data } = await supabase
      .from("artisans")
      .select("*")
      .eq("metier", "electricien");

    setList(data || []);
  };

  return (
    <div style={{ padding: 20 }}>

      <h1>⚡ Électriciens</h1>

      {list.map((a) => (
        <div key={a.id} style={card}>

          <h3>{a.nom}</h3>
          <p>📞 {a.telephone}</p>
          <p>📍 {a.quartier}</p>
          <p>{a.description}</p>

        </div>
      ))}

    </div>
  );
}

const card = {
  border: "1px solid #ddd",
  padding: 15,
  marginBottom: 10,
  borderRadius: 10
};