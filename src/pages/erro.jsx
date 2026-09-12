import React from 'react';

function Erro() {
  return (
    <div className="container d-flex justify-content-center align-items-center py-5">
      <div className="text-center bg-warning-subtle border border-warning rounded-3 p-5 shadow">
        <div className="display-1 mb-3">🔍</div>

        <h2 className="display-4 fw-bold text-warning-emphasis">
          404
        </h2>

        <h3 className="h4 text-dark">
          Ops! Algo deu errado.
        </h3>

        <p className="text-secondary mb-0">
          A página que você procura não existe.
        </p>
      </div>
    </div>
  );
}

export default Erro;
