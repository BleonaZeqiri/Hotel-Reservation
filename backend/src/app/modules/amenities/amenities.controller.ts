import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { replaceMongoIdInArray } from '../../../utils/data-util';
import { AmenitiesService } from './amenities.service';

const addAmenity = catchAsync(async (req: Request, res: Response) => {
  const result = await AmenitiesService.createAmenitiesService(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Amenity created successfully!',
    data: result,
  });
});

const getAllAmenities = catchAsync(async (req: Request, res: Response) => {
  const result = await AmenitiesService.getAllAmenitiesService();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Amenities fetched successfully!',
    data: replaceMongoIdInArray(result),
  });
});

export const AmenitiesController = {
  addAmenity,
  getAllAmenities,
};
