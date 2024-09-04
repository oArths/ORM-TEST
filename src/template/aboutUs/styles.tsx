import styled, { css } from "styled-components";
export const Section = styled.section`
  flex-direction: column;
  display: flex;
  align-items: center;
  height: auto;
`;
export const IdSection = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  height: auto;
  margin-bottom: 170px;

`;
 

export const ContainerAboutUs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 90%;
  height: auto;
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileM}) and 
        (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
          margin-bottom: 85px;
      }
      @media (min-width : ${({ theme }) => theme.breakpoint.laptop}){
    width:80%;
  }
`;
export const AboutUsWarp = styled.div`
display: flex;
flex-direction: row;
align-items: start;
justify-content: space-between;
border-top: 1px solid ${({ theme }) => theme.colors.neutral100};
@media (min-width: ${({ theme }) => theme.breakpoint.mobileM}) and 
      (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
        display: flex;
        flex-direction: column;
      }

`;
export const AboutUsWarpMobile = styled.div`
display: flex;
flex-direction: row;
align-items: start;
justify-content: space-between;
border-top: 1px solid ${({ theme }) => theme.colors.neutral100};
@media (min-width: ${({ theme }) => theme.breakpoint.mobileM}) and 
      (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
        display: flex;
        flex-direction: column;
      }
@media (max-width: ${({ theme }) => theme.breakpoint.mobileG}){
  border-top: none;

}
`;
export const AboutUs = styled.span`
  display: flex;
  flex-direction: column;
  width: 49%;
  height: 50%;
  justify-content: end;
  align-items: start;
  gap: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileM}) and 
      (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
        width: 100%;

      }
`;
export const textWarp = styled.span`
display: flex;
@media (min-width: ${({ theme }) => theme.breakpoint.mobileM}) and 
      (max-width: ${({ theme }) => theme.breakpoint.mobileG}) {
        display: none;
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
  font-size: 2.5rem;
  width:100%;

  ${({ theme }) =>
    css`
      ${theme.typography.archivo600}
    `}
    @media (max-width : ${({ theme }) => theme.breakpoint.mobileG}){
    justify-content: center;
      text-align:center;
      width:100%;
  }
`;
export const bar = styled.div`
  width: 5px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.orange500};
`;
export const TextBody= styled.span`
text-align: justify;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.neutral100};
  ${({ theme }) =>
    css`
      ${theme.typography.hind300}
    `}
`;
