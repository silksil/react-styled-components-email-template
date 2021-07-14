import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.primary.main};
  color: ${({ theme }) => theme.primary.contrastText};
`;
