import styled, { css } from "styled-components";
export const Section = styled.section`
  flex-direction: column;
  display: flex;
  align-items: center;
  height: auto;
`;
export const ContainerCommunity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: auto;
  gap: 80px;
  margin-bottom: 80px;
  @media (min-width : ${({ theme }) => theme.breakpoint.laptop}){
    width:80%;
  }
`;

export const ButtonContainerLeft = styled.div`
display: flex;
flex-direction:row;
align-items: center;
justify-content:left;
width: 100%;

`; 
export const ButtonContainerRight = styled.div`
display: flex;
flex-direction:row;
align-items: center;
justify-content:right;
width: 100%;

`; 
export const ButtonWarp = styled.div`
display: flex;
flex-direction:row;
width: 100%;
height: 48px;


@media (min-width : ${({ theme }) => theme.breakpoint.mobileG}){
    width:80%;
    height: 45px;
  }
@media (min-width : ${({ theme }) => theme.breakpoint.tabletM}){
    width:80%;
    height: 70px;
  }
`; 

export const ContainerWarp = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
@media (min-width: ${({ theme }) => theme.breakpoint.mobileM}) and 
      (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
        display: flex;
        flex-direction: column;
        width: 100%;


      }
      @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {

      }
      @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    
      }
`; 
export const Discord = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  height: 50%;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
        width: 100%;
      }
`;
export const titleDiscord = styled.h2`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 14px;
  font-size: 1.438rem;
  padding: 21px 0px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.neutral100};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral100};
  ${({ theme }) =>
    css`
      ${theme.typography.archivo500}
    `}
  
`;
export const subTitleDiscord = styled.h2`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  text-align:center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.neutral100};
  font-size: 2.5rem;
  ${({ theme }) =>
    css`
      ${theme.typography.archivo600}
    `}
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileLG}) {
        width: 100%;
        font-size: 2.2rem;

      }
`;
export const SubTitleQR = styled(subTitleDiscord)`
  text-align: center;
  font-size:2.25rem;
  height: 60px;
`; 
export const bar = styled.div`
  width: 5px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.orange500};
`;
export const TextBodyDiscord = styled.span`
  font-size: 1.25rem;
  margin-top: 15px;
margin-bottom: 40px;
text-align: justify;
  color: ${({ theme }) => theme.colors.neutral100};
  ${({ theme }) =>
    css`
      ${theme.typography.hind300}
    `}
`;
export const QrCode = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  height: 50%;
  gap: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileM}) and 
      (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
        display: none;


      }
`;
export const WhatsApp = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  height: 50%;
align-items: start;
@media (min-width: ${({ theme }) => theme.breakpoint.mobileM}) and 
      (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
        display: none;


      }
`;
export const PhoneImage = styled.img`
  width: 90%;
  object-fit: contain;
  -webkit-user-drag: none;
`;
export const QR = styled(PhoneImage)`
  width: 40%;
`;
export const Community = styled.aside`
 display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  height: 50%;
align-items: center;
@media (min-width: ${({ theme }) => theme.breakpoint.mobileM}) and 
      (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {

        width: 100%;


      }
`;
