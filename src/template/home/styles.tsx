import styled, { css } from "styled-components";

export const Home = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  width: 100%;
  height: 60vh;
  background-color: ${({ theme }) => theme.colors.blue500};
  @media(max-width: ${({ theme }) =>theme.breakpoint.laptop}) {
    height: auto;
    padding: 10% 0;
  }
`;
export const IConn = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.blue600};
  border-bottom: 25px solid ${({ theme }) => theme.colors.blue700};
  margin-bottom: 100px;
  @media (max-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    height: 24px;
    border-bottom: 12px solid ${({ theme }) => theme.colors.blue700};
    margin-bottom: 20px;
  }
  @media  (min-width: ${({ theme }) => theme.breakpoint.MobileGG}) 
  and (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    height: 30px;
    border-bottom: 15px solid ${({ theme }) => theme.colors.blue700};
    margin-bottom: 40px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: start;
  width: 50%;
  height: auto;
  &:first-child {
    @media (max-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
  }
  &:last-child {
    align-items: start;

    @media (max-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
      display: none;
    }
  }
`;

export const Image = styled.img`
  object-fit: contain;
  width: 85%;
  object-position: center;
  -webkit-user-drag: none;
`;

export const ContainerText = styled.span`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 85%;
  height: auto;
  gap: 34px;
  @media (max-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    align-items: center;
    gap: 25px;
    div {
      display: none;
    }
  }
`;

export const centerText = styled.span`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    align-items: center;
    text-align: center;
  }
`;

export const title = styled.h2`
  width: 100%;
  font-size: clamp(1.8rem, 3.5vw, 4.063rem);
  color: ${({ theme }) => theme.colors.white900};

  ${({ theme }) =>
    css`
      ${theme.typography.archivo500}
    `}
`;

export const bodyText = styled.span`
  width: 70%;
  font-size: clamp(0.75rem, 2vw, 1.75rem);
  text-align: left;
  color: ${({ theme }) => theme.colors.white900};

  ${({ theme }) =>
    css`
      ${theme.typography.hind300}
    `}
  @media (max-width: ${({ theme }) => theme.breakpoint.MobileGG}) {
    width: 300px;
    text-align: center;
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
