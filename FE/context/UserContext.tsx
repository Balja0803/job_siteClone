import React, { createContext, useState, ReactNode, useContext } from "react";

export interface IUserContext {
  user: any;
  loading: boolean;
  setUser: (user: any) => void;
  setLoading: (loading: boolean) => void;
}

export const UserContext = React.createContext<IUserContext>({
  user: {},
  loading: true,
  setUser: () => {},
  setLoading: () => {},
});

interface UserProviderType {
  children: ReactNode;
}

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }: UserProviderType) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
