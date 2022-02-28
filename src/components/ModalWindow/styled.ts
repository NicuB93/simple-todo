import styled from "styled-components";

type ModalProps = {
  modal: boolean;
};

export const ModalContainer = styled.div<ModalProps>`
  display: flex;
  position: relative;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100vh;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s ease;
  opacity: ${({ modal }) => (modal ? "1" : "0")};
`;

export const ModalWindow = styled.div<ModalProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: fit-content;
  border-radius: 12px;
  overflow: hidden;
  top: -100px;
  transition: opacity 0.5s ease, transform 0.5s ease;
  opacity: ${({ modal }) => (modal ? "1" : "0")};
  transform: ${({ modal }) => (modal ? "translateY(100px)" : "")};

  .modal-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: purple;
    color: white;
    padding: 1rem 1rem;

    button {
      border: 0;
      background: transparent;
      color: white;
      outline: none;
      padding: 0.5rem 0.7rem;
      transition: background-color 0.5s ease;

      :before {
        content: "✕";
        cursor: pointer;
      }

      :hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
  }

  .modal-content {
    background-color: white;
    padding: 1rem 1rem;
  }
`;
