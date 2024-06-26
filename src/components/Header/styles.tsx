import styled from "styled-components";

export const Container = styled.header`
  background: #D73035;
  display: flex;
  justify-content: center;
  height: 198px;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1216px;
  align-items: center;
  justify-content: space-between;
  .page-details{
    h1 {
      color: white;
      font-size: 32px;
    }

    h2 {
      color: white;
      font-size: 1rem;
      font-weight: 400;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;
