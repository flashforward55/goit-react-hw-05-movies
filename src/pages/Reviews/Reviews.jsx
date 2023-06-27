import React from 'react';
import PropTypes from 'prop-types';
import { ReviewContainer, ReviewItem, Author, Content } from './Reviews.styled';

const Reviews = ({ reviews }) => {
  return (
    <ReviewContainer>
      <ul>
        {reviews.map(review => (
          <ReviewItem key={review.id}>
            <Author>Author: {review.author}</Author>
            <Content>{review.content}</Content>
          </ReviewItem>
        ))}
      </ul>
    </ReviewContainer>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Reviews;
