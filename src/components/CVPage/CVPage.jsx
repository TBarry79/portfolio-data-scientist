import React from "react";
import { Link } from "react-router-dom";
import cvPDF from "../../assets/CV_Barry_TIDIANE.pdf";
import "./CVPage.css";

const CVPage = () => (
  <div className="cv-container">
    <h1 className="cv-title">Mon CV</h1>
    <div className="pdf-viewer">
      <object
        data={cvPDF}
        type="application/pdf"
        width="100%"
        height="700px"
      >
        <p>
          Votre navigateur ne supporte pas les PDF. Veuillez télécharger le
          PDF pour le consulter :{" "}
          <a href={cvPDF} download>
            Télécharger le CV
          </a>
        </p>
      </object>
    </div>
    <div className="cv-buttons">
      <a href={cvPDF} download className="download-button">
        📥 Télécharger
      </a>
      <Link to="/" className="back-button">
        ⬅ Retour
      </Link>
    </div>
  </div>
);

export default CVPage;
