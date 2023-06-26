import React from 'react';

const Reviews = ({ reviews }) => {
  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>Author: </p>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
