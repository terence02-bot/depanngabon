export default function Home() {

  return (
    <div>

      {/* NAVIGATION */}

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

          <a href="/apropos" style={link}>
            À propos
          </a>

        </div>

      </nav>

      {/* SECTION ACCUEIL */}

      <section style={hero}>

        <h1 style={title}>
          Bienvenue sur DepannGabon
        </h1>

        <p style={subtitle}>
          Trouvez rapidement des artisans qualifiés
          partout au Gabon.
        </p>

      </section>

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
  gap: "20px"
};

const link = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};

const hero = {
  height: "90vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  backgroundImage:
    "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  padding: 20
};

const title = {
  fontSize: "60px",
  marginBottom: 20
};

const subtitle = {
  fontSize: "24px",
  maxWidth: 700
};