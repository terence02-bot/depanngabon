"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Connexion() {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const login = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password
    });

    if (error) {
      alert("Erreur connexion");
    } else {
      alert("Connexion réussie !");
    }
  };

  return (
    <div style={{ padding: 20 }}>

      <h1>Connexion</h1>

      <form onSubmit={login} style={formStyle}>

        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Mot de passe" onChange={handleChange} />

        <button type="submit">
          Se connecter
        </button>

      </form>

    </div>
  );
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  maxWidth: 400
};