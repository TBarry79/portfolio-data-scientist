import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import cvPDF from "../../assets/CV_Barry_TIDIANE.pdf";
import "./CVPage.css";

// Configurer pdf.js pour charger le worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const CVPage = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="cv-container">
      <h1 className="cv-title">Mon CV</h1>
      
      <div className="pdf-viewer">
        <Document 
          file={cvPDF}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>

      <p>Page {pageNumber} sur {numPages}</p>

      <div className="cv-buttons">
        <a href={cvPDF} download className="download-button">📥 Télécharger</a>
        <Link to="/" className="back-button">⬅ Retour</Link>
      </div>
    </div>
  );
};

export default CVPage;
