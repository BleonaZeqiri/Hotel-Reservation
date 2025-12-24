import express from 'express';
import { ReviewController } from './review.controller';

const router = express.Router();

router.get('/:hotelId',ReviewController.getReviewByHotel);
router.get('/',ReviewController.getAllReviews);
router.post('/add',ReviewController.addReview);

export const ReviewRoutes = router;