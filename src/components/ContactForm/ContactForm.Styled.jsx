import styled from 'styled-components';
export const FormStyled = styled.form`
   {
    font-size: 24px;
    border: 3px solid black;
    border-radius: 15px;
    padding: 25px 30px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 20px;
  }
`;
export const ButtonStyled = styled.button`
   {
    font-family: 'Merienda', cursive;
    color: black;
    cursor: pointer;
    padding: 8px 16px;
    background-color: white;
    border-radius: 15px;
    font-size: 24px;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
export const InputStyled = styled.input`
   {
    font-family: 'Merienda', cursive;
    font-size: 18px;
    height: 40px;
    border-radius: 15px;
    outline: none;
  }
`;
export const LabelStyled = styled.label`
   {
    display: flex;
    flex-direction: column;
    justify-content: center;
    alignitems: center;
  }
`;
export const Headers = styled.h1`
   {
    font-size: 40px;
  }
`;
