"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function InscriptionPage() {
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [quartier, setQuartier] = useState("");
  const [ville, setVille] = useState("");
  const [metier, setMetier] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    try {
      // =========================
      // 1. AUTH SUPABASE
      // =========================
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        alert(error.message);
        console.log(error);
        setLoading(false);
        return;
      }

      const userId = data?.user?.id;

      // =========================
      // 2. UPLOAD PHOTO
      // =========================
      let photoUrl = "";

      if (photo) {
        const fileExt = photo.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from("artisans")
          .upload(fileName, photo);

        if (uploadError) {
          alert(uploadError.message);
          console.log(uploadError);
          setLoading(false);
          return;
        }

        const { data: publicUrlData } = supabase.storage
          .from("artisans")
          .getPublicUrl(fileName);

        photoUrl = publicUrlData.publicUrl;
      }

      // =========================
      // 3. INSERT TABLE ARTISANS
      // =========================
      const { error: artisanError } = await supabase
        .from("artisans")
        .insert([
          {
            user_id: userId,
            nom,
            telephone,
            quartier,
            ville,
            metier,
            description,
            email,
            photo: photoUrl,
          },
        ]);

      if (artisanError) {
        alert(artisanError.message);
        console.log(artisanError);
        setLoading(false);
        return;
      }

      alert("Inscription réussie ✅");

      // RESET FORM
      setNom("");
      setTelephone("");
      setQuartier("");
      setVille("");
      setMetier("");
      setDescription("");
      setEmail("");
      setPassword("");
      setPhoto(null);

    } catch (err) {
      console.log(err);
      alert("Erreur d'inscription");
    }

    setLoading(false);
  };

  return (
    <div style={pageStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <img src="/bg.jpg.png" alt="logo" style={logoStyle} />

        <h1 style={titleStyle}>Inscription Artisan</h1>

        <input
          type="text"
          placeholder="Nom complet"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          style={inputStyle}
          required
        />

        <input
          type="text"
          placeholder="Téléphone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          style={inputStyle}
          required
        />

        <input
          type="text"
          placeholder="Ville"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
          style={inputStyle}
          required
        />

        <input
          type="text"
          placeholder="Quartier"
          value={quartier}
          onChange={(e) => setQuartier(e.target.value)}
          style={inputStyle}
          required
        />

        <select
          value={metier}
          onChange={(e) => setMetier(e.target.value)}
          style={inputStyle}
          required
        >
          <option value="">Choisir un métier</option>
          <option value="electricien">Électricien</option>
          <option value="plombier">Plombier</option>
          <option value="mecanicien">Mécanicien</option>
          <option value="macon">Maçon</option>
          <option value="charpentier">Charpentier</option>
        </select>

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={textareaStyle}
        />

        {/* PHOTO */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
          style={{ color: "white" }}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />

        <button
          type="submit"
          style={buttonStyle}
          disabled={loading}
        >
          {loading ? "Inscription..." : "S'inscrire"}
        </button>
      </form>
    </div>
  );
}

/* ===================== */
/* STYLES */
/* ===================== */

const pageStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: "url('/bg.jpg.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: 20,
};

const formStyle = {
  backgroundColor: "rgba(0,0,0,0.75)",
  backdropFilter: "blur(6px)",
  padding: 30,
  borderRadius: 20,
  width: "100%",
  maxWidth: 450,
  display: "flex",
  flexDirection: "column",
  gap: 15,
  color: "white",
  boxShadow: "0 0 20px rgba(0,0,0,0.3)",
};

const logoStyle = {
  width: 90,
  alignSelf: "center",
  marginBottom: 10,
};

const titleStyle = {
  textAlign: "center",
  marginBottom: 10,
};

const inputStyle = {
  padding: 12,
  borderRadius: 10,
  border: "none",
  outline: "none",
};

const textareaStyle = {
  padding: 12,
  borderRadius: 10,
  border: "none",
  outline: "none",
  minHeight: 100,
};

const buttonStyle = {
  padding: 14,
  border: "none",
  borderRadius: 10,
  backgroundColor: "#0ea5e9",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: 16,
};