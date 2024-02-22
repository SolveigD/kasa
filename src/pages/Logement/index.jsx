import Slideshow from "../../components/Slideshow";
import { useParams } from 'react-router-dom';
import logementsData from '../../logements.json';


function Logement() {
  const logementId = useParams();
  const logementData = logementsData.find(data => data.id === logementId.id);

    return (
        <div>
          <Slideshow logementData={logementData}></Slideshow>

          <div className="informations">
            <div className="title">{logementData.title}</div>
            <div className="location"> {logementData.location}</div>
          </div>
        </div>

    );
}
export default Logement;