import { UserType } from "@/util/types";
import axios from "axios";
import { useRouter } from "next/router";
import React, { createContext, useState, ReactNode, useContext } from "react";

export interface IUserContext {
  user: UserType | null;
  handleLogout: () => void;
  // loading: boolean;
  // isLoggedIn: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  submitHandler: (e: any) => void;
  // setLoading: (loading: boolean) => void;
  // setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

interface UserProviderType {
  children: ReactNode;
}

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }: UserProviderType) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  // const [loading, setLoading] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogout() {
    setUser(null);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function submitHandler(event: any): void {
    event.preventDefault();

    const target = event.currentTarget.elements;

    const userLogin: UserType = {
      email: target.email.value,
      password: target.password.value,
    };
    console.log("user login", userLogin);
    axios
      .post(`http://localhost:5000/user/login`, userLogin)
      .then((res) => {
        console.log("response", res);
        if (res.status === 201) {
          setUser(res.data.firstName);
          router.push("/success");
        } else {
          console.log("fail");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <UserContext.Provider
      value={{
        user,
        submitHandler,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
