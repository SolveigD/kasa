import '../../sass/components/Banner.scss';
import Banner from '../../components/Banner';
import Imageaccueil from '../../assets/IMG.png';
import ListeLogements from '../../components/ListeLogements';


function Home() {
  return (
    <div><Banner showTitle={true} overlayOpacity={0.6} backgroundImageUrl={Imageaccueil}/>
    <ListeLogements />
    </div>
  );
}

export default Home;
