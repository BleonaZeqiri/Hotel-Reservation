import React from 'react';

export default function RoomDetailsRatings() {
  const reviews = [
    { label: 'Staff', rating: 4.8, width: 90 },
    { label: 'Cleanliness', rating: 5, width: 100 },
    { label: 'Check-in', rating: 4.5, width: 90 },
    { label: 'Facilities', rating: 5, width: 100 },
    { label: 'Location', rating: 4.8, width: 85 },
    { label: 'Value', rating: 5, width: 100 },
  ];

  return (
    <div className="tp-review-wrap mb-30">
      <h2 className="tp-room-details-title mb-20">Guest Reviews</h2>
      <div className="tp-review-inner mb-20">
        <div className="tp-review-rating">
          <span className="tp-review-rating-star">
            <i className="fa-sharp fa-solid fa-star"></i>
          </span>
          <h4 className="tp-review-rating-title">5/5 Excellent</h4>
          <span className="tp-review-rating-number">(3 reviews)</span>
        </div>
        <div className="row">
          {reviews.slice(0, 3).map((review, index) => (
            <div className="col-lg-6 col-md-6" key={index}>
              <ProgressBar label={review.label} rating={review.rating} width={review.width} />
            </div>
          ))}
          {reviews.slice(3).map((review, index) => (
            <div className="col-lg-6 col-md-6" key={index + 3}>
              <ProgressBar label={review.label} rating={review.rating} width={review.width} />
            </div>
          ))}
        </div>
      </div>
      <div className="tp-review-count">
        <p>3 reviews on this Hotel - Showing 1 to 3</p>
      </div>
    </div>
  );
}




function ProgressBar({ label, rating, width }:{label: string;rating: number;width: number;}) {
    return (
      <div className="tp-review-rating-progress">
        <span className="tp-review-rating-content">{label}</span>
        <div className="tp-review-rating-bar-item d-flex justify-content-between align-items-center">
          <div className="tp-review-rating-bar">
            <div className="single-progress" style={{ width: `${width}%` }}></div>
          </div>
          <div className="tp-review-rating-bar-text">
            <span>{rating}/5</span>
          </div>
        </div>
      </div>
    );
  }
  
