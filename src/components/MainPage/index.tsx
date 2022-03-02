import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { modal, mounted } from "../../../atoms/modal";
import { PortalModal } from "../ModalWindow";
import { Users } from "../Users";
import * as S from "./styled";

export const Main = () => {
  const [isMounted, setIsMounted] = useRecoilState(mounted);
  const usernameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const [openModal, setOpenModal] = useRecoilState<boolean>(modal);
  const [users, setUsers] = useState<{ username?: string; age?: number }[]>([]);
  const [errorMessage, setErrorMessage] =
    useState<{ title?: string; message?: string }>();

  const addUserHandler = () => {
    const username = usernameRef.current?.value.trim();
    const age = Number(ageRef.current?.value.trim());

    if (username?.length === 0) {
      setErrorMessage({
        title: "Invalid input",
        message: "Please enter a valid username",
      });
      return setOpenModal(true);
    } else if (age < 16 || age > 100) {
      setErrorMessage({
        title: "Invalid age",
        message: "Legal age is between 16 and 100",
      });
      return setOpenModal(true);
    } else {
      setUsers((prevArray) => [...prevArray, { username: username, age: age }]);
      usernameRef.current && (usernameRef.current.value = "");
      ageRef.current && (ageRef.current.value = "");
    }
  };

  const removeUserHandler = (i: number) => {
    return setUsers((prevArray) =>
      prevArray.filter((e, idx, arr) => e !== arr[i])
    );
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div onClick={() => setOpenModal(false)}>
      <S.Container modal={openModal}>
        <S.Form onClick={(e) => e.stopPropagation()}>
          <div className="username">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="" ref={usernameRef} />
          </div>
          <div className="age">
            <label htmlFor="age">Age (Years)</label>
            <input type="number" name="age" id="" ref={ageRef} />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              return addUserHandler();
            }}
            className="add-user"
          >
            Add user
          </button>
        </S.Form>
        <Users users={users} removeHandler={removeUserHandler} />
      </S.Container>
      <PortalModal content={errorMessage} />
    </div>
  );
};
