import { Types } from "mongoose";


export type IDestination = {
    name: string;
    description: string;
    image?: string;
    hotels: Types.ObjectId[]
}