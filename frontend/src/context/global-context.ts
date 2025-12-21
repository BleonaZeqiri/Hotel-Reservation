'use client';
import { IUser } from "@/types/user-d-t";
import React from "react";

type InitialContext = {
    userInfo:{
        accessToken: string;
        user: IUser;
    };
    handleSetUserInfo:(user:IUser,accessToken:string) => void;
    handleLogout:() => void
}

export const GlobalContext = React.createContext<InitialContext | null>(null)