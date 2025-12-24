import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { DestinationController } from './destination.controller';
import { DestinationValidation } from './destination.validation';

const router = express.Router();

router.post(
  '/create',
  validateRequest(DestinationValidation.destinationZodSchema),
  DestinationController.addDestination
);

router.get('/',DestinationController.getAllDestination);
router.get('/:id',DestinationController.getDestinationById);

export const DestinationRoutes = router;
