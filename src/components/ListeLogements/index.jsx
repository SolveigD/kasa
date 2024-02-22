import React from 'react';
import Card from '../Card/index'; 
import data from '../../logements.json';
import { Link } from 'react-router-dom'; 


function ListeLogements() {
    return (
      <div className='container_card'>
      {data.map((logement) => (
        <Link to={`/logement/${logement.id}`} key={logement.id}>  
          <Card logement={logement} />
        </Link>
      ))}
    </div>
    );
  }
  
  export default ListeLogements;