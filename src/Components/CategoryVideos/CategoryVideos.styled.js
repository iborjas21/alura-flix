import styled from "styled-components";

export const CategoryTitle = styled.h2`
  width: 50%;
  background-color: ${({ theme, categoria }) =>
    theme.colors.categoryColors[categoria]};
  color: #fff;
  padding: 1rem;
  border-radius: 15px;
  margin: auto;
  margin-bottom: 2.5rem;
  margin-top: 2.5rem;
  border-radius: 15px;
  box-shadow: 9px 21px 17px #83848ac7;
  text-align: center; /* Centra el texto dentro de la caja */
  display: flex;
  justify-content: center;
  align-items: center; /* Asegura que el texto se alinee verticalmente si es necesario */
`;

export const VideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
