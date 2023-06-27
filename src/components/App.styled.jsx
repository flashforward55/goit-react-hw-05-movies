import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppContainer = styled.div`
  padding: 20px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  margin-right: 10px;
  padding: 5px;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f2f2f2;
  }

  &.active {
    background-color: #ff6347;
    color: #fff;
  }
`;
