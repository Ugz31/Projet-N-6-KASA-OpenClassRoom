import React from "react";
import Header from "./_header";
import Footer from "./_footer";
import Collapse from "./_collapse";

function AboutPage() {
  return (
    <div>
      <div className="container">
        <Header />
        <div className="div-img2"></div>
        <div className="main-apropos">
          <Collapse container="container-collapse-apropos" titre="Fiabilité">
            <p>
              {
                "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logemens, et toutes les informations sont régulièrement vérifiées par nos équipes"
              }
            </p>
          </Collapse>
          <Collapse container="container-collapse-apropos" titre="Respect">
            <p>
              {
                "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation de voisinage entraînera une exclusion de notre plateforme"
              }
            </p>
          </Collapse>
          <Collapse container="container-collapse-apropos" titre="Service">
            <p>
              {
                "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation de voisinage entraînera une exclusion de notre plateforme"
              }
            </p>
          </Collapse>
          <Collapse container="container-collapse-apropos" titre="Sécurité">
            <p>
              {
                "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour nos voyageurs, chaques logements correspond aux critères établis par nos services. En laissant une note aussi bien a l'hôte qu'au locataire, cela permet a nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.  "
              }
            </p>
          </Collapse>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
