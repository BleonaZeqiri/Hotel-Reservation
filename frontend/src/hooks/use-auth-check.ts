"use client";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import useGlobalContext from "./use-global-context";
import { IUser } from "@/types/user-d-t";

export default function useAuthCheck() {
  const { handleSetUserInfo } = useGlobalContext();
  const [authChecked, setAuthChecked] = useState<boolean>(false);

  useEffect(() => {
    const localAuth = Cookies.get("userInfo");
    if (localAuth) {
      const auth: { accessToken: string; user: IUser } = JSON.parse(localAuth);
      if (auth?.accessToken && auth?.user) {
        handleSetUserInfo(auth.user, auth.accessToken); // Call without causing infinite loop
      }
    }
    setAuthChecked(true); // Ensure this runs only once
  }, [handleSetUserInfo]);

  return authChecked;
}
