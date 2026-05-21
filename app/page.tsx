import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundImage: "url('/bg.jpg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>

      {/* OVERLAY */}
      <div style={{
        backgroundColor: "rgba(0,0,0,0.65)",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
        color: "white"
      }}>

        <img
          src="/bg.jpg.png"
          alt="logo"
          style={{ width: 90, marginBottom: 10 }}
        />

        <h1 style={{ fontSize: 42, marginBottom: 10 }}>
          Depann'Gabon
        </h1>

        <p style={{ maxWidth: 500, textAlign: "center" }}>
          Trouvez rapidement des artisans fiables au Gabon
        </p>

        <h3 style={{ marginTop: 30 }}>
          🔧 Choisir un métier
        </h3>

        <div style={{
          display: "flex",
          gap: 12,
          overflowX: "auto",
          padding: 10,
          maxWidth: "100%"
        }}>

          <Link href="/electricien">
            <button style={{
              padding: "12px 18px",
              borderRadius: 12,
              border: "none",
              backgroundColor: "#0ea5e9",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              whiteSpace: "nowrap"
            }}>
              ⚡ Électricien
            </button>
          </Link>

          <Link href="/plombier">
            <button style={{
              padding: "12px 18px",
              borderRadius: 12,
              border: "none",
              backgroundColor: "#0ea5e9",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              whiteSpace: "nowrap"
            }}>
              🚰 Plombier
            </button>
          </Link>

          <Link href="/mecanicien">
            <button style={{
              padding: "12px 18px",
              borderRadius: 12,
              border: "none",
              backgroundColor: "#0ea5e9",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              whiteSpace: "nowrap"
            }}>
              🔧 Mécanicien
            </button>
          </Link>

          <Link href="/macon">
            <button style={{
              padding: "12px 18px",
              borderRadius: 12,
              border: "none",
              backgroundColor: "#0ea5e9",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              whiteSpace: "nowrap"
            }}>
              🧱 Maçon
            </button>
          </Link>

          <Link href="/charpentier">
            <button style={{
              padding: "12px 18px",
              borderRadius: 12,
              border: "none",
              backgroundColor: "#0ea5e9",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              whiteSpace: "nowrap"
            }}>
              🪚 Charpentier
            </button>
          </Link>

        </div>

        {/* BIOGRAPHIE */}
        <div style={{
          marginTop: 50,
          backgroundColor: "rgba(255,255,255,0.12)",
          padding: 25,
          borderRadius: 20,
          maxWidth: 700,
          lineHeight: 1.8,
          border: "1px solid rgba(255,255,255,0.2)"
        }}>

          <h2>👤 À propos du créateur</h2>

          <p><strong>Nom :</strong> EBE OBAME Paul Terence</p>
          <p><strong>Ville :</strong> Libreville, Gabon</p>
          <p><strong>Date de naissance :</strong> 03/05/2002</p>
          <p><strong>Email :</strong> ebepaul75@gmail.com</p>
          <p><strong>Rôle :</strong> Créateur de Depann'Gabon</p>

          <p>
            <strong>Description :</strong> Passionné de technologie et de services numériques.
          </p>

        </div>

      </div>
    </div>
  );
}