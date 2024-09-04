import * as S from "./styles.tsx";
import {
  ContactIllustration,
  ContactIllustrationBlack,
} from "../../assets/index.tsx";
import { useThemes } from "src/theme/useThema.tsx";
import { Form } from "@components/form/index.tsx";
export const Contact = () => {
  const { theme } = useThemes();
  return (
    <S.SectionContact>
      <S.ContainerContact>
        <Form />
        <S.ImageContainer>
          <S.imageIllustration
          alt="Ilustração de uma pessoa usando o computador"
            src={
              theme === "light" ? ContactIllustration : ContactIllustrationBlack
            }
          />
        </S.ImageContainer>
      </S.ContainerContact>
    </S.SectionContact>
  );
};
