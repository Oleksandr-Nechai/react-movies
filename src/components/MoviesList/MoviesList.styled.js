import styled from 'styled-components';

export const MovieGallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacings.gapGallery};
`;

export const Film = styled.li`
  flex-basis: calc(
    (100% - 4 * ${props => props.theme.spacings.gapGallery}) / 5
  );

  border: 1px solid lightgray;
  border-radius: 6px;
  overflow: hidden;

  transition: transform 250ms
      ${props => props.theme.timingFunction.base},
    box-shadow 250ms ${props => props.theme.timingFunction.base};
  cursor: pointer;
  :hover,
  :focus {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadow.mainShadow};
  }
`;

export const Poster = styled.div`
  height: 394px;

  background-color: ${props => props.theme.colors.primaryColor};
`;

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 80px;
  padding: 10px;

  background-color: #dbd9d3;

  color: ${props => props.theme.colors.mainBlack};
  font-size: 16px;
  & > p:first-child {
    font-weight: bold;
  }
`;
