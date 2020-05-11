import styled from 'styled-components';

export const Container = styled.div`
  > div {
    color: #34f;
  }

  header {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    transition: 0.4s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    display: flex;

    & + header {
      margin-top: 20px;
    }

    &:hover {
      margin: -8px;
      margin-top: 0;
      margin-bottom: 8px;
    }

    img {
      width: 200px;
      border-radius: 6px;
    }

    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 12px;

      p {
        font-size: 20px;
      }
    }
  }

  section {
    border-radius: 10px;
    padding: 20px;
    transition: 0.4s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #fff;

    margin-top: 20px;

    &:hover {
      margin: -8px;
      margin-top: 20px;
      margin-bottom: 8px;
    }

    font-size: 22px;
    font-weight: 600;

    p {
      font-size: 20px;
      font-weight: 400;
      margin-top: 2px;
    }

    p:first-of-type {
      margin-top: 10px;
    }
  }
`;
