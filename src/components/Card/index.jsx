import '../../sass/components/Card.scss'



function Card({ logement }) { 
    const { title, cover } = logement;                               
  
    return (
      
      <div className="card">
         <div className="image_container">
            <img src={cover} alt={title} className='image_card' />
            <div className="image_overlay"></div>
      </div>
            <h2 className='title_card'>{title}</h2>
    </div>
    
    );
  }
  
  export default Card;