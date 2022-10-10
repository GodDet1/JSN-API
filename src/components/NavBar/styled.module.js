import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  height: 60px;
`;

export const StyledNavBar = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: inherit;
  width: 100%;
  background-color: #ed1d24;

  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);

  z-index: 10;

  & svg {
    margin-left: 40px;
    height: inherit;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex;

  padding: 20px;
  width: 400px;

  & a {
    position: relative;
    text-decoration: none;
    color: rgb(245, 245, 245);
    width: auto;

    transition: transform 300ms linear;

    & a.active {
      background-color: black;
    }

    &:hover {
      transform: scale(1.3);

      transition: transform 300ms linear;
    }

    &:first-of-type {
      margin-left: 40px;
    }

    &:not(:last-of-type) {
      margin-right: 40px;
    }
  }
`;
