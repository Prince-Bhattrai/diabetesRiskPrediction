import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { server } from "../../server";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null); 
  const [history, setHistory] = useState([]);
  console.log("User from context",user)

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token);
  }, []);

  useEffect(() => {
    const currUser = localStorage.getItem("user");
    if (currUser) {
      try {
        const parsedUser = JSON.parse(currUser);
        setUser(parsedUser);
      } catch (err) {
        console.error("Error parsing user from localStorage:", err);
      }
    }
  }, []);

  useEffect(() => {
    const fetchHist = async () => {
      if (!user || !user._id) return; 
      try {
        const response = await axios.get(`${server}/v1/api/query/data/${user._id}`);
        console.log("Fetched history:", response.data.data);
        setHistory(response.data.data);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchHist();
  }, [user]);

  return (
    <AppContext.Provider
      value={{
        count,
        setCount,
        isLogin,
        setIsLogin,
        user,
        history,
        setHistory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
