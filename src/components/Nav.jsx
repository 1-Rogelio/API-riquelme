import React from 'react';

import '../assets/css/Nav.css'

//--------IMPORTAMOS EL NavLink para ocupar el router------------
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <>

|   <div className='navegation'>
      <div>
      <ul>
        <NavLink to="/">
          <li>Inicio</li>
        </NavLink>

        <NavLink to="/info">
          <li>Sobre mí</li>
        </NavLink>
      </ul>
      </div>
    </div>

    </>
  );
}

export default Nav;
