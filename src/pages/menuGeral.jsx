import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function MenuGeral() {
  return (
    <div>
      <nav className="navbar navbar-expand bg-dark navbar-dark px-3">
        <div className="container justify-content-center gap-2">
          <Link to="modelo" className="btn btn-outline-light">
            Modelo
          </Link>

          <Link to="menu-testes" className="btn btn-outline-info">
            Testes
          </Link>

          <Link to="menu-desafios" className="btn btn-outline-warning">
            Desafios
          </Link>

          <Link to="pokemon" className="btn btn-outline-success">
            Pokémon
          </Link>

          <Link to="/" className="btn btn-light">
            🏠
          </Link>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default MenuGeral;