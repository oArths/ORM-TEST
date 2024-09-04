import styled, { css } from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  z-index: 20;
  width: 100%;
  height: 80px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2); /* Sombra interna */
  background-color: ${({ theme }) => theme.colors.neutral800};
  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    justify-content: space-between;

  }
`;
export const Logo = styled.img`
  object-fit: contain;
  width: 171px;
  height: 41px;
  -webkit-user-drag: none;
  user-select: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
  margin-left: 20px;
  user-select: none;
  -webkit-user-drag: none;


  }
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60%;
  gap: 45px;
  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    display: none;
  }
`;
export const ContainerMenu = styled.nav`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    display: flex;
    width: auto;
    margin-right: 30px;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;
export const MenuWrap = styled.div`
 cursor: pointer;
`;
export const ButtonWarp = styled.a`
text-decoration: none;
`; 
export const Option = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  gap: 5px;
  color: ${({ theme }) => theme.colors.neutral100};
  cursor: pointer;
  ${({ theme }) => css`
    ${theme.typography.archivo600}
  `}
`;
export const LinkButton = styled.a`
text-decoration: none;
width: 143px;
height: 41px;
`; 
export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 25px;
  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    display: none;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.125rem;
  gap: 5px;
  width: 149px;
  height: 39px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.orange500};
  color: ${({ theme }) => theme.colors.white900};
  ${({ theme }) =>
    css`
      ${theme.typography.archivo900}
    `}
`;
