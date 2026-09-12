import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function MenuDesafios() {
  return (
    <div>
      <nav className="bg-light border-bottom py-3">
        <div className="container d-flex justify-content-center flex-wrap gap-2">
          <Link to="desafio1" className="btn btn-outline-primary">
            Sobre React
          </Link>

          <Link to="desafio2" className="btn btn-outline-success">
            Perfil com Foto
          </Link>

          <Link to="desafio3" className="btn btn-outline-danger">
            Criador de Artigo
          </Link>

          <Link to="desafio4" className="btn btn-outline-warning">
            Caixa de Calculadoras
          </Link>

          <Link to="desafio5" className="btn btn-outline-info">
            Cadeira Clicker
          </Link>

          <Link to="desafio6" className="btn btn-outline-dark">
            Free Game API
          </Link>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default MenuDesafios;
