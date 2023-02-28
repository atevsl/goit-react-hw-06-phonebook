import styled from 'styled-components';
export const ListStyled = styled.ul`
   {
    display: flex;
    flex-direction: column;
    justify-content: flex-start
    height: 430px;
    overflow: auto;
    margin-top: 0;
    padding: 10px;
  }
`;

export const ListItemStyled = styled.li`
   {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    margin: 2px;
  }
`;
export const ContactTextStyled = styled.p`
   {
    font-size: 24px;
    margin: 0;
    margin-right: 20px;
  }
`;
export const ContactListHeader = styled.h2`
   {
    font-size: 32px;
  }
`;
export const ContactListBtn = styled.button`
   {
     {
      font-family: 'Merienda', cursive;
      cursor: pointer;
      padding: 2px 8px;
      background-color: white;
      border-radius: 10px;
      font-size: 20px;
      color: black;
      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
`;
