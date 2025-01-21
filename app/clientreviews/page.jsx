'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";

const ClientReviews = () => {
  const [activeReview, setActiveReview] = useState(0);

  const reviews = [
    {
      id: 1,
      text: "Lavv Digital's visual design is excellent!",
      author: "Rachel Jules",
      image: "/author_img.png",
      alt: "Author Image",
      width: 500, // Corrected to number
      height: 500, // Corrected to number
      layout: "intrinsic",
      rating: 5, // Star rating for this review
    },
    {
      id: 2,
      text: "They deliver incredible branding results.",
      author: "Rachel Jules",
      image: "/author_img.png",
      alt: "Author Image",
      width: 500, // Corrected to number
      height: 500, // Corrected to number
      layout: "intrinsic",
      rating: 4, // Star rating for this review
    },
    {
      id: 3,
      text: "Lavv makes web design easy and enjoyable!",
      author: "Rachel Jules",
      image: "/author_img.png",
      alt: "Author Image",
      width: 500, // Corrected to number
      height: 500, // Corrected to number
      layout: "intrinsic",
      rating: 3, // Star rating for this review
    },
  ];

  // Automatic review focus animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 3000); // Change review every 3 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  const renderStars = (rating) => {
    const totalStars = 5; // Maximum number of stars
    return Array.from({ length: totalStars }, (_, index) => (
      <span
        key={index}
        style={{
          color: index < rating ? "#ffb400" : "#ccc", // Highlight stars for the rating
          fontSize: "18px",
          marginRight: "2px",
        }}
      >
        ★
      </span>
    ));
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('')",
        backgroundSize: "contain",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
      className="feedback-section-two position-relative pt-150 pb-150"
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Phone Container */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="phone-container">
              <div className="phone-screen">
                {reviews.map((review, index) => (
                  <div
                    key={review.id}
                    className={`review ${index === activeReview ? "active" : "inactive"
                      }`}
                  >
                    <p>{review.text}</p>
                    <div>{renderStars(review.rating)}</div>
                    <div className="review-author">
                      <Image 
                        src={review.image} 
                        alt={review.alt} 
                        width={review.width} 
                        height={review.height} 
                        layout={review.layout}
                      />
                      <span>{review.author}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Review Cards - Now on the right side */}
          <div className="col-lg-6">
            <div className="review-cards">
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className={`review-card ${index === activeReview ? "highlighted" : ""
                    }`}
                >
                  <p>{review.text}</p>
                  {/* <div>{renderStars(review.rating)}</div> */}
                  {/* <span>- {review.author}</span>  */}
                </div>
              ))}
            </div>
          </div>
          <button>view more</button>
        </div>
      </div>

      {/* Additional Styles */}
      <style jsx>{`
        .feedback-section-two {
          padding: 40px 20px;
          text-align: center;
        }

        /* Phone Design */
        .phone-container {
          position: relative;
          width: 220px;
          height: 440px;
          border: 10px solid black;
          border-radius: 40px;
          background-color: white;
          box-shadow: 0 4px 20px rgba(41, 42, 43, 0.28);
          overflow: hidden;
           display: flex; /* Enables flexbox */
  flex-direction: column; /* Align items in a column */
  align-items: center; /* Horizontal centering */
  justify-content: center; /* Vertical centering */
        }

        .phone-screen {
          width: 100%;
          height: 100%;
          background-color:#8693e3;
          border-radius: 20px;
          padding: 10px;
          overflow: hidden;
          position: relative;
         
        }

        .review {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.8s ease;
        }

        .review.active {
          opacity: 1;
          transform: scale(1);
        }

        .review p {
          font-size: 16px;
          margin-bottom: 10px;
        }

        .review-author {
          display: flex;
          align-items: center;
          gap: 10px;
          color:rgba(53, 57, 68, 1);
          font-family:calibri;
        }

        // .review-author img {
        //   width: 40px;
        //   height: 40px;
        //   border-radius: 50%;
        //   object-fit: cover;
        // }

        /* Review Cards */
        .review-cards {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: flex-start;
        }

        .review-card {
          background: #fff;
          border: 2px solidrgba(48, 48, 50, 0.44);
          border-radius: 30px;
          padding: 15px;
          width: 180px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.74);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          margin-bottom:5px;
          margin-top:15px;
          font-weight:16px;
          font-family:calibri;
        }

        .review-card.highlighted {
          transform: scale(1.1);
          background-color:rgb(255, 183, 0);
          color: white;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .phone-container {
            width: 200px;
            height: 400px;
          }

          .review-card {
            width: 150px;
          }
        }

        @media (max-width: 576px) {
          .phone-container {
            width: 160px;
            height: 320px;
          }

          .review-card {
            width: 120px;
          }

          .review-cards {
            justify-content: center;
          } 
        }
      `}</style>
    </div>
  );
};

export default ClientReviews;
