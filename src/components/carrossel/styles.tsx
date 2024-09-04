import styled, { css } from "styled-components";

export const Marquee = styled.div`
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  display: block;
  position: relative;
`;

export const MarqueeContent = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.gray100};
  font-size: 6.375rem;
  animation: marquee 30s linear infinite;
  transition: all 0.3s ease;
  ${({ theme }) => css`
    ${theme.typography.archivo900}
  `}
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @media(max-width: ${({ theme }) => theme.breakpoint.tablet}){
    font-size: 5.375rem;

  }
`;
