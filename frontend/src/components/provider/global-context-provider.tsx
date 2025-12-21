"use client";
import React, { useState, useCallback } from "react";
import { GlobalContext } from "@/context/global-context";
import { IUser } from "@/types/user-d-t";
import Cookies from "js-cookie";

type IPropType = {
  children: React.ReactNode;
};

export default function GlobalContextProvider({ children }: IPropType) {
  const [userInfo, setUserInfo] = useState({
    accessToken: "",
    user: {} as IUser,
  });

  const handleSetUserInfo = useCallback((user: IUser, accessToken: string) => {
    setUserInfo({
      accessToken,
      user,
    });
  }, []); // No dependencies to keep it stable

  const handleLogout = () => {
    Cookies.remove('userInfo')
    setUserInfo({
      accessToken: "",
      user: {} as IUser,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        userInfo,
        handleSetUserInfo,
        handleLogout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
