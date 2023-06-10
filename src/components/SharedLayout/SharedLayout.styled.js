import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListPages = styled.ul`
  display: flex;
  padding: 10px 20px;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Link = styled(NavLink)`
  font-size: 22px;
  font-weight: 500;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.primaryColor};
  }
  &.active {
    color: ${props => props.theme.colors.activeColor};
  }
`;
