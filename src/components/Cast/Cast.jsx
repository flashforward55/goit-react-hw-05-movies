import React from 'react';
import styled from 'styled-components';

const CastContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ActorCard = styled.li`
  width: calc(9%);
  margin-bottom: 20px;
  padding: 10px;
`;

const ActorImage = styled.img`
  width: 150px;
  height: 225px;
  object-fit: cover;
  border-radius: 5px;
`;

const ActorName = styled.p`
  margin-top: 10px;
  font-weight: bold;
`;

const CharacterName = styled.p`
  margin-top: 5px;
`;

const Cast = ({ cast }) => {
  return (
    <CastContainer>
      {cast.map(actor => (
        <ActorCard key={actor.id}>
          <div>
            {actor.profile_path && (
              <ActorImage
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={actor.name}
              />
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

export default Cast;
