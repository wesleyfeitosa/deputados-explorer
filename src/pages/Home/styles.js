import styled, { keyframes, css } from 'styled-components';
import { shade } from 'polished';

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
`;

export const Cabecalho = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 70px;
  width: 100%;

  img {
    width: 270px;
  }
`;

export const Title = styled.div`
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
      padding: 10px 20px;
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
      transition: 0.3s;

      ${(props) =>
        props.isLoading &&
        css`
          opacity: 0.9;

          svg {
            animation: ${rotate} 2s linear infinite;
          }
        `}

      &:hover {
        background: ${shade(0.2, '#73af00')};
      }
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
    animation: ${appearFromBottom} 0.7s;
    transition: 0.4s;

    & + a {
      margin-top: 18px;
    }

    &:hover {
      transform: translateX(20px);
      background: ${shade(0.2, '#fff')};
    }

    img {
      width: 114px;
      height: 130px;
      border-radius: 6px;
    }

    section {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 16.5px 35px;

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
