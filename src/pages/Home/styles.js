import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 70px;

  img {
    width: 260px;
  }
`;

export const Cabecalho = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 30px;

  p {
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 32px;
    color: #3d3d4d;
  }

  form {
    display: flex;
    width: 100%;

    input {
      flex: 1;
      font-size: 18px;
      padding: 15px 20px;
      border: 0;
      border-radius: 6px 0 0 6px;
    }

    button {
      padding: 5px 40px;
      display: flex;
      justify-content: center;
      border: 0;
      border-radius: 0 6px 6px 0;
      background-color: #73af00;
    }
  }
`;

export const DeputadosContainer = styled.div`
  display: flex;
  flex-direction: column;

  a {
    display: flex;
    flex-direction: row;
    background-color: #fff;
    border-radius: 6px;
    text-decoration: none;
    color: #3d3d4d;

    & + a {
      margin-top: 22px;
    }

    img {
      width: 130px;
      height: 130px;
      border-radius: 6px;
    }

    section {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px 35px;

      p {
        font-size: 28px;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
      }
    }
  }
`;
