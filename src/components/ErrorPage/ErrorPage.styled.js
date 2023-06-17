import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import backgroundImage from 'images/page-not-found-wallpapers.jpg';

export const Wrapper = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: 50% 50%;
`;

export const Button = styled(NavLink)`
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);

  display: inline-block;
  padding: 12px 35px;

  border: 2px black solid;
  border-radius: 6px;

  background-color: ${props => props.theme.colors.mainWhite};

  color: ${props => props.theme.colors.mainBlack};
  font-size: 24px;
  font-weight: 500;

  transition: background-color 500ms
      ${props => props.theme.timingFunction.base},
    color 500ms ${props => props.theme.timingFunction.base};

  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.activeColor};
    color: ${props => props.theme.colors.primaryColor};
  }
`;
