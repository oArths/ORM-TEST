import styled, { css } from "styled-components";
import { backgroundLine, backgroundMobile } from "@assets/index.tsx";
export const Home = styled.section`
  flex-direction: column;
  display: flex;
  align-items: start;
  justify-content: start;
  margin-top: 80px;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.blue500};
  @media (max-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    margin-bottom: 80px;
    margin-top: 50px;
  }
`;
export const HomeWarp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 80vh;
  background-color: ${({ theme }) => theme.colors.blue500};
  @media (max-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    height: 60vh;
  }
  @media (min-width: ${({ theme }) =>theme.breakpoint.MobileGG}) 
  and (max-width: ${({ theme }) =>theme.breakpoint.tabletM}) {
    height: 70vh;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    height: 88dvh;
  }
`;
export const Container = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
  margin: 20px 0px;
  background-image: url(${backgroundLine});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    flex-direction: column;
    background-image: url(${backgroundMobile});
  }
  @media (min-width: ${({ theme }) =>theme.breakpoint.MobileGG}) 
  and (max-width: ${({ theme }) =>theme.breakpoint.tabletM}) {
    width: 99%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    margin:0px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktopG}) {
    height: 90%;
  }
`;

export const WarpPerson = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  height: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    flex-direction: row;
    width: 100%;
    height: 20%;
  }
`;
export const Person = styled.img`
  object-fit: contain;
  -webkit-user-drag: none;
  max-width: 300px;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileLG}) {
    max-width: 120px;
  }
  @media ((min-width: ${({ theme }) =>theme.breakpoint.mobileLG})
  and (max-width: ${({ theme }) =>theme.breakpoint.MobileGG})) {
    max-width: 150px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktopM}) {
    width: 130%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.desktopG}) {
    width: 160%;
    max-width: 300px;
  }
`;
export const Person01 = styled(Person)`
  position: relative;
  top: 10%;
`;
export const Person02 = styled(Person)`
  position: relative;
  bottom: 10%;
  @media (max-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    display: none;
  }
`;
export const Person02Mobile = styled(Person)`
  position: relative;
  bottom: 10%;
  @media (min-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    display: none;
  }
`;
export const Person03 = styled(Person)`
  position: relative;
  right: 40%;
  @media (max-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    display: none;
  }
`;
export const Person03Mobile = styled(Person)`
  position: relative;
  top: -28%;
  @media (min-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    display: none;
  }
`;
export const Person04 = styled(Person)`
  position: relative;
  bottom: -18%;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileLG}) {
    position: relative;
    max-width: 150px;
    right: -25%;
    top: -15%;
  }
  @media (min-width: ${({ theme }) =>theme.breakpoint.mobileLG}) 
  and (max-width: ${({ theme }) =>theme.breakpoint.MobileGG}) {
    position: relative;
    max-width: 200px;
    right: -25%;
    top: -15%;
  }
`;
export const Person05 = styled(Person)`
  position: relative;
  right: 80%;
  max-width: 250px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    right: 30%;
    bottom: -30%;
    max-width: 160px;

  }
  @media ((min-width: ${({ theme }) =>theme.breakpoint.mobileG})) 
  and (max-width: ${({ theme }) =>theme.breakpoint.MobileGG}) {
    right: 40%;
    bottom: -20%;
  }
`;

export const ContainerText = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  position: relative;
  z-index: 10;
  gap: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    width: 100%;
    height: 50%;
  }
`;
export const Img = styled.img`
  width: 100dvw;
  background-color: ${({ theme }) => theme.colors.neutral900};
  -webkit-user-drag: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    object-fit: cover;
  }
`;

export const centerText = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const title = styled.h1`
  font-size: clamp(2rem, 3.5vw, 4.063rem);
  color: ${({ theme }) => theme.colors.white900};
  ${({ theme }) =>
    css`
      ${theme.typography.archivo900}
    `}
`;
export const SubTitle = styled.h2`
  font-size: clamp(2rem, 3.5vw, 4.063rem);
  color: ${({ theme }) => theme.colors.white900};

  ${({ theme }) =>
    css`
      ${theme.typography.archivo300}
    `}
`;
export const bodyText = styled.span`
  font-size: clamp(0.75rem, 2vw, 1.313rem);
  text-align: center;
  width: 400px;
  color: ${({ theme }) => theme.colors.white900};

  ${({ theme }) =>
    css`
      ${theme.typography.hind300}
    `}
  @media (max-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    width: 300px;
  }
`;
export const ButtonWarp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  @media (max-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    width: 195px;
    height: 44px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.laptopM}) {
    width: 137px;
    height: 36px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.laptopM}) {
    width: 209px;
    height: 55px;
  }
`;
