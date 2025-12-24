import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { DestinationService } from "./destination.service";

// add hotel
const addDestination = catchAsync(async (req: Request, res: Response) => {
    const result = await DestinationService.createDestination(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Hotel created successfully!',
        data: result,
    });
});

// get all hotels
const getAllDestination = catchAsync(async (req: Request, res: Response) => {
    const result = await DestinationService.getAllDestination();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Hotels fetched successfully!',
        data: result,
    });
});

// get single destination
const getDestinationById = catchAsync(async (req: Request, res: Response) => {
    const result = await DestinationService.getDestinationById(req.params.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Destination fetched successfully!',
        data: result,
    });
});

export const DestinationController = {
    addDestination,
    getAllDestination,
    getDestinationById
};