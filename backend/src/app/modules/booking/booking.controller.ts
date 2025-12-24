import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BookingService } from "./booking.service";


const createBooking = catchAsync(async (req: Request, res: Response) => {
    const result = await BookingService.saveBooking(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Booking created successfully!',
        data: result,
    });
});

// check booking
const checkBooking = catchAsync(async (req: Request, res: Response) => {
    const { hotelId, checkin, checkout } = req.body;
    const result = await BookingService.checkBooking(hotelId, checkin, checkout);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Booking checked successfully!',
        data: result,
    });
});

// create payment intent
const createPaymentIntent = catchAsync(async (req: Request, res: Response) => {
    const { price } = req.body;
    const result = await BookingService.createPaymentIntent(parseInt(price));
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Payment intent created successfully!',
        data: result,
    });
});

// get booking by id
const getBookingById = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BookingService.getBookingById(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Booking fetched successfully!',
        data: result,
    });
})

export const BookingController = {
    createBooking,
    checkBooking,
    createPaymentIntent,
    getBookingById
}