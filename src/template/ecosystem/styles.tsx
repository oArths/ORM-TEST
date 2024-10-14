import styled, { css } from "styled-components";
import { Traced, TracedLight } from "../../assets/index";

interface ITema {
  $CurrentTheme: "light" | "dark";
}

export const SectionEco = styled.div<ITema>`
  ${(props) => {
    switch (props.$CurrentTheme) {
      case "dark":
        return ` background-image: url(${Traced});`;
      case "light":
        return ` background-image: url(${TracedLight});`;
      default:
        return ` background-image: url(${TracedLight});`;
    }
  }}
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 40px;
  margin-bottom:80px;
`;

export const bar = styled.div`
  width: 5px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.orange500};
`;

export const ServicesHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 50%;
  gap: 20px;
  margin-bottom: 45px;
  @media (min-width : ${({ theme }) => theme.breakpoint.laptop}){
    width:80%;
  }
`;
export const ServicesContact = styled.div`
  margin-bottom: 45px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 50%;
  gap: 20px;
  @media (min-width : ${({ theme }) => theme.breakpoint.laptop}){
    width:80%;
  }
`;

export const Services = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 50%;
  width: 100%;
`;
export const cellServices = styled(Services)`
  width: 45%;
  height: 33%;
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
