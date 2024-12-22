import React from 'react';
import '../assets/css/Info.css'

import perfil from '../assets/images/perfil.jpeg'

//Importación de iconos de redes sociales
import face from '../assets/images/facebook.png';
import whats from '../assets/images/whatsapp.png';
import insta from '../assets/images/instagram.png';
import git from '../assets/images/github.png'

import { NavLink } from 'react-router-dom';

//IMPORTAMOS COMPONENTES
import Header from './Header';

function Info() {
  return (
    <>
    <Header/>

      <div className='container_all'>
        <div>

          <div>
            <h1 className='title_present'>Mi Presentación</h1>
          </div>

          <div className='p_presentation'>
            <p>Soy Rogelio Jesus tengo 22 años soy Estudiante de Ingenieria en Sistemas Computacionales de ultimo semestre,
            Es muy interesante la carrera y muy amplia, me gusta crear APIS y consumirlas para en un futuro ser un desarrollador
            y trabajar sobre ello. <br />
            </p>
              
            <div className='image_repre'>
              <img className='perfil_image' src={perfil} alt="" />
            </div>

            <div>
              <h1 className='title_contact'>Contactame aquí</h1>
              <div className='icons_redes'>
                <div>
                  <NavLink to="https://www.facebook.com/jesus.leyva.946517?mibextid=ZbWKwL&_rdc=2&_rdr">
                    <img className='icon_image' src={face}  />
                  </NavLink>
                </div>

                <div>
                  <NavLink to="https://www.instagram.com/leyva_rj/?igshid=ZDdkNTZiNTM%3D">
                    <img className='icon_image' src={insta}  />
                  </NavLink>
                </div>

                <div>
                  <NavLink>
                    <img className='icon_image' src={whats}  />
                  </NavLink>
                </div>

                <div>
                  <NavLink to="https://github.com/1-Rogelio">
                    <img className='icon_image' src={git}  />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </>
  );
}

export default Info;
