import { createContext, useState } from "react";

interface IUserContext {
  user: any;
  loading: boolean;
  setUser: (user: any) => void;
  setLoading: (loading: boolean) => void;
}

export const UserContext = createContext<IUserContext>({
  user: {};
  loading: true;
  setUser: ()=> {}
  setLoading: ()=> {}
});

export const UserContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({})
  const [ loading, setLoading] = useState(true)

  
}
