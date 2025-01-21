import styled from "styled-components";

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 9px 21px 17px #2271d1;
  margin-top: 3rem;
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  

  label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #555;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  button {
    flex: 1;
    padding: 10px 15px;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:first-child {
      background-color: #007bff;
      color: #fff;
      

      &:hover {
        background-color: #0056b3;
        font-weight: bold;
      }
    }

    &:last-child {
      background-color:red;
      color: black;
     
      &:hover {
        background-color:rgb(201, 4, 17);
        font-weight: bold;
      }
    }
  }
`;
