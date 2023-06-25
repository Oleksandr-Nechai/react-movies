import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled(NavLink)`
  display: inline-block;
  min-width: 90px;

  padding: 5px 15px;
  border-radius: 6px;
  border: 2px black solid;

  text-align: center;
  font-size: 14px;
  font-weight: 500;

  cursor: pointer;

  background-color: ${props => props.theme.colors.mainWhite};
  color: ${props => props.theme.colors.mainBlack};

  transition: background-color 500ms
      ${props => props.theme.timingFunction.base},
    color 500ms ${props => props.theme.timingFunction.base};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.activeColor};
    color: ${props => props.theme.colors.primaryColor};
  }
`;
