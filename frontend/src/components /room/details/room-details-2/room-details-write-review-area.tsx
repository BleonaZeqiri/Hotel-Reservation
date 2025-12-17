'use client'
import { useState } from "react";
import Ratings from "@/components/common/ratings";
import { notifyError } from "@/utils/toast";
import { IReviewForm } from "@/types/form-d-t";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrorMsg from "@/components/common/err-msg";
import { saveReview } from "@/actions/review";
import useGlobalContext from "@/hooks/use-global-context";

type Props = {
   hotelId: string;
};

export default function RoomDetailsWriteReviewArea({ hotelId }: Props) {
   const [stuffRating, setStuffRating] = useState(0);
   const [cleanlinessRating, setCleanlinessRating] = useState(0);
   const [checkInRating, setCheckInRating] = useState(0);
   const { userInfo } = useGlobalContext();

   const { register, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();
   
   const onSubmit: SubmitHandler<IReviewForm> = async (data) => {
      try {
         if (!userInfo?.user) {
            return notifyError('Please login first')
         }
         const reviewData = {
            userId: userInfo.user.id,
            hotelId,
            comment: data.comment,
            ratings: {
               staff: stuffRating,
               cleanliness: cleanlinessRating,
               checkIn: checkInRating
            }
         }
         await saveReview(reviewData);
         reset()
      } catch (error) {
         console.log(error, 'error in register');
         const err = error as { message: string };
         notifyError(err?.message || 'Something went wrong');
      }
   }

   function handleStuffRating(rate: number) {
      setStuffRating(rate);
   }
   function handleCleanlinessRating(rate: number) {
      setCleanlinessRating(rate);
   }
   function handleCheckInRating(rate: number) {
      setCheckInRating(rate);
   }


   return (
      <div className="tp-room-review-form-wrap">

         <div id="checkout-login" className="tp-room-review-form-content mb-50">
            <h2 className="tp-room-details-title mb-10">Leave a comment</h2>
            <p className="mb-30">Your email address will not be published. Required fields are marked *</p>

            <div className="tp-postbox-comment-input tp-postbox-comment-input-2">
               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="tp-postbox-input mb-25">
                           <label className="tp-label mb-5" htmlFor="name">Name *</label>
                           <input className="tp-input" type="text" name="name" defaultValue={userInfo?.user?.username} />
                        </div>
                     </div>
                     <div className="col-lg-12">
                        <div className="tp-postbox-input mb-25">
                           <label className="tp-label mb-5" htmlFor="email">Email *</label>
                           <input className="tp-input" type="email" name="email" defaultValue={userInfo?.user?.email} />
                        </div>
                     </div>

                     <div className="col-lg-12">
                        <div className="tp-review-rates-wrap ps-0 pt-0" style={{ background: 'transparent' }}>
                           <div className="tp-review-clients">
                              <ReviewItem title="Staff" rating={3.5} onRate={handleStuffRating} />
                              <ReviewItem title="Cleanliness" rating={4} onRate={handleCleanlinessRating} />
                              <ReviewItem title="Check-in" rating={4.5} onRate={handleCheckInRating} />
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-12">
                        <div className="tp-postbox-textarea mb-15">
                           <label className="tp-label mb-5" htmlFor="textarea">Your Comment *</label>
                           <textarea {...register('comment', { required: 'Comment is required' })} className="tp-textarea" id="textarea" placeholder="Leave us a  Comment..."></textarea>
                           {errors.comment?.message && <ErrorMsg msg={errors.comment.message} />}
                        </div>
                     </div>

                     <div className="col-lg-12">
                        <div className="tp-room-review-form-btn">
                           <button className="tp-btn-4" type="submit">Post Review</button>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}



function ReviewItem({ title, rating, onRate }: { title: string; rating: number; onRate: (rate: number) => void; }) {
   return (
      <div className="tp-review-item">
         <span className="tp-review-stats">{title}</span>
         <div className="tp-review-rates">
            <Ratings initialRating={rating} readonly={false} onRate={onRate} />
         </div>
      </div>
   )
}