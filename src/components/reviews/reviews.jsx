import React from "react";
import "./reviews.css";

import { reviewsData } from "./reviewsData";
import ReviewsCard from "./reviewsCard";

const Reviews = () => {
  const clone = [];
  const reorderReviews = [];
  const countContent = [];

  reviewsData.map((review) => clone.push(review));
  reviewsData.map((count) => countContent.push(count.content.length));
  countContent.sort((a, b) => a - b);

  do {
    for (let i = 0; i < clone.length; i++) {
      if (clone[i].content.length === Math.max(...countContent)) {
        reorderReviews.push(clone[i]);
        clone.splice(i, 1);
        countContent.pop();
      }
    }
  } while (clone.length > 0);

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <h1>My Reviews</h1>
        <div className="review-wrapper">
          <ReviewsCard reviewsData={reorderReviews} />
        </div>
      </div>
    </section>
  );
};
export default Reviews;
