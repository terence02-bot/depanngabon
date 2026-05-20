export default function Home() {
  return (
    <div>

      <nav style={nav}>
        <h2 style={logo}>DepannGabon</h2>

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

      <section style={hero}>

        <h1 style={title}>
          Bienvenue sur DepannGabon
        </h1>

        <p style={subtitle}>
          Trouvez rapidement des artisans qualifiés au Gabon.
        </p>

      </section>

    </div>
  );
}

const nav = {
  background: "#111",
  padding: "20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const logo = {
  color: "white"
};

const menu = {
  display: "flex",
  gap: "15px",
  flexWrap: "wrap"
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
  textAlign: "center"
};

const title = {
  fontSize: "50px"
};

const subtitle = {
  fontSize: "22px"
};