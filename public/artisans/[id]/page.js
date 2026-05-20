import Link from "next/link";

export default function HomePage() {
  return (
    <div style={container}>

      <div style={overlay}>

        {/* LOGO */}
        <img
          src="/bg.jpg.png"
          alt="logo"
          style={{ width: 90, marginBottom: 10 }}
        />

        <h1>Depann'Gabon</h1>

        {/* PHRASE PRESENTATION (VISIBLE) */}
        <p style={text}>
          Trouvez rapidement des artisans fiables au Gabon
        </p>

        <h3 style={{ marginTop: 30 }}>🔧 Choisir un métier</h3>

        {/* BOUTONS METIERS */}
        <div style={scroll}>

          <Link href="/electricien" style={btn}>⚡ Électricien</Link>
          <Link href="/plombier" style={btn}>🚰 Plombier</Link>
          <Link href="/mecanicien" style={btn}>🔧 Mécanicien</Link>
          <Link href="/macon" style={btn}>🧱 Maçon</Link>
          <Link href="/charpentier" style={btn}>🪚 Charpentier</Link>

        </div>

        {/* SECTION FONCTIONNEMENT */}
        <div style={howBox}>

          <h2>⚙️ Principe de fonctionnement</h2>

          <div style={steps}>

            <div style={step}>
              <h3>1. Inscription</h3>
              <p>L’artisan crée son compte avec ses informations.</p>
            </div>

            <div style={step}>
              <h3>2. Publication</h3>
              <p>Il ajoute son métier, contact et localisation.</p>
            </div>

            <div style={step}>
              <h3>3. Recherche</h3>
              <p>Les clients trouvent rapidement un artisan.</p>
            </div>

            <div style={step}>
              <h3>4. Contact</h3>
              <p>Le client contacte directement l’artisan.</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

/* ===== STYLE GLOBAL ===== */

const container = {
  minHeight: "100vh",
  backgroundImage: "url('/bg.jpg.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: 50
};

const overlay = {
  backgroundColor: "rgba(0,0,0,0.65)",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: 20,
  color: "white",
  overflowY: "auto"
};

const text = {
  maxWidth: 500,
  textAlign: "center"
};

const scroll = {
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
  textDecoration: "none",
  whiteSpace: "nowrap"
};

/* ===== SECTION FONCTIONNEMENT ===== */

const howBox = {
  marginTop: 50,
  background: "rgba(255,255,255,0.95)",
  color: "#111",
  padding: 30,
  borderRadius: 15,
  maxWidth: 900,
  textAlign: "center"
};

const steps = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: 20,
  marginTop: 20
};

const step = {
  background: "#fff",
  padding: 20,
  borderRadius: 12,
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
};