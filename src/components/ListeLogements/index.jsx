import React from 'react';
import Card from '../Card/index'; 
import data from '../../logements.json'

function ListeLogements() {
    return (
      <div className='container_card'>
        {data.map((logement) => ( // Itérez sur votre liste de logements
          <Card key={logement.id} logement={logement} /> // Passez les données du logement à chaque carte
        ))}
      </div>
    );
  }
  
  export default ListeLogements;