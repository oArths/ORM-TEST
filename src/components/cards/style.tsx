import styled, { css } from "styled-components";
import { color } from "src/utils/style";
interface ITema {
  $CurrentTheme?: "light" | "dark";
  $color?: boolean;
  $isVisible?: string;
}
export const Mobile = styled.div`
  width: 100%;
`;
export const ContainerDesktop = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    display: block;
    width: 100%;
  }
`;

export const Services = styled.span`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 100%;
`;
export const WarpButton = styled.div`
  width: 100%;
  @media (min-width: 595px) and (max-width: 720px) {
    display: none;
  }
`;

export const WarpButtonTablet = styled.div`
  display: none;
  @media (min-width: 595px) and (max-width: 720px) {
    width: 100%;
    display: block;
  }
`;
export const cellServices = styled(Services)<ITema>`
  display: none;
  width: 45%;
  height: 33%;
  border-radius: 4px;
  gap: 20px;
  @media (min-width: 595px) and (max-width: 720px) {
    width: 100%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    display: flex;
  }
`;
export const cellServicesMobile = styled(Services)<ITema>`
  display: flex;
  width: 45%;
  height: auto;
  justify-content: start;
  border-radius: 4px;
  gap: 20px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  @media (min-width: 595px) and (max-width: 720px) {
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    height: auto;
    width: auto;
    gap: 0px;
    padding: 0px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    border: 0.65px solid ${({ theme }) => theme.colors.gray1000};
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;
export const ContainerIconBlack = styled.div<ITema>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 45px;
  background-color: ${({ $color }) => color($color)};
  @media (min-width: 595px) and (max-width: 720px) {
    display: none;
  }
`;
export const ConatinerIconBlackTablet = styled.div<ITema>`
  display: none;
  @media (min-width: 595px) and (max-width: 720px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 45px;
    background-color: ${({ $color }) => color($color)};
  }
`;

export const IconWarp = styled.div<ITema>`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    margin-right: 23px;
    width: 32px;
    display: flex;
    transition: all 0.3s ease;
    transform: ${({ $isVisible }) => ($isVisible ? "rotate(180deg)" : "none")};
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
  border-top: 1px solid ${({ theme }) => theme.colors.gray100};
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
  color: ${({ theme }) => theme.colors.gray100};
  font-size: 2.625rem;
  ${({ theme }) =>
    css`
      ${theme.typography.archivo600}
    `}
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    font-size: 1.5rem;
    padding: 10px 15px;
  }
  @media ((min-width: ${({ theme }) => theme.breakpoint.mobileG}) 
  and (max-width: ${({ theme }) => theme.breakpoint.tablet})) {
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
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    position: relative;
    z-index: 2;
    padding: 10px 15px;
    justify-content: space-between;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.gray1000};
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  }
`;
export const WebTitleMobile = styled.p`
  width:calc(100% - 50px) ;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0px;
  font-size: 1.5rem;
  @media  (min-width: ${({ theme }) => theme.breakpoint.mobileG}){
    display: none;
  }
`;
export const TitleMobile = styled.p`
  width:calc(100% - 50px) ;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0px;
  font-size: 2rem;
 
`;

export const WebTitle = styled.p`
  padding: 0px;
  font-size: 2rem;
  width:calc(100% - 50px) ;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    display: none;
  }
`;
export const TitleCard = styled(subTitle)`
  justify-content: space-between;
  font-size: 2rem;
  padding: 0px;

  @media (max-width: 350px) {
    display: flex;
    gap: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: start;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    font-size: 1.5rem;
    max-width:calc(100% - 55px) ;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    width: 100%;

    
  }
`;
export const TextBodyWarp = styled.div<ITema>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    padding: 20px 30px;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.gray1000};
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(-50%);
        height: 0;
        display: none;
      }
      100% {
        opacity: 1;
        transform: translateY(0);
        height: 100%;
      }
    }

    @keyframes fadeOut {
      0% {
        height: 100%;
        opacity: 1;
        transform: translateY(0);
      }
      25% {
        height: 75%;
        box-shadow: none;
        display: none;
      }
      50% {
        height: 50%;
      }
      75% {
        height: 25%;
      }
      100% {
        opacity: 0;
        height: 0;
        display: none;
        transform: translateY(-100%);
      }
    }
    &.open {
      animation: fadeIn 1s ease forwards;
    }
    &.closed {
      animation: fadeOut 1s ease forwards;
    }
  }
`;
export const TextBody = styled.span`
  font-size: 1.1rem;
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
export const TextBodyCard = styled(TextBody)`
  color: ${({ theme }) => theme.colors.white100};
`;
