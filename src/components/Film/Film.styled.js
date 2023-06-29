import styled from 'styled-components';

import { getColorByValue } from 'services/getColorByValue';

import { Button } from 'styles/sharedStales';

export const Wraper = styled.div`
  position: relative;

  display: flex;
  padding: 20px;

  background-color: red;
  background-image: linear-gradient(
      to right bottom,
      rgb(35, 24, 24),
      rgba(35, 24, 24, 0.7)
    ),
    url(${props => props.backdrop});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Poster = styled.div`
  flex-shrink: 0;
  margin-right: 20px;
  width: 300px;
  height: 450px;

  border-radius: 4px;

  overflow: hidden;
`;

export const ButtonGoBack = styled(Button)`
  position: absolute;
  top: 20px;
  left: 20px;

  max-width: 300px;
`;

export const MovieInfo = styled.div`
  color: ${props => props.theme.colors.mainWhite};
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
  & > h1 {
    font-size: 28px;
  }
`;

export const Score = styled.span`
  color: ${props => getColorByValue(props.score)};
`;

export const MoreInformation = styled.div`
  margin: 20px 0;

  padding: 20px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

export const ListLink = styled.ul`
  margin-top: 10px;

  display: flex;
  gap: 20px;
`;

export const ButtonMoreInfo = styled(Button)``;
