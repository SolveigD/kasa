import '../../sass/components/Card.scss'



function Card({ logement }) { // Recevez les données du logement en tant que prop
    const { title, cover } = logement; // Destructurez les données du logement
  
    return (
      
      <div className="card">
        <img src={cover} alt={title} className='image_card' />
        <h2 className='title_card'>{title}</h2>

      </div>
    
    );
  }
  
  export default Card;