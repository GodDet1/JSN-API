import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 40px;

  & div {
    display: flex;
    flex-direction: column;
  }

  & button {
    margin-top: 40px;
    padding: 10px 15px;

    font-weight: 700;

    background-color: transparent;

    border: 1px solid #ed1d24;
    border-radius: 5px;

    box-shadow: 0px 5px 7px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);

    transition: 300ms linear, box-shadow 2000ms linear;

    &:hover,
    &:focus {
      cursor: pointer;

      background-color: #ed1d24;
      color: #f5f5f5;

      box-shadow: #fff 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px,
        red 0 -18px 40px, 20px 14px 15px 5px rgba(0, 0, 0, 0);

      transform: scale(1.3);
      transition: 300ms linear, box-shadow 800ms linear;
    }
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: space-between;
  justify-content: space-between;

  & input {
    width: 500px;
    margin-left: 10px;

    border: none;

    box-shadow: 0px 5px 7px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  }

  & textarea {
    width: 500px;
    height: 300px;

    resize: vertical;

    border: none;

    box-shadow: 0px 5px 7px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  }

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;
