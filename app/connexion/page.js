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

    if (loading) return;

    setLoading(true);

    try {

      const { data, error } = await supabase
        .from("artisans")
        .select("*")
        .eq("email", email)
        .eq("mot_de_passe", motDePasse)
        .single();

      if (error || !data) {
        alert("Email ou mot de passe incorrect ❌");
        return;
      }

      // Sauvegarde artisan connecté
      localStorage.setItem("artisan", JSON.stringify(data));

      alert("Connexion réussie ✅");

      // Redirection dashboard
      router.push("/dashboard");

    } catch (err) {

      console.log(err);
      alert("Erreur de connexion");

    } finally {

      setLoading(false);

    }
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,

        // IMAGE DE FOND
        backgroundImage: "url('/bg.jpg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* Overlay sombre */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
        }}
      />

      {/* Carte connexion */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 400,
          padding: 30,
          borderRadius: 15,

          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(5px)",

          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
        }}
      >

        {/* Logo ou titre */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 25,
          }}
        >

          <h1
            style={{
              fontSize: 32,
              marginBottom: 10,
              color: "#ff6600",
            }}
          >
            Depann’Gabon
          </h1>

          <p
            style={{
              color: "#555",
            }}
          >
            Connexion Artisan
          </p>

        </div>

        {/* Formulaire */}
        <form
          onSubmit={connecter}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 15,
          }}
        >

          <input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: 14,
              borderRadius: 8,
              border: "1px solid #ccc",
              fontSize: 16,
              outline: "none",
            }}
          />

          <input
            type="password"
            placeholder="Votre mot de passe"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            required
            style={{
              padding: 14,
              borderRadius: 8,
              border: "1px solid #ccc",
              fontSize: 16,
              outline: "none",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: 14,
              borderRadius: 8,
              border: "none",
              background: "#ff6600",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>

        </form>

      </div>

    </div>
  );
}