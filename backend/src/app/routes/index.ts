import express from 'express';
import { AmenitiesRoutes } from '../modules/amenities/amenities.routes';
import { BookingRoutes } from '../modules/booking/booking.routes';
import { DestinationRoutes } from '../modules/destination/destination.routes';
import { HotelRoutes } from '../modules/hotel/hotel.routes';
import { ReviewRoutes } from '../modules/review/review.routes';
import { UserRoutes } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/amenities',
    route: AmenitiesRoutes,
  },
  {
    path: '/hotel',
    route: HotelRoutes,
  },
  {
    path: '/destination',
    route: DestinationRoutes,
  },
  {
    path: '/booking',
    route: BookingRoutes,
  },
  {
    path: '/review',
    route: ReviewRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
