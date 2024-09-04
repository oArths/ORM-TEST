import { ButtonHTMLAttributes } from "react";
import * as S from "./styles.tsx";
import * as I from "lucide-react";

interface IButtonDefault extends ButtonHTMLAttributes<HTMLButtonElement> {
  left?: boolean;
  right?: boolean;
  color?: string;
  title: string;
  background: string;
  size?: number;
  width: string;
  height?: string;
  stroke?: number;
  href?: string;
  hovercolor?: string;
  minfontsize?: string;
  idealfontsize?: string;
  maxfontsize?: string;
  blank?: boolean;
}

export const ButtonDefault: React.FC<IButtonDefault> = ({
  left,
  right,
  color,
  title,
  size,
  stroke,
  background,
  width,
  onClick,
  height,
  href,
  blank,
  minfontsize,
  idealfontsize,
  maxfontsize,
  hovercolor,
}) => {
  return (
    <S.Container
      $width={width}
      href={href}
      target={!blank ? "_blank" : undefined}
    >
      <S.Button
        onClick={onClick}
        $hovercolor={hovercolor}
        $minfontsize={minfontsize}
        $idealfontsize={idealfontsize}
        $maxfontsize={maxfontsize}
        $backgroundcolor={background}
        $height={height}
      >
        {left && (
          <I.ArrowUpLeft color={color} strokeWidth={stroke} size={size} />
        )}
        {title}
        {right && (
          <I.ArrowUpRight color={color} strokeWidth={stroke} size={size} />
        )}
      </S.Button>
    </S.Container>
  );
};
