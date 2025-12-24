
import { IDBResponseDT } from "@/types/db-response";
import { IDestination } from "@/types/destination-d-t";

export async function getDestination() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/destination`);
    const data:IDBResponseDT<IDestination[]> = await response.json();
    return data.data;
}


export async function getSingleDestination(id:string) : Promise<IDestination> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/destination/${id}`);
    const data:IDBResponseDT<IDestination> = await response.json();
    return data.data;
}