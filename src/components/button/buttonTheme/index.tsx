import { useThemes } from "../../../theme/useThema.tsx";
import * as S from "./styles.tsx";
import * as I from "lucide-react";

export default function ButtonTheme() {

  const { theme, toggleTheme, currentTheme } = useThemes();
  return (
    <S.Main   onClick={toggleTheme}>
      {theme === 'light' ? (
          <I.Sun  size={24} color={currentTheme.colors.orange500} />
        ) : (
          <I.Moon size={24} color={currentTheme.colors.white900} />
      )}
    </S.Main>
  );
}
