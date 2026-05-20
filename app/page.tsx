export default function Home() {
  return (
    <div>

      <nav style={{
        background: "black",
        padding: 20,
        display: "flex",
        gap: 20
      }}>

        <a href="/" style={{color:"white"}}>
          Accueil
        </a>

        <a href="/apropos" style={{color:"white"}}>
          À propos
        </a>

      </nav>

      <h1>
        Bienvenue sur DepannGabon
      </h1>

    </div>
  );
}