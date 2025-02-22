import React from 'react';
import { useParams, Link } from 'react-router-dom';
import mywork_data from '../../assets/mywork_data';
import './ProjectDetail.css';  // Assurez-vous que ce fichier existe bien !

const ProjectDetail = () => {
  const { id } = useParams();
  const project = mywork_data.find((item) => item.w_no === id);

  if (!project) {
    return <p className="error-message">❌ Projet non trouvé</p>;
  }

  return (
    <div className="project-detail-container">
      <h1 className="project-title">{project.w_name}</h1>
      
      <div className="project-content">
        <img src={project.w_img} alt={project.w_name} className="project-image" />
        
        <div className="project-description">
          <p>{project.w_desc}</p>

          {project.w_tools && (
            <>
              <h3 className="tools-title">🛠 Outils utilisés :</h3>
              <ul className="tools-list">
                {project.w_tools.map((tool, index) => (
                  <li key={index} className="tool-item">✔ {tool}</li>
                ))}
              </ul>
            </>
          )}

          <div className="project-buttons">
            <a href={project.w_link} className="github-button" target="_blank" rel="noopener noreferrer">
              🔗 Voir sur GitHub
            </a>
            
            <Link to="/" className="back-button">⬅ Retour</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
