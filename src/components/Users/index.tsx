import * as S from "./styled";

type UsersProps = {
  users: {
    username: string;
    age: string;
  }[];
  removeHandler: (i: number) => void;
};

export const Users = ({ users, removeHandler }: UsersProps) => {
  return (
    <S.Users users={users}>
      {users.map((e, i) => (
        <div key={i} className="username-render">
          <span>
            {e.username} ({e.age} years old)
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              return removeHandler(i);
            }}
          />
        </div>
      ))}
    </S.Users>
  );
};
