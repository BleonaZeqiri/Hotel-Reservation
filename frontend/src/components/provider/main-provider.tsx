'use client';
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("bootstrap/dist/js/bootstrap");
}

type IProps = {
    children: React.ReactNode;
    bodyBg?: string
}
export default function MainProvider({ children, bodyBg }: IProps) {
    useEffect(() => {
        if (bodyBg) {
            document.body.classList.add(bodyBg);
        }
        return () => {
            if (bodyBg) {
                document.body.classList.remove(bodyBg);
            }
        }
    }, [bodyBg]);


    return (
        <>
            {children}
            <ToastContainer />
        </>
    )
}
