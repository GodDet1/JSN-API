import { BackDrop, ModalWindow, StyledExitButton } from './styled.module';

function Modal({ onModalClose, children }) {
  const handleModalClose = () => onModalClose(null);

  return (
    <BackDrop>
      <ModalWindow>
        <StyledExitButton type="button" onClick={handleModalClose}>
          &#9587;
        </StyledExitButton>

        {children}
      </ModalWindow>
    </BackDrop>
  );
}

export default Modal;
