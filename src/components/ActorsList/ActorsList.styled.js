import styled from 'styled-components';

export const ListActors = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacings.gapGallery};
`;

export const Actor = styled.li`
  flex-basis: calc((100% - 72px) / 7);
  box-shadow: ${props => props.theme.shadow.mainShadow};
`;

// export const Actor
