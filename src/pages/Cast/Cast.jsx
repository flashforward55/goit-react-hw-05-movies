import React from 'react';
import PropTypes from 'prop-types';
import {
  CastContainer,
  ActorCard,
  ActorImage,
  PlaceholderImage,
  ActorName,
  CharacterName,
  NoActors,
} from './Cast.styled';

const Cast = ({ cast }) => {
  if (cast.length === 0) {
    return <NoActors>The actors of this movie are not represented</NoActors>;
  }
  return (
    <CastContainer>
      {cast.map(actor => (
        <ActorCard key={actor.id}>
          <div>
            {actor.profile_path ? (
              <ActorImage
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <PlaceholderImage />
            )}
            <ActorName>Actor: {actor.name}</ActorName>
            <CharacterName>
              Character: {actor.character.split('/')[0]}
            </CharacterName>
          </div>
        </ActorCard>
      ))}
    </CastContainer>
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cast;
