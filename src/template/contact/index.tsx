import * as S from "./styles.tsx";
import {
  ContactIllustration,
  ContactIllustrationBlack,
} from "../../assets/index.tsx";
import { useThemes } from "src/theme/useThema.tsx";
import { Form } from "@components/form/index.tsx";
export const Contact = () => {
  const { currentTheme, theme } = useThemes();
  return (
    <S.SectionContact>
      <S.ContainerContact>
        <Form />
        <S.ImageContainer>
          <S.imageIllustration
            src={
              theme === "light" ? ContactIllustration : ContactIllustrationBlack
            }
          />
        </S.ImageContainer>
      </S.ContainerContact>
    </S.SectionContact>
  );
};
