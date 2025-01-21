import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 22rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
  margin-left: auto;
  margin-right: auto;
  
  border-radius: 25px;
  box-shadow: 9px 21px 17px #83848ac7;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 740px) {
    width: 21rem;
  }

  @media (min-width: 1200px) {
    width: 30.75rem;
  }
`;

export const CardImageWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 0;
   min-height: 300px; /* Asegura que la imagen tenga al menos 300px de altura */
`;

export const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardTitle = styled.h3`
  flex-grow: 1; /* Permite que el título ocupe el espacio restante */
  text-align: center; /* Centra el texto horizontalmente */
  font-size: 1.3rem;
  color: #fff; /* Ajustar color de texto */
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.5rem;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 2.15rem;

  &:hover {
    color: #2271d1;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  h2 {
    margin-bottom: 20px;
    text-align: center;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  input,
  textarea {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px 15px;
    margin-right: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const DescriptionText = styled.p`
  padding: 10px;
  font-size: 14px;
  color: #333;
  /* Otros estilos */
`;

export const TitleText = styled.h3`
  padding: 10px;
  font-size: 16px;
  color: #333;
  /* Otros estilos */
`;
