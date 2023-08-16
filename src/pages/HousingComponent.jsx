import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Slider from "../react_component/_slider";
import Header from "../react_component/_header";
import Footer from "../react_component/_footer";
import Collapse from "../react_component/_collapse";

function HousingComponent({ data }) {
  // récupère l'id donné par le ReactRouter défini lors de la sélection du logement
  const { id } = useParams();
  //  méthode Array.find() pour rechercher le logement correspondant dans les données en utilisant l'ID extrait de l'URL.
  const selectedHousing = data.find((housing) => housing.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedHousing) {
      navigate("*"); // Redirection vers la page NotFound
    }
  }, [selectedHousing, navigate]);

  if (!selectedHousing) {
    return null; // Pas besoin de renvoyer de contenu ici
  }

  return (
    <div>
      <div className="container">
        <Header />
        <div className="main-product">
          <Slider images={selectedHousing.pictures} />
          <div className="info-elem">
            <div className="info-rent">
              <h2>{selectedHousing.title}</h2>
              <p>{selectedHousing.location}</p>
              <div className="container-tag">
                {selectedHousing.tags.map((tag) => (
                  <div key={tag} className="tag-name">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="info-notice">
              <div className="info-owner">
                <p>{selectedHousing.host.name}</p>
                <img src={selectedHousing.host.picture} alt="profil" />
              </div>
              <div className="rating">
                {Array.from({ length: 5 }, (_, index) => (
                  <i key={index} className={`fa-solid fa-star ${index < parseInt(selectedHousing.rating, 10) ? "primary" : "gray"}`}></i>
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            <Collapse container="container-collapse-product" titre="Description">
              <p>{selectedHousing.description}</p>
            </Collapse>
            <Collapse container="container-collapse-product" titre="Equipement">
              <ul>
                {selectedHousing.equipments.map((equipments) => (
                  <li key={equipments}>{equipments}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HousingComponent;
