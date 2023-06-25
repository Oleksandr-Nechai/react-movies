import styled from 'styled-components';

import { Button } from 'styles/sharedStales';

import backgroundImage from 'images/page-not-found-wallpapers.jpg';

export const Wrapper = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: 50% 50%;
`;

export const ButtonGoHomepage = styled(Button)`
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);

  padding: 12px 35px;

  font-size: 24px;
`;
