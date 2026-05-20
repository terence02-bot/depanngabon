"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function MetierPage({ params }) {

  const { metier } = params;
  const [list, setList] = useState([]);

  useEffect(() => {
    load();
  }, [metier]);

  const load = async () => {

    const { data } = await supabase
      .from("artisans")
      .select("*")
      .eq("metier", metier);

    setList(data || []);
  };

  return (
    <div style={{ padding: 20 }}>

      <h1 style={{ textTransform: "capitalize" }}>
        {metier}
      </h1>

      {list.length === 0 && (
        <p>Aucun artisan trouvé</p>
      )}

      {list.map((a) => (
        <div key={a.id} style={card}>

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
  padding: 15,
  marginBottom: 10,
  borderRadius: 10
};