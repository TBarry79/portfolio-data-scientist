import React from 'react';
import { useParams } from 'react-router-dom';
import mywork_data from '../../assets/mywork_data';

const ProjectDetail = () => {
  const { id } = useParams(); // Récupérer l'identifiant du projet depuis l'URL
  const project = mywork_data.find((item) => item.w_no === id); // Trouver le projet correspondant

  if (!project) {
    return <p>Projet non trouvé</p>;
  }

  return (
    <div className="project-detail">
      <h1>{project.w_name}</h1>
      <img src={project.w_img} alt={project.w_name} />
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
    </div>
  );
};

export default ProjectDetail;
