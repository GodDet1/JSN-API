import styled from '@emotion/styled';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  position: relative;
  max-width: calc(100vw - 48px);
  /* max-height: calc(100vh - 24px); */

  background-color: white;
  padding: 20px;
`;

export const StyledExitButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;

  background-color: transparent;
  border: none;

  transition: transform 300ms linear;

  &:focus,
  &:hover {
    transform: scale(1.3);

    transition: transform 300ms linear;
  }
`;
