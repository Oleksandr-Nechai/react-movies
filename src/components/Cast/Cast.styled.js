import styled from 'styled-components';

export const ListActors = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacings.gapGallery};
`;

export const Actor = styled.li`
  flex-basis: calc(
    (100% - 6 * ${props => props.theme.spacings.gapGallery}) / 7
  );

  border: 1px solid lightgray;
  border-radius: 6px;
  overflow: hidden;

  box-shadow: ${props => props.theme.shadow.mainShadow};
`;

export const Poster = styled.div`
  height: 300px;

  background-color: ${props => props.theme.colors.primaryColor};
`;

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.p`
  min-height: 40px;
  padding: 10px;

  background-color: #dbd9d3;

  color: ${props => props.theme.colors.mainBlack};
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;
