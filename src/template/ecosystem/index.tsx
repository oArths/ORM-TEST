import { InfoGraph } from "@components/infograph/index.tsx";
import * as S from "./styles.tsx";
import { useThemes } from "../../theme/useThema.tsx";

export const Ecosystem = () => {
  const { theme } = useThemes();

  return (
    <S.SectionEco $CurrentTheme={theme}>
      <S.ServicesHeader>
        <S.Title>
          <S.bar />
          ECOSSISTEMA DA SUPORTE
        </S.Title>
        <S.subTitle>Empresa como um hub</S.subTitle>
        <S.TextBody>
          Somos um hub inovador que conecta tecnologia, educação e serviços,
          criando soluções personalizadas para empresas e capacitando
          indivíduos. Nosso objetivo é fomentar o crescimento sustentável, tanto
          no âmbito profissional quanto social, oferecendo uma plataforma onde
          negócios, pessoas e comunidades podem evoluir juntos.
        </S.TextBody>
      </S.ServicesHeader>
      <InfoGraph />
    </S.SectionEco>
  );
};
