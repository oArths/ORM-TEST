import styled, { css } from "styled-components";
interface ITema {
  $CurrentTheme?: "light" | "dark";
  $color?: Boolean;
  $isVisible?: string;
}
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
  @media (min-width : ${({ theme }) => theme.breakpoint.laptop}){
    width:80%;
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
export const Services = styled.span`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 100%;
`;
export const Id = styled.div`
margin-bottom: 80px;

`; 
export const ServicesContainer = styled(ContainerServices)`
  justify-content: space-between;
  gap: 35px;
  @media (max-width: ${({ theme }) =>theme.breakpoint.mobileG}) {
    flex-direction: column;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    display: flex;
    flex-wrap: wrap;
    height: 50%;
    width: 80%;
  }
`;
export const cellServices = styled(Services)<ITema>`
display: none;
  width: 45%;
  height: 33%;
  border-radius: 4px;
  gap: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    display: flex;
  }
`;
export const cellServicesMobile  = styled(Services)<ITema>`
  
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    display: flex;
    width: 45%;
    height: 33%;
    border-radius: 4px;
    justify-content: center;
    width: 100%;
  }
`;
export const ContainerIconBlack = styled.div<ITema>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 45px;
  ${(props) => {
    switch (props.$color) {
      case true:
        return `  background-color: ${props.theme.colors.blue500};`;
      case false:
        return `  background-color: ${props.theme.colors.blue900};`;
      default:
        return `  background-color: ${props.theme.colors.blue900};`;
    }
  }}
`;

export const IconWarp = styled.span<ITema>`
  display: none;
  @media  (max-width: ${({ theme }) =>theme.breakpoint.mobileG}) {
    margin-right: 23px;
    display: flex;
    transition: all 0.3s ease;
    transform: ${({ $isVisible }) =>$isVisible ? "rotate(180deg)": "none"}; 
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
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    font-size: 1.5rem;
    padding: 10px 15px;
  }
  @media ((min-width: ${({ theme }) =>theme.breakpoint.mobileG}) 
  and (max-width: ${({ theme }) =>theme.breakpoint.tablet})) {
    font-size: 1rem;
  }
  @media ((min-width: ${({ theme }) => theme.breakpoint.tablet}) and
      (max-width: ${({ theme }) => theme.breakpoint.desktop})) {
    font-size: 1.5rem;
  }
`;
export const TitleWarp = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;

  @media (max-width: ${({ theme }) =>theme.breakpoint.mobileG}) {
    justify-content: space-between;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.gray300};
    overflow: hidden;
    border-bottom: 2px solid ${({ theme }) => theme.colors.neutral200};
  }
`;
export const TitleCard = styled(subTitle)``;
export const TextBodyWarp = styled.div<ITema>`
  @media (max-width: ${({ theme }) =>  theme.breakpoint.mobileG}) {
    padding: 20px 30px;
    box-shadow: 0px 2px 4px ${({ theme }) => theme.colors.gray300};
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(-50%);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeOut {
      0% {
        opacity: 1;
        transform: translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateY(-50%);
      }
    }

    ${({ $isVisible }) =>
      $isVisible
        ? "opacity: 1; animation: fadeIn 1s ease ;"
        : "opacity: 0; animation: fadeOut 1s ease ; display: none;"};
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
