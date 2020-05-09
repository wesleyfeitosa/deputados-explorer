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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #2d2f34;
  max-width: 650px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto 10px;

  > svg {
    padding-top: 0px;
  }

  h1 {
    margin: 30px 0;
  }

  form {
    display: flex;
    margin: 30px;

    input {
      flex: 1;
      padding: 10px 20px;
      border-radius: 4px 0 0 4px;
      font-size: 16px;
      color: #2d2f34;
    }

    button {
      background: #72c0ea;
      border-radius: 0 4px 4px 0;
      padding: 0 30px;
      display: flex;
      justify-content: center;
      align-items: center;

      ${(props) =>
        props.isLoading &&
        css`
          cursor: not-allowed;
          opacity: 0.6;

          svg {
            animation: ${rotate} 2s linear infinite;
          }
        `}
    }
  }
`;

export const DeputadosContainer = styled.div`
  max-width: 650px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    background: #383b40;
    text-decoration: none;
    border-radius: 4px;
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 20px;
    color: #f8f8f8;
    transition: 0.2s;
    animation: ${appearFromBottom} 0.8s;

    & + a {
      margin-top: 10px;
    }

    &:hover {
      background-color: ${shade(0.2, '#383b40')};
      transform: translateX(20px);
    }

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
`;
