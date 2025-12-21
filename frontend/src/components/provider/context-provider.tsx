'use client';
import AuthChecking from "../common/auth-check";
import GlobalContextProvider from "./global-context-provider";


export default function ContextProvider({ children }: { children: React.ReactNode }) {
    return (
        <GlobalContextProvider>
            <AuthChecking>
                {children}
            </AuthChecking>
        </GlobalContextProvider>
    )
}
