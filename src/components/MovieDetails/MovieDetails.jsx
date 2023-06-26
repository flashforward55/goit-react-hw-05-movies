import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import Loader from '../Loader/Loader';
import { fetchMovieDetails, fetchCast, fetchReviews } from 'services/api';
import styled from 'styled-components';

const MovieDetailsContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const UpperSection = styled.div`
  display: flex;
  align-items: flex-start;
`;

const PosterSection = styled.div`
  flex: 0 0 30%;
`;

const PosterImage = styled.img`
  width: 100%;
`;

const DetailsSection = styled.div`
  flex: 1;
  padding: 0 20px;
`;

const GoBackButton = styled.button`
  margin-bottom: 20px;
`;

const MovieTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const UserScore = styled.p`
  font-weight: bold;
`;

const Overview = styled.p`
  margin-top: 10px;
`;

const Genres = styled.p`
  margin-top: 10px;
`;

const LowerSection = styled.div`
  margin-top: 40px;
`;

const AdditionalInfo = styled.div`
  margin-bottom: 20px;
`;

const InfoButton = styled.button`
  margin-right: 10px;
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const movieDetailsData = await fetchMovieDetails(movieId);
        setMovieDetails(movieDetailsData);

        const castData = await fetchCast(movieId);
        setCast(castData);

        const reviewsData = await fetchReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.log('Error fetching movie details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!movieDetails) {
    return <div>Unable to fetch movie details.</div>;
  }

  const { poster_path, title, vote_average, overview, genres, release_date } =
    movieDetails;
  const userScore = (vote_average * 10).toFixed(2);

  const toggleCast = () => {
    setShowCast(!showCast);
    setShowReviews(false);
  };

  const toggleReviews = () => {
    setShowReviews(!showReviews);
    setShowCast(false);
  };

  const goBack = () => {
    navigate('/');
  };

  const releaseYear = release_date ? release_date.split('-')[0] : '';

  return (
    <MovieDetailsContainer>
      <UpperSection>
        <PosterSection>
          {poster_path && (
            <PosterImage
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
            />
          )}
        </PosterSection>
        <DetailsSection>
          <GoBackButton onClick={goBack}>Go Back</GoBackButton>
          <MovieTitle>
            {title} ({releaseYear})
          </MovieTitle>
          <UserScore>User Score: {userScore}%</UserScore>
          <Overview>Overview: {overview}</Overview>
          <Genres>
            Genres:{' '}
            {genres.map(genre => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </Genres>
        </DetailsSection>
      </UpperSection>
      <LowerSection>
        <AdditionalInfo>
          <h2>Additional Information</h2>
          <ul>
            <li>
              <InfoButton onClick={toggleCast}>Cast</InfoButton>
            </li>
            <li>
              <InfoButton onClick={toggleReviews}>Reviews</InfoButton>
            </li>
          </ul>
        </AdditionalInfo>
        {showCast && <Cast cast={cast} />}
        {showReviews && (
          <>
            {reviews.length === 0 ? (
              <p>We don't have any reviews for this movie.</p>
            ) : (
              <Reviews reviews={reviews} />
            )}
          </>
        )}
      </LowerSection>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
