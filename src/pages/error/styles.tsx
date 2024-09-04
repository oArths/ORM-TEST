import styled, { css } from "styled-components";
import px2vw from "src/utils/pxtovw";
export const Body = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.gray900};
`;

export const ContainerCarrossel = styled.div`
  width: 100%;
  height: 10%;
`;
export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90%;
`;
export const ContainerView = styled.section`
  width: ${px2vw(784)};
  height: auto;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0px 4px 4px 0px ${({ theme }) => theme.colors.gray300};
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: ${px2vw(948)};
  }
  @media ((max-width: ${({ theme }) => theme.breakpoint.tablet}) and (max-width:${({ theme }) => theme.breakpoint.laptop})) {
    width: ${px2vw(948)};
  }
`;
export const HeaderView = styled.aside`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 80px;
  padding-left: 20px;
  background-color: ${({ theme }) => theme.colors.gray100};
`;
export const Balls = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white900};
`;
export const TextView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;
`;

export const TextBody = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.gray100};
  font-size: 16rem;
  ${({ theme }) => css`
    ${theme.typography.number900}
  `}
  @media(max-width:${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${px2vw(300)};
  }
  @media (min-width: ${({ theme }) =>theme.breakpoint.tablet}) and (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    font-size: ${px2vw(256)};
  }
`;
export const SubTitle = styled.h3`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => css`
    ${theme.typography.hind300}
  `}
  @media(max-width:${({ theme }) => theme.breakpoint.tablet}) {
    font-size: 1rem;
  }
`;
export const DinoImage = styled.img`
  width: 40%;
  position: absolute;
  bottom: 0px;
  right: 0px;
  object-fit: contain;
  @media ((max-height: ${({ theme }) =>theme.breakpoint.tablet}) and (max-width:${({ theme }) => theme.breakpoint.tablet})) {
    width: 25%;
    right: 25%;
  }
`;
