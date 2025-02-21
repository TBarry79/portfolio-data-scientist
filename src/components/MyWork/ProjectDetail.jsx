import React from 'react';
import { useParams, Link } from 'react-router-dom';
import mywork_data from '../../assets/mywork_data';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = mywork_data.find((item) => item.w_no === id);

  if (!project) {
    return <p>Projet non trouvé</p>;
  }

  return (
    <div className="project-detail">
      <h1>{project.w_name}</h1>
      <img src={project.w_img} alt={project.w_name} className="project-detail-img" />
      <p>{project.w_desc}</p>
      {project.w_tools && (
        <>
          <p><strong>Outils utilisés :</strong></p>
          <ul>
            {project.w_tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </>
      )}
      <a href={project.w_link} className="button">Voir le projet sur GitHub</a>
      
      {/* Ajout d'un bouton pour revenir à la liste des projets */}
      <Link to="/" className="back-button">⬅ Retour aux projets</Link>
    </div>
  );
};

export default ProjectDetail;
