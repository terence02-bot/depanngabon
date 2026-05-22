import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div style={pageStyle}>
      <div style={overlayStyle}>

        {/* LOGO */}
        <img
          src="/bg.jpg.png"
          style={{ width: 90, marginBottom: 10 }}
          alt="logo"
        />

        <h1 style={{ fontSize: 42, marginBottom: 10 }}>
          Depann'Gabon
        </h1>

        {/* 📌 DESCRIPTION DU SITE */}
        <div style={box}>
          <h2>📌 À propos de la plateforme</h2>

          <p>
            Depann'Gabon est une plateforme qui permet de mettre en relation
            les clients avec des artisans qualifiés au Gabon.
          </p>

          <p>
            Elle facilite la recherche rapide d’électriciens, plombiers,
            mécaniciens, maçons et charpentiers selon la ville ou le quartier.
          </p>

          <p>
            🎯 Objectif : rendre les services de dépannage plus accessibles,
            rapides et fiables pour tous.
          </p>

          <p>
            ⭐ Les utilisateurs peuvent consulter les profils, contacter
            directement les artisans et laisser des avis.
          </p>
        </div>

        {/* 👤 BIOGRAPHIE FONDATEUR */}
        <div style={bioBox}>
          <h2>👤 Fondateur</h2>

          <p><strong>Nom :</strong> EBE OBAME Paul Terence</p>
          <p><strong>Date de naissance :</strong> 03/05/2002</p>
          <p><strong>Ville :</strong> Libreville, Gabon</p>
          <p><strong>Email :</strong> ebepaul75@gmail.com</p>
          <p><strong>Rôle :</strong> Créateur de Depann'Gabon</p>

          <p>
            Passionné de technologie et de services numériques,
            j’ai créé Depann'Gabon pour moderniser la mise en relation
            entre artisans et clients au Gabon.
          </p>
        </div>

        {/* TEXTE */}
        <p style={desc}>
          Trouvez rapidement des artisans fiables au Gabon
        </p>

        <h3 style={{ marginTop: 25 }}>
          🔧 Choisir un métier
        </h3>

        {/* BOUTONS */}
        <div style={btnContainer}>

          <Link href="/electricien">
            <button style={btn}>⚡ Électricien</button>
          </Link>

          <Link href="/plombier">
            <button style={btn}>🚰 Plombier</button>
          </Link>

          <Link href="/mecanicien">
            <button style={btn}>🔧 Mécanicien</button>
          </Link>

          <Link href="/macon">
            <button style={btn}>🧱 Maçon</button>
          </Link>

          <Link href="/charpentier">
            <button style={btn}>🪚 Charpentier</button>
          </Link>

        </div>

      </div>
    </div>
  );
}

/* ===================== */
/* STYLE TYPESCRIPT FIX */
/* ===================== */

const pageStyle: React.CSSProperties = {
  minHeight: "100vh",
  backgroundImage: "url('/bg.jpg.png')",
  backgroundSize: "cover",
  backgroundPosition: "center"
};

const overlayStyle: React.CSSProperties = {
  backgroundColor: "rgba(0,0,0,0.70)",
  minHeight: "100vh",
  padding: 20,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "white"
};

const box: React.CSSProperties = {
  maxWidth: 700,
  backgroundColor: "rgba(255,255,255,0.08)",
  padding: 20,
  borderRadius: 20,
  marginBottom: 15,
  backdropFilter: "blur(6px)"
};

const bioBox: React.CSSProperties = {
  maxWidth: 700,
  backgroundColor: "rgba(0,150,255,0.15)",
  padding: 20,
  borderRadius: 20,
  marginBottom: 15,
  border: "1px solid rgba(255,255,255,0.2)"
};

const desc: React.CSSProperties = {
  maxWidth: 500,
  textAlign: "center",
  marginTop: 10
};

const btnContainer: React.CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: 10
};

const btn: React.CSSProperties = {
  padding: "12px 18px",
  borderRadius: 12,
  border: "none",
  background: "#0ea5e9",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer"
};