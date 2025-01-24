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

  const duplicatedReviews = [...reviews, ...reviews];
  const totalReviews = reviews.length; // Extracted to avoid unnecessary dependency

  useEffect(() => {
    const reviewsTrack = reviewsTrackRef.current;
    const reviewWidth = 340; // Card width + gap
    const totalWidth = duplicatedReviews.length * reviewWidth;

    let position = 0;

    const slide = () => {
      position -= 2; // Slide speed
      if (Math.abs(position) >= totalWidth / 2) {
        position = 0; // Reset position when halfway through
      }

      reviewsTrack.style.transform = `translateX(${position}px)`; // Move the track

      const cards = reviewsTrack.children;
      const centerIndex = Math.round(Math.abs(position) / reviewWidth) % totalReviews;

      Array.from(cards).forEach((card, index) => {
        if (index % totalReviews === centerIndex) {
          card.style.transform = "scale(1.25)";
          card.style.opacity = "1";
          card.style.backgroundColor = "#546aec";
          card.style.color = "#fff";
          card.style.filter = "none"; // Remove blur for the focused card
        } else {
          card.style.transform = "scale(1)";
          card.style.opacity = "0.5";
          card.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
          card.style.color = "#333";
          card.style.filter = "blur(1px)"; // Add a subtle blur for non-focused cards
        }
      });
    };

    const interval = setInterval(slide, 16); // Smooth animation (60 FPS)
    return () => clearInterval(interval);
  }, [duplicatedReviews.length, totalReviews]); // Include dependencies that actually matter

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
      {/* Heading Section */}
      <div className="reviews-header">
        <h2>What Our Clients Say</h2>
        <p>Hear from the amazing people we’ve worked with.</p>
        <div className="divider"></div>
      </div>

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
          height: 600px;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 50px;
        }

        .reviews-header {
          text-align: center;
          position: absolute;
          top: 20px;
          z-index: 2;
        }

        .reviews-header h2 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #546aec;
          margin-bottom: 20px;
        }

        .reviews-header p {
          font-size: 1rem;
          color: #666;
        }

        .divider {
          width: 60px;
          height: 3px;
          background-color: #546aec;
          margin: 10px auto;
          border-radius: 2px;
        }

        .reviews-track {
          position: relative;
          display: flex;
          gap: 40px;
          will-change: transform;
        }

        .review-card {
          width: 300px;
          height: 200px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 15px;
          padding: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease, opacity 0.3s ease, background-color 0.3s ease, color 0.3s ease, filter 0.3s ease;
        }

        .review-text {
          font-size: 16px;
          margin-bottom: 10px;
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
        }

        @media (max-width: 768px) {
          .review-card {
            width: 260px;
          }

          .review-text {
            font-size: 14px;
          }

          .reviews-header {
            top: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default ClientReviews;
