import React, { useState, useEffect } from 'react';
import { FiSearch, FiLoader } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Cabecalho, Title, DeputadosContainer } from './styles';
import api from '../../services/api';
import logoBrasil from '../../assets/brasil.svg';

const Home = () => {
  const [deputado, setDeputado] = useState('');
  const [deputados, setDeputados] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getDeputados() {
      const { data } = await api.get('/deputados', {
        params: {
          ordem: 'ASC',
          ordenarPor: 'nome',
          nome: deputado,
        },
      });

      setDeputados(data.dados);
    }

    getDeputados();
  }, []);

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
    <Container>
      <Cabecalho>
        <img src={logoBrasil} alt="Brasil" />
        <Title isLoading={loading}>
          <p>
            <span>@</span>
            <span>Deputados</span>
            <span>_</span>
            <span>Explorer</span>
          </p>
          <h2>Explore informações sobre os deputados</h2>
          <form onSubmit={(event) => handleSubmit(event)}>
            <input
              type="text"
              placeholder="Nome do deputado"
              value={deputado}
              onChange={(event) => setDeputado(event.target.value)}
            />
            <button type="submit">
              {loading ? <FiLoader size={25} /> : <FiSearch size={25} />}
            </button>
          </form>
        </Title>
      </Cabecalho>
      <DeputadosContainer>
        {deputados.map((dep) => (
          <Link to={`/details/${dep.id}`} key={dep.id}>
            <img src={dep.urlFoto} alt={dep.nome} />
            <section>
              <p>
                <span>{dep.nome}</span>
                <span>
                  {`${dep.siglaPartido || 'Sem partido'}/${dep.siglaUf}`}
                </span>
              </p>
              <div>
                <strong>E-mail: </strong>
                <span>{dep.email}</span>
              </div>
              <div>
                <strong>Legislatura: </strong>
                <span>{dep.idLegislatura}</span>
              </div>
            </section>
          </Link>
        ))}
      </DeputadosContainer>
    </Container>
  );
};

export default Home;
