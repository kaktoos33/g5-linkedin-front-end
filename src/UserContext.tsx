import React, { useContext } from "react";
import { FC, useState } from "react";
import { User } from "./models/User";

interface IUserContext {
  user: User;
  setNewUser?: (newUser: User) => void;
}

const defaultUser: User = {
  userId: "",
  isCompany: false,
};

const UserContext = React.createContext<IUserContext>({ user: defaultUser });

export const UserContextProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User>(defaultUser);
  const setNewUser = (newUser: User) => {
    if (typeof newUser != "undefined") if (newUser != null) setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, setNewUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
