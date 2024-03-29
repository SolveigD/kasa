import Collapse from "../../components/Collapse";
import Banner from "../../components/Banner";
import Image from '../../assets/imgapropos.jpg';
import '../../sass/layouts/A-propos.scss';


function APropos () {
    return ( 
     <div className="container_apropos">
     <Banner showTitle={false} overlayOpacity={0.3} backgroundImageUrl={Image}/>   
    <div className="collapses">
    <Collapse title="Fiabilité" 
    content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes au logement, et toutes les informations sont régulièrement vérifiées par notre équipe."/>
    <Collapse title="Respect" 
    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
    <Collapse title="Service" 
    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
    <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
    </div>
    </div>
    )
}

export default APropos