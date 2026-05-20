export default function Home() {
  return (
    <main style={main}>

      <nav style={nav}>
        <h2 style={logo}>DepannGabon</h2>

        <div style={menu}>
          <a href="/" style={link}>Accueil</a>
          <a href="/apropos" style={link}>À propos</a>
        </div>
      </nav>

      <section style={hero}>
        <h1 style={title}>
          Bienvenue sur DepannGabon
        </h1>

        <p style={subtitle}>
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