import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Body.css';
import characters from '../assets/images/characters.jpg';
import location from '../assets/images/location.jpg';
import episodes from '../assets/images/episodes.jpg';
import { NavLink } from 'react-router-dom';

function Body() {
  return (
    <>

        <div className="container_all_body">

          <div className='container_descrip'>
            <div>
              <h1 className='title_descrip'>API Rick and Morty</h1>
            </div>
            <div className='p_descrip'>
              <p>API de Rick y Morty consumida desde React JS Vite y Axios. <br />
              Este proyecto consiste consumir la API antes mencionada para mostrar su información sobre <br /> 
              los personajes, así como también filtrarlos por el nombre, especie, status, página y lugares.</p>
            </div>
          </div>

          <div className="card-group">
            <div className="card fondo">
              <NavLink to="/characters">
                <img src={characters} className="card-img-top image_card" alt="Characters"/>
              </NavLink>
              <div className="card-body">
                <h5 className="card-title">Characters</h5>
              </div>
            </div>

            <div className="card fondo">
              <img src={location} className="card-img-top image_card" alt="Location"/>
              <div className="card-body">
                <h5 className="card-title">Location</h5>
              </div>
            </div>

            <div className="card fondo">
              <img src={episodes} className="card-img-top image_card" alt="Episodes"/>
              <div className="card-body">
                <h5 className="card-title">Episodes</h5>
              </div>
            </div>
            
          </div>
        </div>
    </>
  );
}

export default Body;
