export default function Apropos() {

  return (
    <div style={container}>

      <h1>À propos de DepannGabon</h1>

      <p style={text}>
        DepannGabon est une plateforme numérique créée pour
        faciliter la mise en relation entre les artisans
        qualifiés et les particuliers au Gabon.
      </p>

      <p style={text}>
        Grâce à DepannGabon, les utilisateurs peuvent trouver
        rapidement des professionnels dans plusieurs domaines :
        électricité, plomberie, mécanique, maçonnerie,
        charpenterie et bien d’autres services.
      </p>

      <h2>Le fondateur</h2>

      <p style={text}>
        <strong>EBE OBAME Paul Terence</strong>, né le
        03/05/2002 à Libreville au Gabon, est le fondateur
        de la plateforme DepannGabon.
      </p>

      <p style={text}>
        Diplômé d’un baccalauréat F1c ainsi que d’une licence
        en électrotechnique, il est passionné par les solutions
        techniques, l’innovation et les nouvelles technologies.
      </p>

      <p style={text}>
        Il a créé DepannGabon avec la volonté de permettre aux
        populations d’accéder plus facilement à des artisans
        compétents et disponibles.
      </p>

      <p style={text}>
        Le projet vise également à aider les techniciens situés
        dans des zones reculées à gagner en visibilité et à
        entrer rapidement en contact avec les usagers ayant
        besoin de leurs services.
      </p>

      <p style={text}>
        La vision de DepannGabon est de devenir une plateforme
        de référence dans le domaine du dépannage et des services
        techniques au Gabon, tout en participant à la valorisation
        des compétences locales.
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