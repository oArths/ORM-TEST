import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.neutral900};
`;
export const Section = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
`; 