import React from 'react';
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

export default Reviews;
