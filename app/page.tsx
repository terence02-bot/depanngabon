export default function Home() {

  return (
    <div>

      {/* NAVBAR */}

      <nav style={nav}>

        <h2 style={logo}>
          DepannGabon
        </h2>

        <div style={menu}>

          <a href="/" style={link}>
            Accueil
          </a>

          <a href="/electricien" style={link}>
            Électriciens
          </a>

          <a href="/plombier" style={link}>
            Plombiers
          </a>

          <a href="/mecanicien" style={link}>
            Mécaniciens
          </a>

          <a href="/macon" style={link}>
            Maçons
          </a>

          <a href="/charpentier" style={link}>
            Charpentiers
          </a>

          <a href="/apropos" style={link}>
            À propos
          </a>

        </div>

      </nav>

      {/* HERO */}

      <section style={hero}>

        <h1 style={title}>
          Bienvenue sur DepannGabon
        </h1>

        <p style={subtitle}>
          Trouvez rapidement des artisans qualifiés
          partout au Gabon.
        </p>

      </section>

      {/* METIERS */}

      <div style={grid}>

        <a href="/electricien" style={card}>
          ⚡ Électriciens
        </a>

        <a href="/plombier" style={card}>
          🚰 Plombiers
        </a>

        <a href="/mecanicien" style={card}>
          🔧 Mécaniciens
        </a>

        <a href="/macon" style={card}>
          🧱 Maçons
        </a>

        <a href="/charpentier" style={card}>
          🪚 Charpentiers
        </a>

      </div>

    </div>
  );
}

const nav = {
  background: "#111",
  padding: "20px 40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const logo = {
  color: "white",
  margin: 0
};

const menu = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap"
};

const link = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};

const hero = {
  height: "70vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  background: "#f4f4f4",
  padding: 20
};

const title = {
  fontSize: "55px",
  marginBottom: 20
};

const subtitle = {
  fontSize: "22px",
  maxWidth: 700
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 20,
  padding: 40
};

const card = {
  background: "#111",
  color: "white",
  padding: 30,
  borderRadius: 10,
  textAlign: "center",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: 20
};