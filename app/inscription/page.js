"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function InscriptionPage() {

  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    quartier: "",
    ville: "",
    metier: "",
    description: "",
    image: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleImage = async (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const fileName = Date.now() + "-" + file.name;

    const { error: uploadError } = await supabase
      .storage
      .from("artisans")
      .upload(fileName, file);

    if (uploadError) {
      alert("Erreur upload image");
      return;
    }

    const { data } = supabase
      .storage
      .from("artisans")
      .getPublicUrl(fileName);

    setForm({
      ...form,
      image: data.publicUrl
    });
  };

  const inscrire = async (e) => {

    e.preventDefault();

    setLoading(true);

    const { data: authData, error: authError } =
      await supabase.auth.signUp({
        email: form.email,
        password: form.password
      });

    if (authError) {
      alert(authError.message);
      setLoading(false);
      return;
    }

    const { error } = await supabase
      .from("artisans")
      .insert([
        {
          nom: form.nom,
          telephone: form.telephone,
          quartier: form.quartier,
          ville: form.ville,
          metier: form.metier,
          description: form.description,
          image: form.image,
          email: form.email,
          user_id: authData.user?.id,
          avis: 5
        }
      ]);

    setLoading(false);

    if (error) {
      console.log(error);
      alert("Erreur inscription");
    } else {

      alert("Inscription réussie !");

      setForm({
        nom: "",
        telephone: "",
        quartier: "",
        ville: "",
        metier: "",
        description: "",
        image: "",
        email: "",
        password: ""
      });
    }
  };

  return (
    <div style={pageStyle}>

      <div style={overlayStyle}>

        <h1 style={title}>
          Inscription Artisan
        </h1>

        <form
          onSubmit={inscrire}
          style={formStyle}
        >

          <input
            name="nom"
            placeholder="Nom"
            value={form.nom}
            onChange={handleChange}
            style={input}
          />

          <input
            name="telephone"
            placeholder="Téléphone"
            value={form.telephone}
            onChange={handleChange}
            style={input}
          />

          <input
            name="quartier"
            placeholder="Quartier"
            value={form.quartier}
            onChange={handleChange}
            style={input}
          />

          <input
            name="ville"
            placeholder="Ville"
            value={form.ville}
            onChange={handleChange}
            style={input}
          />

          <select
            name="metier"
            value={form.metier}
            onChange={handleChange}
            style={input}
          >

            <option value="">
              Choisir un métier
            </option>

            <option value="electricien">
              Électricien
            </option>

            <option value="plombier">
              Plombier
            </option>

            <option value="mecanicien">
              Mécanicien
            </option>

            <option value="macon">
              Maçon
            </option>

            <option value="charpentier">
              Charpentier
            </option>

          </select>

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            style={textarea}
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            style={input}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            style={input}
          />

          <input
            name="password"
            type="password"
            placeholder="Mot de passe"
            value={form.password}
            onChange={handleChange}
            style={input}
          />

          <button
            type="submit"
            style={button}
            disabled={loading}
          >
            {loading
              ? "Chargement..."
              : "S'inscrire"}
          </button>

        </form>

      </div>

    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  backgroundImage: "url('/bg.jpg.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "20px"
};

const overlayStyle = {
  backgroundColor: "rgba(0,0,0,0.7)",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "30px",
  color: "white"
};

const title = {
  fontSize: "40px",
  marginBottom: "30px"
};

const formStyle = {
  width: "100%",
  maxWidth: "500px",
  display: "flex",
  flexDirection: "column",
  gap: "15px"
};

const input = {
  padding: "14px",
  borderRadius: "12px",
  border: "none",
  outline: "none",
  fontSize: "16px"
};

const textarea = {
  padding: "14px",
  borderRadius: "12px",
  border: "none",
  outline: "none",
  minHeight: "120px",
  fontSize: "16px"
};

const button = {
  padding: "15px",
  borderRadius: "12px",
  border: "none",
  backgroundColor: "#0ea5e9",
  color: "white",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer"
};