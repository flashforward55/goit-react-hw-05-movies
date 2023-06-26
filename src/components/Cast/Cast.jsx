import React from 'react';

const Cast = ({ cast }) => {
  return (
    <div>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <div>
              {actor.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt={actor.name}
                />
              )}
              <p>Actor: {actor.name}</p>
              <p>Character: {actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
