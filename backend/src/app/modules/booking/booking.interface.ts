import { Types } from "mongoose";


export type IBooking = {
    hotelId: Types.ObjectId;
    userId: Types.ObjectId;
    checkin: string;
    checkout: string;
    adults: number;
    children: number;
    userDetails: {
        country: string;
        fname: string;
        lname: string;
        email: string;
        phone: string;
        address: string;
    }
};