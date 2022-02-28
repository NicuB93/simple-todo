import styled from "styled-components";

type ModalWindow = {
  modal: boolean;
};

type Users = {
  users: {
    username: string;
    age: string;
  }[];
};

export const Container = styled.div<ModalWindow>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background-color: black;
  width: 100%;
  height: 100vh;
  transition: z-index 0.5s ease;
  z-index: ${({ modal }) => (modal ? "-9999" : "999")};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: white;
  width: 60%;
  border-radius: 12px;
  padding: 1rem;

  .username,
  .age {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      font-weight: 700;
    }
  }

  button {
    width: fit-content;
    margin-top: 0.5rem;
    background-color: purple;
    color: white;
    border: 0;
    padding: 0.4rem 0.7rem;
  }
`;
