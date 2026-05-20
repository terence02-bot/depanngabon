export default function Home() {

  return (
    <div>

      {/* MENU */}

      <nav style={nav}>

        <h2 style={logo}>DepannGabon</h2>

        <div style={links}>

          <a href="/" style={link}>
            Accueil
          </a>

          <a href="/inscription" style={link}>
            Inscription
          </a>

          <a href="/connexion" style={link}>
            Connexion
          </a>

          <a href="/apropos" style={link}>
            À propos
          </a>

        </div>

      </nav>

      {/* CONTENU ACCUEIL */}

      <div style={hero}>

        <h1>
          Bienvenue sur DepannGabon
        </h1>

        <p>
          Trouvez rapidement des artisans qualifiés
          partout au Gabon.
        </p>

      </div>

    </div>
  );
}

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 40px",
  background: "#111",
  color: "white"
};

const logo = {
  margin: 0
};

const links = {
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
  textAlign: "center",
  backgroundImage:
    "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  padding: 20
};