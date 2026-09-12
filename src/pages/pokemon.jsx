import React, { useEffect, useState } from 'react';

function Pokemon() {
  const [pokemon, setPokemon] = useState('');
  const [geracao, setGeracao] = useState('');
  const [imagem, setImagem] = useState('');
  const [id, setId] = useState(1);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setPokemon(dados.name);
        setGeracao(dados.past_abilities[0].generation.name);
        setImagem(dados.sprites.front_default);
      });
  }, [id]);

  function randomizarPokemon() {
    const novoId = Math.floor(Math.random() * 1025) + 1;
    setId(novoId);
  }

  return (
    <div className="container text-center py-4">
      <h2 className="mb-4">🎮 Gerador de Pokémon 🎮</h2>

      <div className="card mx-auto">
        <div className="card-body">
          <img src={imagem} alt={pokemon} className="img-fluid mb-3" />

          <h3 className="text-capitalize">{pokemon}</h3>

          <p className="mb-1">
            <strong>ID:</strong> {id}
          </p>

          <p className="mb-3">
            <strong>Geração:</strong> {geracao}
          </p>

          <button onClick={randomizarPokemon} className="btn btn-primary">
            🎲 Pokémon Aleatório 🎲
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
