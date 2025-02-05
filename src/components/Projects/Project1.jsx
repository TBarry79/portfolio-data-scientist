import React from 'react';

const Project1 = () => {
  return (
    <div className="project-detail">
      <h1>Segmentation des clients d'un site e-commerce</h1>
      <img src="/path/to/your/K_TSNE_result.jpg" alt="Segmentation de clients" />
      <p>
        J'ai analysé les comportements d'achat de 100 000 clients d'Olist pour créer une segmentation précise...
      </p>
      <p><strong>Outils utilisés :</strong></p>
      <ul>
        <li><strong>Clustering :</strong> K-means et DBSCAN pour identifier des segments distincts</li>
        <li><strong>Visualisation :</strong> Matplotlib et Seaborn pour une présentation intuitive</li>
        <li><strong>Prétraitement :</strong> Standardisation des données et PCA pour la réduction de dimensionnalité</li>
        <li><strong>Analyse :</strong> Analyse des clusters pour des insights exploitables</li>
      </ul>
      <a href="https://github.com/TBarry79/DataScience-Projects/tree/main/Projet5_segmentezDesClientsDUnSiteECcommerce" className="button">
        Voir le projet sur GitHub
      </a>
    </div>
  );
};

export default Project1;
