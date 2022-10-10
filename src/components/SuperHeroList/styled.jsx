import styled from '@emotion/styled';

export const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  grid-column-gap: 10px;
  grid-row-gap: 10px;

  margin: 30px 0px;

  list-style: none;
`;

export const StyledDiv = styled.div`
  padding: 40px;
  text-align: center;

  & button {
    padding: 10px 15px;

    background-color: #ed1d24;
    color: #f5f5f5;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 5px 7px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);

    &:hover,
    &:focus {
      box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
        red 0 -18px 40px, 20px 14px 15px 5px rgba(0, 0, 0, 0);

      transform: scale(1.3);
      transition: 300ms linear, box-shadow 800ms linear;

      transition: 300ms linear, box-shadow 2000ms linear;
    }

    &:first-of-type {
      margin-right: 40px;
    }
  }
`;
