import styled, { css } from "styled-components";
export const SectionContact = styled.section`
  display: flex;
  align-items: end;
  width: 100%;
  justify-content: end;
  height: auto;
`; 
export const ContainerContact = styled.main`
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: end;
  width: 97%;
  height: auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    align-items: center;
    justify-content: center;
    width: 100%;

  }
  @media (min-width : ${({ theme }) => theme.breakpoint.laptop}){
    width:90%;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: right;
  height: auto;
  width: 50%;
  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    display: none;
  }
`;

export const ImageCut = styled.div`
  display: flex;
  align-items: start;
  justify-content: right;
  width: 100%;
  height: 70%;
  overflow: hidden;
`;
export const imageIllustration = styled.img`
  width: 90%;
  -webkit-user-drag: none;
  object-fit: cover;
`;
