import { createContext, useContext, useEffect, useState } from "react";
import customFetch from "../utilits/customFetch";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const fetchUser = async () => {
    try {
      const response = await customFetch.get("/users/current-user");
      setUser(response?.data?.user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser,fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
