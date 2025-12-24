import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AmenitiesController } from './amenities.controller';
import { AmenitiesValidation } from './amenities.validation';

const router = express.Router();

router.post(
  '/create',
  validateRequest(AmenitiesValidation.amenitiesZodSchema),
  AmenitiesController.addAmenity
);

router.get('/', AmenitiesController.getAllAmenities);


export const AmenitiesRoutes = router;
