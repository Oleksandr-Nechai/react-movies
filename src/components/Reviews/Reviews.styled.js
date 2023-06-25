import styled from 'styled-components';

export const ListReviews = styled.ul`
  padding: 30px;
`;

export const ItemReview = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Author = styled.h2`
  margin-bottom: 20px;
`;
