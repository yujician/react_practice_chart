import { ChangeEvent, useMemo, useState } from 'react';

type User = {
  name: string;
  age: number;
};

const INITIAL_USERS: User[] = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 33 },
  { name: 'Charlie', age: 44 },
  { name: 'David', age: 55 },
];

type UseUsers = () => {
  userName: string;
  userAge: string;
  query: string;
  handleChangeUserName: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeUserAge: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeQuery: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddUser: () => void;
  filteredUsers: User[];
};

export const useUsers: UseUsers = () => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState(INITIAL_USERS);

  const handleChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleChangeUserAge = (e: ChangeEvent<HTMLInputElement>) => {
    setUserAge(e.target.value);
  };

  const handleChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleAddUser = () => {
    if (!Number(userAge)) {
      return; // 何もしない
    }

    if (!userName) {
      return; // 何もしない
    }

    const newUser: User = {
      name: userName,
      age: Number(userAge),
    };

    setUsers((prevState) => [...prevState, newUser]);
    setUserName('');
    setUserAge('');
  };

  // const filteredUsers = users.filter((user) =>
  //   user.name.toLowerCase().includes(query.toLocaleLowerCase()),
  // );

  const filteredUsers = useMemo(
    () => users.filter((user) => user.name.toLowerCase().includes(query.toLocaleLowerCase())),
    [query, users],
  );

  return {
    userName,
    userAge,
    query,
    handleChangeUserName,
    handleChangeUserAge,
    handleChangeQuery,
    handleAddUser,
    filteredUsers,
  };
};
