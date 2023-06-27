import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppContainer = styled.div`
  padding: 0 20px 20px 20px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* Add the box shadow property */
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
