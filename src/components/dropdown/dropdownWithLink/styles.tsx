import styled, { css } from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const title = styled.span`
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
export const visible = styled.div`
  display: none;

  ${Container}:hover && {
    display: block;
    width: 166px;
    position: absolute;
    z-index: 10;
  }
`;
export const OptionConteiner = styled.nav`
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
export const Option = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  height: 18px;
  padding: 10px 20px;
  font-size: 0.75rem;
  user-select: none;
  gap: 5px;
  border-top: 0.8px solid ${({ theme }) => theme.colors.gray600};
  color: ${({ theme }) => theme.colors.neutral100};
  cursor: pointer;
  &:hover {
  background-color: ${({ theme }) => theme.colors.gray500};
  }
  ${({ theme }) => css`
    ${theme.typography.archivo300}
  `}
`;
