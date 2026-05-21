"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Connexion() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [loading, setLoading] = useState(false);

  const connecter = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {

      const { data, error } = await supabase
        .from("artisans")
        .select("*")
        .eq("email", email)
        .eq("mot_de_passe", motDePasse)
        .single();

      if (error || !data) {
        alert("Email ou mot de passe incorrect");
        setLoading(false);
        return;
      }

      // ✅ sauvegarder artisan connecté
      localStorage.setItem("artisan", JSON.stringify(data));

      alert("Connexion réussie ✅");

      // ✅ redirection vers dashboard
      router.push("/dashboard");

    } catch (err) {
      console.log(err);
      alert("Erreur connexion");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>

      <h1>Connexion Artisan</h1>

      <form
        onSubmit={connecter}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          maxWidth: 400
        }}
      >

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Connexion..." : "Se connecter"}
        </button>

      </form>

    </div>
  );
}