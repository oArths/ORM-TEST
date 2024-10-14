import styled, { css } from "styled-components";
export const Section = styled.section`
  flex-direction: column;
  display: flex;
  align-items: center;
  height: auto;
`;

export const ServicesHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 50%;
  margin-bottom: 49px;
  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    width: 80%;
  }
`;

export const bar = styled.div`
  width: 5px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.orange500};
`;
export const ContainerServices = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: auto;
`;

export const Id = styled.div`
  margin-bottom: 80px;
`;
export const ServicesContainerMobile = styled(ContainerServices)`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    justify-content: space-between;
    gap: 35px;
    flex-direction: column;
    display: flex;
    flex-wrap: wrap;
    height: 50%;
    width: 90%;
  }
`;
export const ServicesContainerDesktop = styled(ContainerServices)`
  justify-content: space-between;
  gap: 35px;
  display: flex;
  flex-wrap: wrap;
  height: 50%;
  width: 80%;

  @media (min-width: 595px ) 
  and (max-width: 720px){
    justify-content: space-between;
    gap: 35px;
    flex-direction: column;
    display: flex;
    height: auto;
    width: 90%;
  }
 
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    display: none;
  }
  span:last-child {
    width: 100%;
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
export const subTitleHeader = styled.h2`
  display: flex;
  margin-bottom: 20px;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  color: ${({ theme }) => theme.colors.neutral100};
  font-size: 2.5rem;
  width: 100%;

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
  text-align: justify;
  color: ${({ theme }) => theme.colors.neutral100};
  ${({ theme }) => css`
    ${theme.typography.hind300}
  `}
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    font-size: 0.938rem;
  }
  @media ((min-width: ${({ theme }) => theme.breakpoint.mobileG}) and
      (max-width: ${({ theme }) => theme.breakpoint.desktop})) {
    font-size: 1rem;
  }
`;
