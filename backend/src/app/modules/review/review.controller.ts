import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ReviewService } from "./review.service";

const addReview = catchAsync(async (req: Request, res: Response) => {
    const result = await ReviewService.addReview(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Review added successfully!',
        data: result,
    });
});


// get all reviews
const getAllReviews = catchAsync(async (req: Request, res: Response) => {
    const result = await ReviewService.getAllReviews();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Reviews fetched successfully!',
        data: result,
    });
});

// get review by hotel id
const getReviewByHotel = catchAsync(async (req: Request, res: Response) => {
    const result = await ReviewService.getReviewByHotel(req.params.hotelId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Reviews fetched successfully!',
        data: result,
    });
});

export const ReviewController = {
    addReview,
    getAllReviews,
    getReviewByHotel,
}