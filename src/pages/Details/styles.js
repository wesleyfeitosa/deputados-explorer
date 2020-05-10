import styled from 'styled-components';

export const Container = styled.div`
  > div {
    color: #34f;
  }

  section {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;

    & + section {
      margin-top: 20px;
    }
  }
`;
