import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import bkgUrl from './../../img/review-card.png';

const ReviewsCard = ({ reviewsData }) => {
  const background = {
    backgroundImage: `url(${bkgUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center center'
  }
  return (
    <>
      {reviewsData.map((review) => (
        <div key={review.id} data-aos="fade-up" data-aos-delay={`${review.id}0`}>
          <div className="single-review" style={background}>
            <span className="icon">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </span>
            <p className="mt-3">{review.content}</p>
            <h6 className="text-end">{review.name}</h6>
          </div>
        </div>
      ))}
    </>
  );
};
export default ReviewsCard;
