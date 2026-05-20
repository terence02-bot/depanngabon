import React from "react";

export default function Home() {
  return (
    <main style={main as React.CSSProperties}>

      <nav style={nav as React.CSSProperties}>
        <h2 style={logo as React.CSSProperties}>DepannGabon</h2>

        <div style={menu as React.CSSProperties}>
          <a href="/" style={link as React.CSSProperties}>Accueil</a>
          <a href="/apropos" style={link as React.CSSProperties}>À propos</a>
        </div>
      </nav>

      <section style={hero as React.CSSProperties}>
        <h1 style={title as React.CSSProperties}>
          Bienvenue sur DepannGabon
        </h1>

        <p style={subtitle as React.CSSProperties}>
          Trouvez rapidement des artisans qualifiés au Gabon.
        </p>
      </section>

    </main>
  );
}

const main = {
  margin: 0,
  padding: 0
};

const nav = {
  background: "#111",
  color: "white",
  padding: "20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const logo = {
  margin: 0
};

const menu = {
  display: "flex",
  gap: "20px"
};

const link = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};

const hero = {
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#f5f5f5",
  textAlign: "center",
  padding: "20px"
};

const title = {
  fontSize: "50px",
  marginBottom: "20px"
};

const subtitle = {
  fontSize: "22px"
};