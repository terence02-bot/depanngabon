import Link from "next/link";

export default function HomePage() {
  return (
    <div style={pageStyle}>

      {/* OVERLAY */}
      <div style={overlayStyle}>

        {/* LOGO */}
        <img
          src="/bg.jpg.png"
          style={{ width: 90, marginBottom: 10 }}
        />

        <h1 style={{ fontSize: 42, marginBottom: 10 }}>
          Depann'Gabon
        </h1>

        <p style={descriptionStyle}>
          Trouvez rapidement des artisans fiables au Gabon
        </p>

        <h3 style={{ marginTop: 30 }}>
          🔧 Choisir un métier
        </h3>

        {/* BOUTONS METIERS */}
        <div style={metierContainer}>

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

        {/* ======================= */}
        {/* BIOGRAPHIE */}
        {/* ======================= */}

        <div style={bioCard}>

          <h2 style={{ marginBottom: 15 }}>
            👤 À propos du créateur
          </h2>

          <p>
            <strong>Nom :</strong> EBE OBAME Paul Terence
          </p>

          <p>
            <strong>Ville :</strong> Libreville, Gabon
          </p>

          <p>
            <strong>Date de naissance :</strong> 03/05/2002
          </p>

          <p>
            <strong>Email :</strong> ebepaul75@gmail.com
          </p>

          <p>
            <strong>Rôle :</strong> Créateur de Depann'Gabon
          </p>

          <p>
            <strong>Description :</strong> Passionné de technologie
            et de services numériques, avec l’ambition de moderniser
            la mise en relation entre artisans et clients au Gabon
            grâce à une plateforme simple, rapide et accessible.
          </p>

        </div>

      </div>
    </div>
  );
}

/* ======================= */
/* PAGE */
/* ======================= */

const pageStyle = {
  minHeight: "100vh",
  backgroundImage: "url('/bg.jpg.png')",
  backgroundSize: "cover",
  backgroundPosition: "center"
};

const overlayStyle = {
  backgroundColor: "rgba(0,0,0,0.65)",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 20,
  color: "white"
};

const descriptionStyle = {
  maxWidth: 500,
  textAlign: "center"
};

/* ======================= */
/* METIERS */
/* ======================= */

const metierContainer = {
  display: "flex",
  gap: 12,
  flexWrap: "nowrap",
  overflowX: "auto",
  padding: 10,
  maxWidth: "100%"
};

const btn = {
  padding: "12px 18px",
  borderRadius: 12,
  border: "none",
  background: "#0ea5e9",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  whiteSpace: "nowrap"
};

/* ======================= */
/* BIOGRAPHIE */
/* ======================= */

const bioCard = {
  marginTop: 50,
  backgroundColor: "rgba(255,255,255,0.12)",
  backdropFilter: "blur(6px)",
  padding: 25,
  borderRadius: 20,
  maxWidth: 700,
  lineHeight: 1.8,
  border: "1px solid rgba(255,255,255,0.2)"
};