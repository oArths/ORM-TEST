import styled, { css } from "styled-components";
export const SectionContact = styled.section`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 100%;
  justify-content: center;
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
  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    width: 90%;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: right;
  height: auto;
  width: 60%;
  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    display: none;
  }
`;
export const imageIllustration = styled.img`
  width: 90%;
  max-width: 800px;
  -webkit-user-drag: none;
  object-fit: contain;
`;
export const TitleWarp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const ServicesContact = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 50%;
  gap: 20px;
  margin-bottom: 45px;
  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    width: 80%;
  }
`;
export const Title = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 14px;
  font-size: 1.438rem;
  padding: 21px 0px;
  color: ${({ theme }) => theme.colors.neutral100};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral100};
  ${({ theme }) =>
    css`
      ${theme.typography.archivo500}
    `}
`;
export const subTitle = styled.h2`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  color: ${({ theme }) => theme.colors.neutral100};
  font-size: 2.625rem;
  ${({ theme }) =>
    css`
      ${theme.typography.archivo600}
    `}
  @media (max-width : ${({ theme }) => theme.breakpoint.mobileG}) {
    justify-content: center;
    text-align: center;
    width: 100%; 
  }
`;
export const TextBody = styled.span`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.neutral100};
  ${({ theme }) =>
    css`
      ${theme.typography.hind300}
    `}
`;

export const bar = styled.div`
  width: 5px; 
  height: 25px;
  background-color: ${({ theme }) => theme.colors.orange500};
`;
