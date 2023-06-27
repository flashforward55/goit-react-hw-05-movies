import styled from 'styled-components';

export const MovieDetailsContainer = styled.div``;

export const UpperSection = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 900px;
  margin: 0 auto;
`;

export const PosterSection = styled.div`
  flex: 0 0 30%;
`;

export const PosterImage = styled.img`
  width: 100%;
`;

export const DetailsSection = styled.div`
  flex: 1;
  padding: 0 20px;
`;

export const GoBackButton = styled.button`
  padding: 10px 20px;
  background-color: #f5f5f5;
  color: #333;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ccc;
    color: #fff;
  }
`;

export const MovieTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const UserScore = styled.p``;

export const Bold = styled.p`
  font-weight: bold;
`;

export const SpanBold = styled.span`
  font-weight: bold;
`;

export const Overview = styled.div`
  margin-top: 10px;
`;

export const Genres = styled.div`
  margin-top: 10px;
  span:not(:last-child)::after {
    content: ' | ';
  }
`;

export const LowerSection = styled.div`
  margin-top: 40px;
`;

export const ButtonMovieDetails = styled.ul`
  display: flex;
  justify-content: center;
`;

export const AdditionalInfo = styled.div`
  text-align: center;
`;

export const InfoButton = styled.button`
  margin: 10px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const TiteInfo = styled.h2`
  color: #b92121;
`;
