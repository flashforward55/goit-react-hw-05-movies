import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h1`
  color: #b92121;
  margin-bottom: 20px;
`;

export const MovieList = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MovieItem = styled.li`
  width: calc(100% / 6);
  margin-bottom: 20px;
  padding: 10px;

  @media (max-width: 1200px) {
    width: calc(100% / 4);
  }

  @media (max-width: 800px) {
    width: calc(100% / 3);
  }

  @media (max-width: 600px) {
    width: calc(100% / 2);
  }
`;

export const MovieLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #333;
`;

export const MovieImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  transition: transform 0.1s ease-in-out;

  &:hover {
    animation: pulsare 2.5s ease-in-out;
    transform: scale(1.01);
  }
  @keyframes pulsare {
    0% {
      box-shadow: 0 0 25px #5ddcff, 0 0 50px #4e00c2;
    }
  }
`;

export const MovieTitle = styled.p`
  font-size: 16px;
  margin: 0;
  color: #b92121;
`;
