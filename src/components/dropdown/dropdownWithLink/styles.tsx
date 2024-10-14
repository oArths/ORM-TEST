import styled, { css } from "styled-components";
interface IOption {
  $color: "dark" | "light";
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  @media (min-width: 1000px)and (max-width: 1324px){
    width: 100px
  }
`;

export const title = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  gap: 5px;
  @media (min-width: 1000px)and (max-width: 1324px){
    font-size: 0.9rem;
  }
  position: relative;
  z-index: 7;
  color: ${({ theme }) => theme.colors.neutral100};

  cursor: pointer;
  ${({ theme }) => css`
    ${theme.typography.archivo500}
  `}
`;

export const Block = styled.div`

  position: absolute;
  ${Container}:hover && {
    opacity: 1;
    background-color: ${({ theme }) => theme.colors.neutral800};
    width: 166px;
    height: 80px;
    position: absolute;
    top: 0;
    z-index: 6;
    @media (min-width: 1000px)and (max-width: 1324px){
    width: 100px
  }
  }
  ${Container}:not(:hover) && {
    background-color: ${({ theme }) => theme.colors.neutral800};
    width: 166px;
    height: 80px;
    position: absolute;
    top: 0;
    z-index: 6;
    @media (min-width: 1000px)and (max-width: 1324px){
    width: 100px
  }


  }
`;
export const visible = styled.div`
  ${Container}:hover && {
    width: 150px;
    display: flex;
    position: absolute;
    opacity: 1;
    z-index: 5;
    @media (min-width: 1000px)and (max-width: 1324px){
    width: 100px
  }
    @keyframes fadeIn {
      0% {
        transform: translateY(-50%);
      }
      100% {
        transform: translateY(0%);
      }
    }
    animation: fadeIn 1s ease forwards;
  }
  @keyframes fadeOut {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-90%);
      display: none;
    }
  }

  ${Container}:not(:hover) && {
    @media (min-width: 1000px)and (max-width: 1324px){
    width: 100px
  }
    width: 150px;
    display: flex;
    position: absolute;
    opacity: 1;
    z-index: 5;
    animation: fadeOut 0.1s ease forwards;
  }
`;
export const OptionContainer = styled.nav`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 166px;
  height: auto;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.neutral800};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
export const Option = styled.a<IOption>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 18px;
  padding: 20px;
  font-size: 0.75rem;
  user-select: none;
  @media (min-width: 1000px)and (max-width: 1324px){
    font-size: 0.65rem;
    justify-content: start;
    text-align:left ;
    padding: 20px 10px;


  }
  gap: 5px;
  border-top: 0.8px solid ${({ theme }) => theme.colors.gray600};
  color: ${({ theme }) => theme.colors.neutral100};
  cursor: pointer;
  &:hover {
    background-color: ${({ $color, theme }) =>
      $color === "light" ? theme.colors.gray500 : theme.colors.blue300};
  }
  ${({ theme }) => css`
    ${theme.typography.archivo300}
  `}
`;
export const WarpIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${Container}:hover && {
    transition: all 0.2s ease;
    transform: rotate(180deg);
  }
  
`;

export const WarpIconOption = styled.div`

@media (min-width: 1000px)and (max-width: 1324px){
  display: none;
}
`;