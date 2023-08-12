import React, { useState, useRef, useLayoutEffect, useEffect } from "react";

function Collapse({ container, titre, children }) {
  const [isOpen, setIsOpen] = useState(false);
  // effet a null, il sera réinitialiser après le premier rendu du DOM et l'élément trouver avec le ref
  const contentRef = useRef(null);
  const collapseRef = useRef(null);

  // MARGIN BOTTOM
  // useLayoutEffect est similaire à useEffect, mais il s'exécute de manière synchrone après toutes les mutations du DOM, ce qui le rend plus adapté aux mises à jour immédiates du style qui dépendent de la taille ou de la disposition des éléments DOM.
  useLayoutEffect(() => {
    if (isOpen && collapseRef.current) {
      const contentMarginBottom = contentRef.current.scrollHeight;
      const updateStyle = collapseRef.current.style;
      updateStyle.marginBottom = `${contentMarginBottom}px`;
    } else {
      const updateStyle = collapseRef.current.style;
      updateStyle.marginBottom = "0"; // Réinitialiser le marginBottom lorsque la collapse est fermée
    }
  }, [isOpen]);

  // RESPONSIVITE DU MARGIN BOTTOM (lorsque le viewport diminue alors qu'une collapse est ouverte)
  useEffect(() => {
    const handleResize = () => {
      if (isOpen && contentRef.current) {
        const contentHeight = contentRef.current.scrollHeight;
        const updateStyle = collapseRef.current.style;
        updateStyle.marginBottom = `${contentHeight}px`;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    // si isOpen est true, la chaîne de caractères de modèle sera 'collapse open'. Si isOpen est false, elle sera 'collapse '
    // si 'isOpen' est true alors on affiche la div : ligne 14
    <div className={container}>
      <div ref={collapseRef} className={`collapse ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="cbar">
          <h3>{titre}</h3>
          <i className="fa-solid fa-chevron-up"></i>
        </div>
        {isOpen && (
          <div ref={contentRef} className="content">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default Collapse;
