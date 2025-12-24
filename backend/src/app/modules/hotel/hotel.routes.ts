import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { HotelController } from './hotel.controller';
import { HotelValidation } from './hotel.validation';

const router = express.Router();

router.post(
  '/create',
  validateRequest(HotelValidation.hotelZodSchema),
  HotelController.addHotel
);

router.get('/modern', HotelController.getAllModernHotels);
router.get('/city', HotelController.getAllCityHotels);
router.get('/all', HotelController.getAllHotelRooms);

router.get('/luxury', HotelController.getOfferLuxuryHotel);
router.get('/package', HotelController.getHotelPackage);
router.get('/:id', HotelController.getHotelById);

export const HotelRoutes = router;
