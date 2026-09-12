import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function MenuTestes() {
  return (
    <div>
      <nav className="bg-primary p-3">
        <div className="container d-flex justify-content-center flex-wrap gap-2">
          <Link to="teste0" className="btn btn-light">Teste 0</Link>
          <Link to="teste1" className="btn btn-outline-light">Teste 1</Link>
          <Link to="teste2" className="btn btn-outline-light">Teste 2</Link>
          <Link to="teste3" className="btn btn-outline-light">Teste 3</Link>
          <Link to="teste4" className="btn btn-outline-light">Teste 4</Link>
          <Link to="teste5" className="btn btn-outline-light">Teste 5</Link>
          <Link to="teste6" className="btn btn-outline-light">Teste 6</Link>
          <Link to="teste7" className="btn btn-outline-light">Teste 7</Link>
          <Link to="teste8" className="btn btn-outline-light">Teste 8</Link>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default MenuTestes;