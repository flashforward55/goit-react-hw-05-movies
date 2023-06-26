import React from 'react';
import styled from 'styled-components';

const CastContainer = styled.ul`
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

const PlaceholderImage = styled.div`
  width: 150px;
  height: 225px;
  margin-bottom: 10px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3c?xml version='1.0' encoding='UTF-8' standalone='no'?%3e%3csvg xmlns='http://www.w3.org/2000/svg' width='225' height='150' version='1.0'%3e%3cpath fill='%23d4d4d4' d='M0 0v150h225V0H0z'/%3e%3cpath fill='%23fff' d='m64.055077 38.894466 36.105543 36.105536-36.105543 36.105538 12.320373 12.32038 36.10554-36.105547 36.12454 36.124547 12.33939-12.33938-36.12454-36.124551 36.10554-36.105537-12.32039-12.320372-36.10552 36.105536L76.394463 26.55508 64.055077 38.894466z' overflow='visible' style='marker:none'/%3e%3c/svg%3e");
  background-size: cover;
  background-position: center;
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

export default Cast;
