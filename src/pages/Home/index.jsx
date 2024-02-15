import '../../sass/components/Banner.scss';
import Banner from '../../components/Banner';
//import Card from '../../components/Card';
import ListeLogements from '../../components/ListeLogements';


function Home() {
  return (
    <div><Banner />
    <ListeLogements />
    </div>
  );
}

export default Home;
