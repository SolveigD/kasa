import Slideshow from "../../components/Slideshow";
import { useParams, Navigate } from 'react-router-dom';
import logementsData from '../../logements.json';
import RedStar from '../../assets/RedStar.png';
import GreyStar from '../../assets/GreyStar.png';
import Collapse from "../../components/Collapse";
import '../../sass/layouts/Logements.scss'


function Logement() {
  
  const logementId = useParams();
  const logementData = logementsData.find(data => data.id === logementId.id);
  if (!logementData) {
    return <Navigate to="*" />;
  }

  const rating = parseInt(logementData.rating); 

  const redStars = Array.from({ length: rating }, (_, index) => (
    <img key={index} src={RedStar} alt="Red Star" className="RedStar" />
  ));

  const greyStars = Array.from({ length: 5 - rating }, (_, index) => (
    <img key={index} src={GreyStar} alt="Grey Star" className="GreyStar" />
  ));

  return (
    <div className="container_logement">
      <Slideshow logementData={logementData}></Slideshow>

      <div className="informations">
        <div className="top_information">
          <div className="title_location">
            <div className="title">{logementData.title}</div>
            <div className="location">{logementData.location}</div>
          </div>
          <div className="host_picture">
            <div className="hostName">{logementData.host.name}</div>
            <img src={logementData.host.picture} alt="hote" className="hostPicture"/>
          </div>
         </div> 
        
            <div className="tags_rate">
              <div className="tags">
                {logementData.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              <div className="rate">
                {redStars}
                {greyStars}
              </div>
            </div>
            
        <div className="collapses logement_collapse">
          <Collapse title='Description' content={logementData.description} />
          <Collapse title='Équipements' content={
            <ul>
              {logementData.equipments.map((equipment, index) => (
              <li key={index} className="liste_equipement">{equipment}</li>
                ))}
            </ul>
            } />
        </div>
      </div>
    </div>
  );
}

export default Logement;