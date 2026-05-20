import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundImage: "url('/bg.jpg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>

      {/* overlay */}
      <div style={{
        backgroundColor: "rgba(0,0,0,0.65)",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        color: "white",
        textAlign: "center"
      }}>

        {/* LOGO */}
        <img
          src="/bg.jpg.png"
          style={{ width: 90, marginBottom: 10 }}
        />

        {/* TITRE (VERSION 1 inchangée) */}
        <h1 style={{ margin: 0 }}>
          Trouvez un artisan fiable. Sans stress. En quelques secondes.
        </h1>

        {/* SOUS TITRE */}
        <h3 style={{ marginTop: 30 }}>
          🔧 Choisissez un métier
        </h3>

        {/* LISTE DES MÉTIERS (CORRIGÉE UNE SEULE FOIS) */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 12,
          maxWidth: 500,
          marginTop: 10
        }}>

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

        {/* DESCRIPTION EN BAS (inchangée) */}
        <p style={{
          fontSize: 14,
          maxWidth: 650,
          marginTop: 40,
          opacity: 0.9
        }}>
          DepannGabon est une plateforme qui vous permet de trouver rapidement
          des artisans fiables au Gabon. Que ce soit pour vos travaux
          d’électricité, plomberie, maçonnerie, mécanique ou charpente,
          vous pouvez contacter un professionnel en un simple clic via WhatsApp.
        </p>

      </div>
    </div>
  );
}

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