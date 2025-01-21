import styled from "styled-components";

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap:1rem;
  justify-content: center;
  flex: 1;
`;
