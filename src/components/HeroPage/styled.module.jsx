import styled from '@emotion/styled';

export const StyledDiv = styled.div`
  display: flex;

  margin: 30px 0px;

  & li {
    letter-spacing: 2px;
    font-size: 20px;

    color: black;

    &:not(:last-of-type) {
      margin-bottom: 10px;
    }

    & span {
      margin-left: 10px;
      font-size: 16px;
      color: #f5f5f5;
    }
  }
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 40px;

  background-color: #ed1d24;
  border-radius: 10px;

  box-shadow: 3px 10px 17px -7px #000, 10px 15px 22px 5px rgb(0 0 0 / 0%);

  & div.image-gallery {
    width: 100%;
  }

  & ul {
    list-style: none;
    margin: 0px;
  }
`;

export const StyledBtn = styled.button`
  width: 40%;
  padding: 10px 15px;

  background-color: transparent;

  border: 1px solid #ed1d24;
  border-radius: 20px;

  box-shadow: 0px 5px 7px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);

  transition: 300ms linear, box-shadow 3000ms linear;

  &:hover,
  &:focus {
    cursor: pointer;

    background-color: #ed1d24;
    color: #f5f5f5;

    box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
      red 0 -18px 40px, 20px 14px 15px 5px rgba(0, 0, 0, 0);

    transform: scale(1.3);
    transition: 300ms linear, box-shadow 1000ms linear;
  }
`;

export const StyledModalButtonsDiv = styled.div`
  display: flex;
  margin-top: 40px;

  & button {
    padding: 10px 15px;
    background-color: #f5f5f5;

    border: none;
    border-radius: 5px;

    box-shadow: 0px 5px 7px -7px #f5f5f5, 5px 5px 15px 5px rgb(0 0 0 / 0%);

    transition: 300ms linear, box-shadow 2000ms linear;

    &:hover,
    &:focus {
      box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
        red 0 -18px 40px, 20px 14px 15px 5px rgba(0, 0, 0, 0);

      transform: scale(1.3);
      transition: 300ms linear, box-shadow 800ms linear;
    }

    &:first-of-type {
      margin-right: 40px;
    }
  }
`;
