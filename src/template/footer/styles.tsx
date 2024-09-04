import styled, { css } from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.gray100};
`;
export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 80%;
  height: 20%;
  @media (max-width : ${({ theme }) => theme.breakpoint.mobileG}) {
    justify-content: center;

}
`;


export const ErrorWarp= styled.div`
display: flex;
align-items: start;
height: 30px;
width: 100%;

`;
export const Error = styled.p`
display: flex;
align-items: start;
font-size: 0.7rem;
width: 100%;
color: ${({theme}) => theme.colors.red500};
`;
export const Logo = styled.p`
  font-size: 1.5rem;
  margin-top: 30px;
  width: 200px;
  color: ${({ theme }) => theme.colors.blue900};
  ${({ theme }) =>
    css`
      ${theme.typography.archivo900}
    `}
    @media (max-width : ${({ theme }) => theme.breakpoint.mobileG}) {
    text-align:center;

}
`;
export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: auto;
`;
export const ColumnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 60px 0px;
  justify-content: space-around;
  align-items: start;
  width: 100%;
  height: auto;
  @media(min-width: ${({ theme }) => theme.breakpoint.mobileG}) and 
  (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    display: flex;
    flex-direction: column;
  }
`;
export const SectionWarpOne = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-between;
width: 33%;
gap: 20px;
@media (max-width : ${({ theme }) => theme.breakpoint.mobileG}) {
 display :none ;
}
@media(min-width: ${({ theme }) => theme.breakpoint.mobileG}) and 
  (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    width: 100%;
    margin-bottom: 45px;

  }
`; 
export const SectionWarpTow = styled(SectionWarpOne)`
flex-direction: column;
gap: 40px;
@media(min-width: ${({ theme }) => theme.breakpoint.mobileG}) and 
  (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    flex-wrap: nowrap;
    flex-direction: row;
    width: 100%;

  }

`; 
export const SectionWarpThree = styled.form`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: auto;
  gap: 26px;
  @media(min-width: ${({ theme }) => theme.breakpoint.mobileG}) and 
  (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: right;
    width: 90%;
    gap: 0px;
  }
  @media (max-width : ${({ theme }) => theme.breakpoint.mobileG}) {
 display :none ;
}
`; 

export const SectionWarpFour = styled.div`
display: none;
@media (max-width : ${({ theme }) => theme.breakpoint.mobileG}) {
 display :flex ;
 align-content: center;
 flex-direction: column;
}
`; 
export const Column = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: auto;
  gap: 26px;
  @media(min-width: ${({ theme }) => theme.breakpoint.mobileG}) and 
  (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    display: flex;
    flex-direction: row;
    gap: 26px;


  }
`;
export const ContainerText = styled.span`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  gap: 6px;

`;
export const ButtonWarp= styled.span`
 display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  gap: 6px;
justify-content: left;

`
export const ContainerTextTow = styled(ContainerText)`

@media(min-width: ${({ theme }) => theme.breakpoint.mobileG}) and 
(max-width: ${({ theme }) => theme.breakpoint.laptop}) {
  width: 50%;

}
`;
export const ContainerTextFour = styled(ContainerText)`
align-items: center;
gap: 15px;
margin-bottom:52px;
`;  
export const Title = styled.h3`
  font-size: 1rem;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.white900};

  ${({ theme }) =>
    css`
      ${theme.typography.archivo600}
    `}
`;
export const SubTitleLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  font-size: 0.938rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray1000};
  ${({ theme }) =>
    css`
      ${theme.typography.hind300}
    `}
`;
export const SubTitle= styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  font-size: 0.938rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray1000};
  ${({ theme }) =>
    css`
      ${theme.typography.hind300}
    `}
`;
export const input = styled.input.attrs({
  type: "email",
  placeholder: "Seu Email",
})`
margin-top:10px;
  padding: 6px 16px;
  width: 100%;
  height: 31px;
`;
export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 230px;
`;
export const Icon = styled.img`
  object-fit: contain;
  width: 16px;
  height: 16px;
`;
export const WhatsApp = styled(Icon)`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;
export const LinkIcons = styled.a``;
export const ContainerReserved = styled(ContainerLogo)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
    flex-direction: column;
    gap: 15px;


}
`;
export const Reserved = styled(SubTitle)`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ theme }) =>
    css`
      ${theme.typography.hind300}
    `}
`;
export const Bold = styled(Reserved)`
 ${({ theme }) =>
    css`
      ${theme.typography.hind500}
    `}
`; 