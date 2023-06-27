import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ReviewContainer = styled.div`
  margin-top: 20px;
`;

const ReviewItem = styled.li`
  margin-bottom: 20px;
`;

const Author = styled.p`
  font-weight: bold;
`;

const Content = styled.p`
  margin-top: 5px;
`;

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
