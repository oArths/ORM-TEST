 import styled, { css } from "styled-components";
import px2vw from "src/utils/pxtovw";
import { backGroundMobile } from "../../assets/index";

export const GraphWarp = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    display: none;
  }
`;
export const Green = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${px2vw(400)};
  height: ${px2vw(400)};
  position: relative;
  z-index: 2;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.green500};
`;
export const Yellow = styled(Green)`
  width: ${px2vw(360)};
  height: ${px2vw(360)};
  z-index: 4;
  background-color: ${({ theme }) => theme.colors.yellow500};
`;
export const Blue = styled(Green)`
  width: ${px2vw(324)};
  height: ${px2vw(324)};
  z-index: 5;
  background-color: ${({ theme }) => theme.colors.blue550};
`;
export const Red = styled(Green)`
  width: ${px2vw(292)};
  height: ${px2vw(292)};
  z-index: 7;
  background-color: ${({ theme }) => theme.colors.red500};
`;
export const Logo = styled(Red)`
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-user-drag: none;
  width: ${px2vw(234)};
  height: ${px2vw(234)};
  z-index: 8;
  background-color: ${({ theme }) => theme.colors.white900};
`;
export const LogoImage = styled.img`
  width: 60%;
  object-fit: contain;
  -webkit-user-drag: none;
`;
export const ContainerBar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  position: absolute;
  height: 150px;
  right: -230px;
  bottom: -50px;
  z-index: 1;
  @media (min-width: ${({ theme }) =>theme.breakpoint.mobileL}) 
  and (max-width: ${({ theme }) =>theme.breakpoint.MobileGG}) {
    right: -185px;
    bottom: -24px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    right: -200px;
    bottom: -32px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    right: -240px;
    bottom: 20px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.tabletM}) {
    right: -260px;
    bottom: 40px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    right: -320px;
    bottom: 90px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.laptopM}) {
    right: -332px;
    bottom: 120px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    right: -371px;
    bottom: 100px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktopM}) {
    right: -367px;
    bottom: 160px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktopL}) {
    right: -388px;
    bottom: 200px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktopG}) {
    right: -388px;
    bottom: 250px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktopX}) {
    right: -450px;
    bottom: 250px;
  }
`;
export const ContainerBarYellow = styled(ContainerBar)`
  right: -245px;
  top: -40px;
  z-index: 3;

  @media (min-width: ${({ theme }) =>theme.breakpoint.mobileL}) 
  and (max-width: ${({ theme }) =>theme.breakpoint.tablet}) {
    right: -190px;
    top: -45px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    right: -280px;
    top: -30px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.laptopM}) {
    right: -310px;
    top: -30px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    right: -360px;
    top: -24px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktopM}) {
    right: -360px;
    top: -20px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktopL}) {
    right: -360px;
    top: -4px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktopX}) {
    right: -360px;
    top: 20px;
  }
`;
export const ContainerBarBlue = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  position: absolute;
  height: 150px;
  left: -226px;
  z-index: 4;
  bottom: -79px;
  @media (max-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    left: -190px;
    bottom: -50px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    left: -200px;
    bottom: -50px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    left: -220px;
    bottom: -42px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    left: -290px;
    bottom: -20px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.laptopM}) {
    left: -320px;
    bottom:-30px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    left: -350px;
    bottom: -15px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktopM}) {
    left: -350px;
    bottom: -15px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktopL}) {
    left: -350px;
    bottom: -10px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktopX}) {
    left: -350px;
    bottom: 20px;
  }
`;
export const ContainerBarRed = styled(ContainerBarBlue)`
  z-index: 6;
  top: 5px;
  left: -243px;
  @media (max-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    left: -200px;
    top: -40px;
  }
  @media (min-width: ${({ theme }) =>theme.breakpoint.MobileGG}) 
  and (max-width: ${({ theme }) =>theme.breakpoint.tablet}) {
    left: -220px;
    top: -10px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.tabletM}) {
    left: -270px;
    top: 7px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    left: -308px;
    top: 7px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.laptopM}) {
    left: -350px;
    top: 7px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktopM}) {
    left: -400px;
    top: 50px;
  }
`;
export const BarLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  height: ${px2vw(70)};
  width: ${px2vw(217)};
  border-top-right-radius: ${px2vw(50)};
  border-bottom-right-radius: ${px2vw(50)};
  background-color: ${({ theme }) => theme.colors.green500};
`;
export const BarLeftYellow = styled(BarLeft)`
  width: ${px2vw(257)};
  background-color: ${({ theme }) => theme.colors.yellow500};
`;
export const BarRightBlue = styled(BarLeft)`
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  justify-content: start;
  border-top-left-radius: ${px2vw(50)};
  border-bottom-left-radius: ${px2vw(50)};
  background-color: ${({ theme }) => theme.colors.blue550};
`;

export const BarRightRed = styled(BarRightBlue)`
  width: ${px2vw(270)};
  background-color: ${({ theme }) => theme.colors.red500};
`;
export const NumberLeft = styled.p`
  display: flex;
  margin-left: 10px;
  align-items: baseline;
  text-align: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white900};
  width: ${px2vw(55)};
  height: ${px2vw(55)};
  border-radius: 50%;
  font-size: clamp(1.2rem, 3.3vw, 4.2rem);
  ${({ theme }) =>
    css`
      ${theme.typography.number900}
    `}
  line-height: 1.8;
`;
export const NumberRight = styled(NumberLeft)`
  margin-left: 0px;
  margin-right: 10px;
`;
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: auto;
  height: auto;
`;
export const Title = styled.h1`
  width: auto;
  color: ${({ theme }) => theme.colors.neutral100};
  ${({ theme }) =>
    css`
      ${theme.typography.archivo500}
    `}
  font-size: clamp(1.2rem, 2.2vw, 1.8rem);
  @media (max-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    width: 130px;
  }
`;
export const SubTitle = styled.p`
  width: auto;
  max-width: 150px;
  font-size: clamp(0.638rem, 1.2vw, 1.2rem);
  color: ${({ theme }) => theme.colors.neutral100};
  ${({ theme }) =>
    css`
      ${theme.typography.hind300}
    `}

  @media(max-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    width: 130px;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    max-width: 150px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.laptopM}) {
    width: 100%;
    max-width: 250px;
  }
`;
export const ContainerMobile = styled.div`
  display: flex;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    display: none;
  }
`;
export const ImageBackGound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 225px;
  width: 100%;
  height: 100%;
  background-image: url(${backGroundMobile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  @media ((min-width: ${({ theme }) =>theme.breakpoint.mobileL})
  and (max-width: ${({ theme }) =>theme.breakpoint.mobileG})) {
    gap: 315px;
  }
`;

export const TextWarpMobile = styled.span`
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerTextPosition = styled(ContainerText)`
  display: none;
  position: static;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    display: flex;
    position: relative;
    bottom: 30px;
    right: -10px;
  }
`;
