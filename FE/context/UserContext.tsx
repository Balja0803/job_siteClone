import { Dispatch, SetStateAction } from "react";
import { createContext } from "react";

interface IUserContext {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
}

const UserContext = createContext<IUserContext>({
    user: "",
    setUser: ()= {},
})