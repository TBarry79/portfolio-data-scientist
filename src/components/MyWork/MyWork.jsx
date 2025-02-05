import React from 'react';
import { Link } from 'react-router-dom';
import './MyWork.css';
import theme_pattern from '../../assets/right.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.png';

const MyWork = () => {
  return (
    <div id='portfolio' className='mywork'>
      <div className='mywork-title'>
        <h1>Mes derniers projets</h1>
        <img src={theme_pattern} alt='Motif décoratif' />
      </div>
      <div className='mywork-container'>
        {mywork_data.map((work, index) => (
          <Link key={index} to={`/project/${index}`}>
            <img src={work.w_img} alt={`Projet ${index + 1}`} />
          </Link>
        ))}
      </div>
      <div className='mywork-showmore'>
        <p>Afficher plus</p>
        <img src={arrow_icon} alt='Icône flèche pour afficher plus' />
      </div>
    </div>
  );
};
// const MyWork = () => {
//   return (
//     <div id='portfolio' className='mywork'>
//         <div className='mywork-title'>
//             <h1>My latest work</h1>
//             <img src={theme_pattern} alt=''/>
//         </div>
//         <div className='mywork-container'>
//             {mywork_data.map((work,index)=>{
//               return <img key={index} src={work.w_img} alt=''/>
//             })}
//         </div>
//         <div className='mywork-showmore'>
//           <p>Show More</p>
//           <img src={arrow_icon} alt=''/>
//         </div>
//     </div>
//   )
// }

export default MyWork

