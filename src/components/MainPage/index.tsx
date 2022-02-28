import { useState } from "react";
import { useRecoilState } from "recoil";
import { modal } from "../../../atoms/modal";
import { Modal } from "../ModalWindow";
import { Users } from "../Users";
import * as S from "./styled";

export const Main = () => {
  const [openModal, setOpenModal] = useRecoilState<boolean>(modal);
  const [username, setUsername] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [users, setUsers] = useState<
    { username: typeof username; age: typeof age }[]
  >([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const addUserHandler = () => {
    setUsers((prevArray) => [...prevArray, { username: username, age: age }]);
    setUsername("");
    setAge("");
  };

  const removeUserHandler = (i: number) => {
    return setUsers((prevArray) =>
      prevArray.filter((e, idx, arr) => e !== arr[i])
    );
  };

  const nameValidationPattern = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;

  const formValidation = () => {
    if (!username.match(nameValidationPattern)) {
      setErrorMessage("Please enter a valid username");
      return setOpenModal(true);
    } else if (isNaN(+age)) {
      setErrorMessage("Please enter a valid age");
      return setOpenModal(true);
    } else if (+age < 16 || +age > 100) {
      setErrorMessage("Legal age is between 16 and 100");
      return setOpenModal(true);
    } else addUserHandler();
  };

  return (
    <div onClick={() => setOpenModal(false)}>
      <S.Container modal={openModal}>
        <S.Form onClick={(e) => e.stopPropagation()}>
          <div className="username">
            <label htmlFor="username">Username</label>
            <input
              onChange={(event) => setUsername(event.target.value)}
              value={username}
              type="text"
              name="username"
              id=""
            />
          </div>
          <div className="age">
            <label htmlFor="age">Age (Years)</label>
            <input
              onChange={(event) => setAge(event.target.value)}
              value={age}
              type="text"
              name="age"
              id=""
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              return formValidation();
            }}
            className="add-user"
          >
            Add user
          </button>
        </S.Form>
        <Users users={users} removeHandler={removeUserHandler} />
      </S.Container>
      <Modal content={errorMessage} />
    </div>
  );
};
