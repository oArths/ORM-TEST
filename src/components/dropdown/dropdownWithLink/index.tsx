import * as S from "./styles.tsx";
import * as I from "lucide-react";
import { useThemes } from "../../../theme/useThema.tsx";
interface IItem {
  link: string;
  name: string;
}

interface IDropDownWithLink {
  title: string;
  type?: boolean;
  data: IItem[];
}

export const DropDownWithLink: React.FC<IDropDownWithLink> = ({
  title,
  data,
  type,
}) => {
  const { theme, currentTheme } = useThemes();

  return (
    <S.Container>
      <S.title>
        {title}
        <S.WarpIcon>
          <I.ChevronDown
            color={
              theme
                ? currentTheme.colors.neutral100
                : currentTheme.colors.neutral900
            }
            size={20}
          />
        </S.WarpIcon>
      </S.title>
        <S.Block/>
      <S.visible>
        <S.OptionContainer>
          {data &&
            data.map((Data, index) => (
              <S.Option
              onClick={ Data.link === '/' ? ((e) => e.preventDefault()) : undefined}
              $color={theme}
                key={index}
                target="_blank"
                href={Data.link}
               
              >
                {Data.name}
                {!type && (
                  <S.WarpIconOption>

                  <I.ArrowUpRight
                    color={currentTheme.colors.neutral100}
                    strokeWidth={1}
                    size={20}
                    />
                    </S.WarpIconOption>
                  )}
              </S.Option>
            ))}
        </S.OptionContainer>
      </S.visible>
    </S.Container>
  );
};
