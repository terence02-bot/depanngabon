import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>

        {/* NAVBAR */}
        <nav style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          padding: 15,
          background: "#0ea5e9",
          color: "white",
          fontWeight: "bold"
        }}>

          <Link href="/" style={{ color: "white", textDecoration: "none" }}>
            Accueil
          </Link>

          <Link href="/inscription" style={{ color: "white", textDecoration: "none" }}>
            Inscription artisans
          </Link>

          <Link href="/connexion" style={{ color: "white", textDecoration: "none" }}>
            Connexion artisans
          </Link>

        </nav>

        {/* CONTENU */}
        <div>
          {children}
        </div>

      </body>
    </html>
  );
}