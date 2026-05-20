"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../supabase";

export default function Connexion() {

  const router = useRouter();

  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");

  const connexion = async () => {

    const { data, error } = await supabase
      .from("artisans")
      .select("*")
      .eq("telephone", telephone)
      .eq("password", password);

    if (error) {
      console.log(error);
      alert("Erreur");
      return;
    }

    if (data.length > 0) {

      // sauvegarde artisan connecté
      localStorage.setItem(
        "artisan",
        JSON.stringify(data[0])
      );

      alert("Connexion réussie");

      router.push("/dashboard");

    } else {
      alert("Téléphone ou mot de passe incorrect");
    }
  };

  return (
    <div style={{
      padding: 20,
      maxWidth: 400,
      margin: "auto"
    }}>

      <h1>Connexion Artisan</h1>

      <input
        placeholder="Téléphone"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
        style={input}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={input}
      />

      <br /><br />

      <button onClick={connexion} style={button}>
        Se connecter
      </button>

    </div>
  );
}

const input = {
  width: "100%",
  padding: 12,
  borderRadius: 10,
  border: "1px solid #ccc"
};

const button = {
  width: "100%",
  padding: 12,
  border: "none",
  borderRadius: 10,
  background: "#0ea5e9",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};