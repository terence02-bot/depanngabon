export default function Apropos() {

  return (
    <div style={container}>

      <h1>À propos de DepannGabon</h1>

      <p style={text}>
        DepannGabon est une plateforme créée pour faciliter
        la mise en relation entre les artisans qualifiés et
        les particuliers au Gabon.
      </p>

      <p style={text}>
        Le projet est né du constat que beaucoup de personnes
        ont des difficultés à trouver rapidement des artisans
        sérieux et disponibles pour des travaux de dépannage,
        d’installation ou de maintenance.
      </p>

      <h2>Le fondateur</h2>

      <p style={text}>
        Le fondateur de DepannGabon est un jeune entrepreneur
        gabonais passionné par le numérique, l’innovation et
        les solutions pratiques capables d’améliorer le quotidien
        des populations.
      </p>

      <p style={text}>
        Sa vision est de construire une plateforme moderne,
        fiable et accessible permettant aux artisans gabonais
        de gagner en visibilité tout en offrant aux clients
        un service simple, rapide et sécurisé.
      </p>

      <p style={text}>
        DepannGabon ambitionne à terme de devenir une référence
        dans le domaine des services et du dépannage au Gabon
        et en Afrique centrale.
      </p>

    </div>
  );
}

const container = {
  padding: 30,
  maxWidth: 900,
  margin: "auto",
  lineHeight: 1.8
};

const text = {
  marginBottom: 20,
  fontSize: 18
};