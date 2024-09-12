import styled, { css } from "styled-components";
interface IConatiner{
  $width: string;
  $height: string;


}
interface IButton {
  $minfontsize: string;
  $idealfontsize: string;
  $maxfontsize: string;
  $hovercolor: string;
  $backgroundcolor: string;
}

export const Container = styled.div<IConatiner>`
  width: ${({$width}) => ($width)};
  height: ${({$height}) => ($height)};
  text-decoration: none;
`;
export const Button = styled.button<IButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${({ $minfontsize, $idealfontsize, $maxfontsize }) =>
    `clamp(${$minfontsize}, ${$idealfontsize}, ${$maxfontsize})`};
  gap: 5px;
  width: 100%;
  height:100%;
  border-radius: 2px;
  background-color: ${({$backgroundcolor}) => ($backgroundcolor)};
  color: ${({ theme }) => theme.colors.white900};
  ${({ theme }) =>
    css`
      ${theme.typography.archivo700}
    `}
    &:hover{
      background-color:${({$hovercolor}) => ($hovercolor)} ;
    }
`;
