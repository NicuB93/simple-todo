import styled from "styled-components";

type Users = {
  users: {
    username?: string;
  }[];
};

export const Users = styled.div<Users>`
  background-color: white;
  width: 60%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  transition: height 0.5s ease;
  transition: opacity 0.5s ease;
  transition: padding 0.5s ease;
  height: auto;
  opacity: ${({ users }) => (users.length > 0 ? "1" : "0")};
  padding: ${({ users }) => (users.length > 0 ? "14px" : "0")};

  .username-render {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 10px;
    display: flex;
    justify-content: space-between;
    animation: heightAnimation 1s ease;

    @keyframes heightAnimation {
      0% {
        opacity: 0;
        height: auto;
        max-height: 0;
      }
      100% {
        opacity: 1;
        max-height: 100px;
      }
    }

    button {
      background-color: transparent;
      outline: none;
      border: 0;

      :before {
        content: "✕";
        cursor: pointer;
      }
    }
  }
`;
