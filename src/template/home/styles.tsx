import styled, { css } from "styled-components";

export const Home = styled.section`
  flex-direction: column;
  display: flex;
  align-items: start;
  justify-content: start;
  margin-top: 80px;
  width: 100%;
  height: 100vh;
  padding-bottom: 200px;
  @media ((min-width: ${({ theme }) => theme.breakpoint.mobileM})
  and (max-width: ${({ theme }) => theme.breakpoint.mobileG})) {
    padding-bottom: 50%; 
  }
  @media(min-width: ${({ theme }) => theme.breakpoint.mobileG}) 
  and(max-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    height: 60%;
    padding-bottom: 100%;
  }
  @media ((min-width: ${({ theme }) => theme.breakpoint.MobileGG})){
    height: 60%;
    padding-bottom: 10%;
  }

`;
export const HomeWarp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.blue500};
`;
export const Container = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 90%;
  gap: 20px;
`;
export const ContainerText = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 90%;
  gap: 20px;
  top: 50%;
  position: absolute;
  z-index: 2;
  @media ((min-width: ${({ theme }) => theme.breakpoint.mobileM})
  and (max-width: ${({ theme }) => theme.breakpoint.mobileLG})) {
    top: 35%;
  }
  @media ((min-width: ${({ theme }) => theme.breakpoint.mobileLG})
  and (max-width: ${({ theme }) => theme.breakpoint.mobileG})) {
    top: 50%;
  }
  @media((min-width: ${({ theme }) => theme.breakpoint.mobileG}) 
  and (max-width: ${({ theme }) => theme.breakpoint.MobileGG})) {
    top: 45%;
  }
  @media((min-width: ${({ theme }) => theme.breakpoint.MobileGG}) 
  and (max-width: ${({ theme }) => theme.breakpoint.tablet})) {
    top: 20%;
  }
  @media((min-width: ${({ theme }) => theme.breakpoint.tablet}) 
  and (max-width: ${({ theme }) => theme.breakpoint.tabletM})) {
    top: 25%;
  }
  @media((min-width: ${({ theme }) => theme.breakpoint.tabletM}) 
  and (max-width: ${({ theme }) => theme.breakpoint.laptop})) {
    top: 30%;
  }
  @media((min-width: ${({ theme }) => theme.breakpoint.laptop}) 
  and (max-width: ${({ theme }) => theme.breakpoint.laptopM})) {
    top: 30%;
  }
  @media((min-width: ${({ theme }) => theme.breakpoint.laptopM}) 
  and (max-width: ${({ theme }) => theme.breakpoint.desktop})) {
    top: 30%;
  }
  @media((max-width: ${({ theme }) => theme.breakpoint.tabletM}) 
  and (min-height: ${({ theme }) => theme.breakpoint.laptop})){
    top: 20%;
  }
  @media(min-width:${({ theme }) => theme.breakpoint.desktop}){
    top: 35%;
  }
  @media(min-width:${({ theme }) => theme.breakpoint.desktopM}){
    top: 40%;
  }
  @media(min-width:${({ theme }) => theme.breakpoint.desktopL}){
    top: 50%;
  }
`;
export const Img = styled.img`
  border-top: 1px solid  ${({ theme }) => theme.colors.blue500};
  width: 100%;
  -webkit-user-drag: none;
`;
export const BackImgMobile = styled.img`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue500};
  z-index: 1;
  display: block;
  @media (min-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    display: none;
  }
`;
export const BackImg = styled(BackImgMobile)`
display: none;
  @media (min-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    display: block;
  }

`;
export const centerText = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const title = styled.h1`
  font-size: clamp(2rem,3.5vw,4.063rem);
  color: ${({ theme }) => theme.colors.white900};
  ${({ theme }) =>
    css`
      ${theme.typography.archivo900}
    `}

`;
export const SubTitle = styled.h2`
  font-size: clamp(2rem,3.5vw,4.063rem);
  color: ${({ theme }) => theme.colors.white900};

  ${({ theme }) =>
    css`
      ${theme.typography.archivo300}
    `}
 
`;
export const bodyText = styled.span`
  font-size: clamp(0.75rem,2vw,1.313rem);

  text-align: center;
  width: 400px;
  color: ${({ theme }) => theme.colors.white900};

  ${({ theme }) =>
    css`
      ${theme.typography.hind300}
    `}
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    width: 300px;
  }

 
`;
export const ButtonWarp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  width: 300px;
`;
