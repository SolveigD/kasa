import '../../sass/components/Banner.scss';
import Banner from '../../components/Banner';
//import Card from '../../components/Card';
import ListeLogements from '../../components/ListeLogements';


function Home() {
  return (
    <div><Banner showTitle={true} overlayOpacity={0.6} backgroundImageUrl="http://localhost:3000/static/media/IMG.1168be13650bb18b456e.png"/>
    <ListeLogements />
    </div>
  );
}

export default Home;
