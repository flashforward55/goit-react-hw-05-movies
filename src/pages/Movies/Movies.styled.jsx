import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #b92121;
  margin-bottom: 20px;
`;

export const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  padding: 8px;
  font-size: 16px;
  transition: transform 0.1s ease-in-out;

  &:focus {
    outline: none;
    border: 2px solid orange;
  }
`;

export const SearchButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://cdn-icons-png.flaticon.com/512/109/109164.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const MovieList = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MovieItem = styled.li`
  flex: 0 0 calc(100% / 6);
  margin-bottom: 10px;

  @media (max-width: 1200px) {
    flex-basis: calc(100% / 4);
  }

  @media (max-width: 800px) {
    flex-basis: calc(100% / 3);
  }

  @media (max-width: 600px) {
    flex-basis: calc(100% / 2);
  }
`;

export const MovieLink = styled(Link)`
  color: #333;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const MoviePoster = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 5px;
`;

export const PlaceholderPoster = styled.div`
  width: 150px;
  height: 225px;
  margin-bottom: 10px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3c?xml version='1.0' encoding='UTF-8' standalone='no'?%3e%3csvg xmlns='http://www.w3.org/2000/svg' width='225' height='150' version='1.0'%3e%3cpath fill='%23d4d4d4' d='M0 0v150h225V0H0z'/%3e%3cpath fill='%23fff' d='m64.055077 38.894466 36.105543 36.105536-36.105543 36.105538 12.320373 12.32038 36.10554-36.105547 36.12454 36.124547 12.33939-12.33938-36.12454-36.124551 36.10554-36.105537-12.32039-12.320372-36.10552 36.105536L76.394463 26.55508 64.055077 38.894466z' overflow='visible' style='marker:none'/%3e%3c/svg%3e");
  background-size: cover;
  background-position: center;
`;

export const ErrorMessage = styled.p`
  color: red;
`;
