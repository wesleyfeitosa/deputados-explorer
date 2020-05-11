import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

import { Container } from './styles';

const Details = () => {
  const { params } = useRouteMatch();
  const [deputado, setDeputado] = useState({});

  useEffect(() => {
    async function getDeputado() {
      const { data } = await api.get(`/deputados/${params.id}`);

      setDeputado(data.dados);
    }

    getDeputado();
  }, [params.id]);

  return (
    <Container>
      <header>
        {deputado.ultimoStatus && (
          <img
            src={deputado.ultimoStatus.urlFoto}
            alt={deputado.ultimoStatus.nomeEleitoral}
          />
        )}
        <div>
          <h1>{deputado.nomeCivil}</h1>
          <p>CPF: {deputado.cpf}</p>
          <p>
            Nascimento: {deputado.dataNascimento}{' '}
            {deputado.dataFalescimento && (
              <span>- Falescimento: {deputado.dataFalescimento}</span>
            )}
          </p>
          {deputado.ultimoStatus && (
            <p>E-mail: {deputado.ultimoStatus.email}</p>
          )}
        </div>
      </header>

      <section>
        Naturalidade
        <p>
          {deputado.municipioNascimento}/{deputado.ufNascimento}
        </p>
      </section>

      <section>
        Escolaridade
        <p>{deputado.escolaridade}</p>
      </section>

      {deputado.ultimoStatus && (
        <section>
          Informações políticas
          <p>Situação: {deputado.ultimoStatus.situacao}</p>
          <p>Condição Eleitoral: {deputado.ultimoStatus.condicaoEleitoral}</p>
          <p>Legislatura: {deputado.ultimoStatus.idLegislatura}</p>
          <p>
            Partido: {deputado.ultimoStatus.siglaPartido}/
            {deputado.ultimoStatus.siglaUf}
          </p>
        </section>
      )}

      {deputado.ultimoStatus && deputado.ultimoStatus.gabinete && (
        <section>
          Gabinete
          <p>Sala: {deputado.ultimoStatus.gabinete.sala}</p>
          <p>Andar: {deputado.ultimoStatus.gabinete.andar}</p>
          <p>Prédio: {deputado.ultimoStatus.gabinete.predio}</p>
          <p>Telefone: {deputado.ultimoStatus.gabinete.telefone}</p>
        </section>
      )}
    </Container>
  );
};

export default Details;
