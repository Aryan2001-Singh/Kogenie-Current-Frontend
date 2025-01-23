"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const ClientReviews = () => {
  const reviewsTrackRef = useRef(null);

  const reviews = [
    {
      id: 1,
      text: "Lavv Digital's visual design is excellent!",
      author: "Rachel Jules",
      image: "/author_img.png",
      rating: 5,
    },
    {
      id: 2,
      text: "They deliver incredible branding results.",
      author: "Rachel Jules",
      image: "/author_img.png",
      rating: 4,
    },
    {
      id: 3,
      text: "Lavv makes web design easy and enjoyable!",
      author: "Rachel Jules",
      image: "/author_img.png",
      rating: 3,
    },
    {
      id: 4,
      text: "Outstanding creativity and professionalism.",
      author: "Samuel L.",
      image: "/author_img.png",
      rating: 5,
    },
    {
      id: 5,
      text: "Reliable and efficient branding solutions.",
      author: "Amanda T.",
      image: "/author_img.png",
      rating: 4,
    },
    {
      id: 6,
      text: "Impressive attention to detail!",
      author: "John D.",
      image: "/author_img.png",
      rating: 5,
    },
  ];

  // Duplicate the reviews to ensure seamless flow
  const duplicatedReviews = [...reviews, ...reviews];

  useEffect(() => {
    const reviewsTrack = reviewsTrackRef.current;
    const reviewWidth = 320; // Card width + gap
    const totalWidth = duplicatedReviews.length * reviewWidth;

    let position = 0;

    const slide = () => {
      position -= 2; // Slide speed (pixels per frame)
      if (Math.abs(position) >= totalWidth / 2) {
        position = 0; // Reset the position when half the track has scrolled
      }

      reviewsTrack.style.transform = `translateX(${position}px)`;
    };

    const interval = setInterval(slide, 16); // 60 FPS for smooth animation
    return () => clearInterval(interval);
  }, [duplicatedReviews.length]);

  const renderStars = (rating) => {
    const totalStars = 5;
    return Array.from({ length: totalStars }, (_, index) => (
      <span
        key={index}
        style={{
          color: index < rating ? "#ffb400" : "#ccc",
          fontSize: "16px",
        }}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="client-reviews-container">
      {/* Sliding Reviews */}
      <div className="reviews-track" ref={reviewsTrackRef}>
        {duplicatedReviews.map((review, index) => (
          <div key={index} className="review-card">
            <p className="review-text">&quot;{review.text}&quot;</p>
            <div className="stars">{renderStars(review.rating)}</div>
            <div className="review-author">
              <Image
                src={review.image}
                alt={review.author}
                width={40}
                height={40}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
              <span>{review.author}</span>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .client-reviews-container {
          width: 100%;
          height: 100vh;
          overflow: hidden;
          position: relative;
          background: linear-gradient(135deg, #f7f9fc, #e5eaf3);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Sliding Background */
        .reviews-track {
          position: absolute;
          display: flex;
          gap: 20px; /* Small gap between review cards */
          will-change: transform;
        }

        .review-card {
          width: 300px; /* Card width */
          height: 200px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          text-align: center;
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .review-text {
          font-size: 16px;
          margin-bottom: 10px;
          color: #333;
          font-style: italic;
        }

        .stars {
          margin-bottom: 10px;
        }

        .review-author {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #666;
        }

        @media (max-width: 768px) {
          .review-card {
            width: 260px; /* Adjust card width for smaller screens */
          }

          .review-text {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default ClientReviews;
