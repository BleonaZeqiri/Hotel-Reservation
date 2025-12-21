import { IDBResponseDT } from "@/types/db-response";

export const emailVerify = async (token: string) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/verify-email/${token}`;
    const response = await fetch(url);
    const data: IDBResponseDT<{ message: string }> = await response.json();
    return data;
};


