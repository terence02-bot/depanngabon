import Link from "next/link";

export default function HomePage() {
  return (
    <div style={pageStyle}>

      {/* OVERLAY */}
      <div style={overlayStyle}>

        {/* LOGO */}
        <img
          src="/bg.jpg.png"
          alt="logo"
          style={logoStyle}
        />

        <h1 style={titleStyle}>
          Depann'Gabon
        </h1>

        <p style={descriptionStyle}>
          Trouvez rapidement des artisans fiables au Gabon
        </p>

        <h3 style={subtitleStyle}>
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

        {/* BIOGRAPHIE */}
        <div style={bioCard}>

          <h2>👤 À propos du créateur</h2>

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
            <strong>Description :</strong>
            Passionné de technologie et de services numériques,
            avec l’ambition de moderniser la mise en relation
            entre artisans et clients au Gabon.
          </p>

        </div>

      </div>
    </div>
  );
}

/* ======================= */
/* STYLES */
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
  padding: "20px",
  color: "white"
};

const logoStyle = {
  width: "90px",
  marginBottom: "10px"
};

const titleStyle = {
  fontSize: "42px",
  marginBottom: "10px"
};

const subtitleStyle = {
  marginTop: "30px"
};

const descriptionStyle = {
  maxWidth: "500px",
  textAlign: "center"
};

const metierContainer = {
  display: "flex",
  gap: "12px",
  overflowX: "auto",
  padding: "10px",
  maxWidth: "100%"
};

const btn = {
  padding: "12px 18px",
  borderRadius: "12px",
  border: "none",
  backgroundColor: "#0ea5e9",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  whiteSpace: "nowrap"
};

const bioCard = {
  marginTop: "50px",
  backgroundColor: "rgba(255,255,255,0.12)",
  padding: "25px",
  borderRadius: "20px",
  maxWidth: "700px",
  lineHeight: "1.8",
  border: "1px solid rgba(255,255,255,0.2)"
};