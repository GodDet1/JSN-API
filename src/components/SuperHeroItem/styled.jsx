import styled from '@emotion/styled';

const ListItem = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  border-radius: 20px;

  background-image: url(${props => props.imagePath});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  width: 100%;
  height: 400px;

  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);

  transition: opacity 500ms linear;

  &:hover {
    box-shadow: 0px 15px 18px -7px #000000, 20px 14px 15px 5px rgba(0, 0, 0, 0);
  }

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 100%;
    height: 100%;

    border-radius: inherit;

    transition: opacity 500ms linear;
    cursor: zoom-in;
  }

  &:hover a {
    background-color: #000000a2;

    transition: opacity 500ms linear;
  }

  & h2 {
    opacity: 0;

    font-size: 80px;
    font-weight: 700;
    text-align: center;

    color: rgb(245, 245, 245);

    text-shadow: 0 0 5px rgb(245, 245, 245), 0 0 10px rgb(245, 245, 245),
      0 0 15px rgb(245, 245, 245), 0 0 20px #ed1d24, 0 0 30px #ed1d24,
      0 0 40px #ed1d24, 0 0 55px #ed1d24, 0 0 75px #ed1d24;

    transition: opacity 500ms linear;
  }

  &:hover h2 {
    opacity: 1;

    transition: opacity 500ms linear;
  }

  & button {
    opacity: 0;
    position: absolute;
    right: 10px;
    top: 10px;

    background-color: inherit;
    border: none;

    color: rgb(245, 245, 245);

    cursor: pointer;
  }

  &:hover button {
    opacity: 1;

    transition: opacity 500ms linear;
  }
`;

export { ListItem };
