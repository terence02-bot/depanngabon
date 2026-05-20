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
        color: "white"
      }}>

        {/* LOGO */}
        <img
          src="/bg.jpg.png"
          style={{ width: 90, marginBottom: 10 }}
        />

        <h1>Depann'Gabon</h1>

        <p style={{ maxWidth: 500, textAlign: "center" }}>
          Trouvez rapidement des artisans fiables au Gabon
        </p>

        <h3 style={{ marginTop: 30 }}>🔧 Choisir un métier</h3>

        {/* BOUTONS EN LIGNE */}
        <div style={{
          display: "flex",
          gap: 12,
          flexWrap: "nowrap",
          overflowX: "auto",
          padding: 10,
          maxWidth: "100%"
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