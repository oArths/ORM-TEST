import styled, {css} from "styled-components";

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  gap: 20px;
  width: 50%;
  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    width: 100%;
  }
`;
export const ButtonWarp = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 width: 90%;
  margin-bottom: 100px;
  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    display: flex;
 align-items: center;
 justify-content: left;
 width: 100%;
  }
`;
export const ErrorWarp= styled.div`
display: flex;
align-items: end;
height: 30px;
width: 90%;
@media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    width: 100%;

  }

`;
export const Error = styled.p`
display: flex;
align-items: start;
font-size: 1rem;
width: 100%;
color: ${({theme}) => theme.colors.red500};
`;
export const LabelWarp = styled.aside`
  display: flex;
  align-items: start;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    width: 90%;

  }
`;

export const InputWrap = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 7px;
`;
export const Label = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.neutral100};
  ${({ theme }) =>
    css`
      ${theme.typography.archivo300}
    `}
`;

export const Input = styled.input`
  padding: 12px 16px;
  font-size: 1rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.white100};
  border: 1px solid ${({ theme }) => theme.colors.gray500};
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2); 
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
    opacity: 1; 
  }
&:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.white100};
    -webkit-box-shadow: 0 0 0px 1000px #F8F9FA inset; 
    transition: background-color 5000s ease-in-out 0s;
  }
  ${({ theme }) =>
    css`
      ${theme.typography.hind500}
    `}
  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    padding: 15px 16px;
    min-width: 90%;
    max-width: 90%;
  }
`;
export const TextArea = styled.textarea`
  padding: 12px 16px;
  font-size: 1rem;
  min-width: 100%;
  max-width: 100%;
  line-height: 1.5;
  min-height: 300px;
  max-height: 300px;
  field-sizing: content;
  resize: none;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2); 
  color: ${({ theme }) => theme.colors.white100};
  border: 1px solid ${({ theme }) => theme.colors.gray500};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
    opacity: 1; 
  }
&:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.white100};
    -webkit-box-shadow: 0 0 0px 1000px #F8F9FA inset; 
    transition: background-color 5000s ease-in-out 0s;
  }
  ${({ theme }) =>
    css`
      ${theme.typography.hind500}
    `}
  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    padding: 15px 16px;
    min-width: 90%;
    max-width: 90%;
  }
`;
export const ContainerCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  color: aliceblue;
  width: 100%;
  color: ${({ theme }) => theme.colors.neutral100};
  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    width: 100%;

  }
`;
