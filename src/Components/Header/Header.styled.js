import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Header1 = styled.header`
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 50px;
  box-shadow: 9px 21px 17px #83848ac7;
  border: 0.125rem solid #2271d1;
  box-shadow: 9px 21px 17px #2271d1;
`;

export const LinkNav = styled(NavLink)`
  &.active button {
    background: #000000e5;
    border: 0.125rem solid #2271d1;
    box-shadow: 0px 0px 0.75rem 0.25rem #2271d1 inset;
    color: #2271d1;
  }
`;

export const Logo = styled.img`
  height: 3.125rem;
  margin-right: 2rem;
  display: none;

  @media (min-width: 740px) {
    display: flex;
  }
`;

export const Nav = styled.nav`
  box-shadow: 0px 0px 0.75rem 0.25rem #2271d1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 4rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 15px;

  @media (min-width: 740px) {
    justify-content: flex-start; /* Alinea el contenido al inicio */
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Alinea los botones a la derecha */
  width: 100%; /* Asegura que ocupe todo el ancho */
  gap: 2rem;

  @media (max-width: 740px) {
    flex-direction: column; /* Cambia la dirección a columna */
    align-items: center;   /* Centra los botones horizontalmente */
    gap: 1rem;             /* Añade espacio entre los botones */
  }
`;
