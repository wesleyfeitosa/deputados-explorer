import React, { useState } from 'react';
import { FiClipboard, FiSearch } from 'react-icons/fi';

import { Container, DeputadosContainer } from './styles';
import api from '../../services/api';

const Home = () => {
  const [deputado, setDeputado] = useState('');
  const [deputados, setDeputados] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const { data } = await api.get('/deputados', {
      params: {
        ordem: 'ASC',
        ordenarPor: 'nome',
        nome: deputado,
      },
    });

    setDeputados(data.dados);
    setLoading(false);
  }

  return (
    <>
      <Container isLoading={loading}>
        <FiClipboard size={90} />
        <h1>Deputados</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            type="text"
            placeholder="Nome do deputado"
            value={deputado}
            onChange={(event) => setDeputado(event.target.value)}
          />
          <button type="submit">
            <FiSearch />
          </button>
        </form>
      </Container>
      <DeputadosContainer>
        {deputados.map((dep) => (
          <a href="dasdsa" key={dep.id}>
            <img src={dep.urlFoto} alt={dep.nome} />
            {dep.nome}
          </a>
        ))}
      </DeputadosContainer>
    </>
  );
};

export default Home;
