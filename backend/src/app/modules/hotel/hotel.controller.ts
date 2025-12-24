import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IFilters } from "./hotel.interface";
import { HotelService } from "./hotel.service";

// add hotel
const addHotel = catchAsync(async (req: Request, res: Response) => {
    const result = await HotelService.createHotel(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Hotel created successfully!',
        data: result,
    });
});

// get all hotels
const getAllModernHotels = catchAsync(async (req: Request, res: Response) => {
    const result = await HotelService.getAllModernHotels();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Hotels fetched successfully!',
        data: result,
    });
});

// get all hotels
const getAllCityHotels = catchAsync(async (req: Request, res: Response) => {
    const result = await HotelService.getAllCityHotels();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Hotels fetched successfully!',
        data: result,
    });
});

// get all hotels
const getOfferLuxuryHotel = catchAsync(async (req: Request, res: Response) => {
    const result = await HotelService.getOfferLuxuryHotel();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Luxury hotel fetched successfully!',
        data: result,
    });
});

// get hotel package
const getHotelPackage = catchAsync(async (req: Request, res: Response) => {
    const result = await HotelService.getHotelPackage();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Hotel package fetched successfully!',
        data: result,
    });
});

const getAllHotelRooms = catchAsync(async (req: Request, res: Response) => {
    const { destination, checkin, checkout, adults, children,searchTerm } = req.query || {};

    const filters: IFilters = {
        destinationId: destination ? String(destination) : undefined,
        checkin: checkin ? new Date(checkin as string) : undefined,
        checkout: checkout ? new Date(checkout as string) : undefined,
        adults: adults ? Number(adults) : undefined,
        children: children ? Number(children) : undefined,
        searchTerm: searchTerm ? String(searchTerm) : undefined
    };
  
    const result = await HotelService.getAllHotelRooms(filters);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Hotel rooms fetched successfully!',
        data: result,
    });
});

const getHotelById = catchAsync(async (req: Request, res: Response) => {
    const result = await HotelService.getHotelById(req.params?.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Hotel fetched successfully!',
        data: result,
    });
});

export const HotelController = {
    addHotel,
    getAllModernHotels,
    getOfferLuxuryHotel,
    getHotelPackage,
    getAllCityHotels,
    getAllHotelRooms,
    getHotelById
};