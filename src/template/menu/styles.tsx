import styled, { css } from "styled-components";

export const Container = styled.main`
   position: absolute;
   top: 0px;
   z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.blue500};
`;
export const ButtonWrap = styled.aside`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  width: 90%;
  height: 10%;
  cursor: pointer;
`;

export const ContainerNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-top: 100px;
  width: 70%;
  height: 70%;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
     margin-top: 30px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileG}) 
  and (max-width: ${({ theme }) => theme.breakpoint.mobileLG}){
    margin-top: 50px;
  }
`;
export const OptionsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 37px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
     gap: 30px;
  }
  @media ((min-width: ${({ theme }) => theme.breakpoint.tablet}) and
      (max-width: ${({ theme }) => theme.breakpoint.desktop})) {
        gap: 50px;
      }
      @media ((min-height: ${({ theme }) => theme.breakpoint.tablet}) and
      (max-width: ${({ theme }) => theme.breakpoint.laptop})) {
        gap: 40px;
  }
`;
export const Options = styled.a`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gray1000};
  ${({ theme }) =>
    css`
      ${theme.typography.archivo700}
    `}
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    font-size: 1.2rem;
  }
  @media ((min-width: ${({ theme }) =>theme.breakpoint.mobileG}) 
  and (max-width: ${({ theme }) =>theme.breakpoint.tablet})) {
    font-size: 1.8rem;
  }
  @media ((min-width: ${({ theme }) => theme.breakpoint.tablet}) and
      (max-width: ${({ theme }) => theme.breakpoint.desktop})) {
    font-size: 2.2rem;
  }
  @media ((min-height: ${({ theme }) => theme.breakpoint.tablet}) and
  (max-width: ${({ theme }) => theme.breakpoint.desktop})) {
    font-size: 1.8rem;
  }
  @media ((min-height: ${({ theme }) => theme.breakpoint.tablet}) and
      (max-width: ${({ theme }) => theme.breakpoint.laptop})) {
    font-size: 1.5rem;
  }
  @media ((min-width: ${({ theme }) => theme.breakpoint.tablet}) and
      (max-width: ${({ theme }) => theme.breakpoint.laptop})) {
    font-size: 1.8rem;
  }
`;
export const ContainerInfos = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: center;
  width: 100%;
  margin-bottom: 60px;
`;
export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.blue900};
  ${({ theme }) =>
    css`
      ${theme.typography.archivo900}
    `}
  
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    font-size: 1rem;
  }
  @media ((min-width: ${({ theme }) =>theme.breakpoint.mobileG}) 
  and (max-width: ${({ theme }) =>theme.breakpoint.tablet})) {
    font-size: 1.2rem;
  }
  @media ((min-width: ${({ theme }) => theme.breakpoint.tablet}) and
      (max-width: ${({ theme }) => theme.breakpoint.desktop})) {
    font-size: 1.5rem;
  }
  @media ((min-height: ${({ theme }) => theme.breakpoint.tablet}) and
      (max-width: ${({ theme }) => theme.breakpoint.laptop})) {
    font-size: 1.2rem;
  }
  @media ((min-width: ${({ theme }) => theme.breakpoint.tablet}) and
      (max-width: ${({ theme }) => theme.breakpoint.laptop})) {
    font-size: 1.2rem;
  }
`;
export const SubTitle = styled.h2`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.gray1000};
  ${({ theme }) =>
    css`
      ${theme.typography.archivo300}
    `}
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    font-size: 1rem;
  }
  @media ((min-width: ${({ theme }) =>theme.breakpoint.mobileG}) 
  and (max-width: ${({ theme }) =>theme.breakpoint.tablet})) {
    font-size: 1.2rem;
  }
  @media ((min-width: ${({ theme }) => theme.breakpoint.tablet}) and
      (max-width: ${({ theme }) => theme.breakpoint.desktop})) {
    font-size: 1.5rem;
  }
  @media ((min-height: ${({ theme }) => theme.breakpoint.tablet}) and
      (max-width: ${({ theme }) => theme.breakpoint.laptop})) {
    font-size: 1.2rem;
  }
  @media ((min-width: ${({ theme }) => theme.breakpoint.tablet}) and
      (max-width: ${({ theme }) => theme.breakpoint.laptop})) {
    font-size: 1.1rem;
  }
`;
export const Reserved = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.blue900};
  ${({ theme }) =>
    css`
      ${theme.typography.hind300}
    `}
`;
export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px ;
  justify-content: space-around;
  width: 350px;
  height: 100%;
  max-height: 50px;
  margin-bottom: 30px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    margin-bottom: 20px;
    width: 300px;
  }
`;
export const LinkIcons = styled.a`
  max-width: 30px;
  max-height: 30px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    max-height: 20px;
    max-width: 20px;
  }
`;
export const Icon = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;

 
`;
