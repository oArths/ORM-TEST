import * as S from "./styles.tsx";
import { ButtonDefault } from "@components/button/buttonDefault/index.tsx";
import { useThemes } from "../../theme/useThema.tsx";
import {
  sis,
  beaded,
  beanie,
  jacket,
  purpleGirl,
  longHair,
} from "@assets/index.tsx";

export const Home = () => {
  const { currentTheme } = useThemes();

  return (
    <S.Home>
      <S.HomeWarp>
        <S.Container>
          <S.WarpPerson>
            <S.Person01 src={beanie} alt="personagem de background" />
            <S.Person02 src={purpleGirl} alt="personagem de background" />
            <S.Person02Mobile src={jacket} alt="personagem de background" />
          </S.WarpPerson>
          <S.ContainerText>
            <S.centerText>
              <S.title>Construindo Pontes</S.title>
              <S.SubTitle>com a Tecnologia</S.SubTitle>
            </S.centerText>
            <S.bodyText>
              Conheça nossos serviços, nossa história e o nosso ecossistema.
              Conheça nossos serviços, nossa história e o nosso ecossistema.
            </S.bodyText>
            <S.ButtonWarp>
              <ButtonDefault
                title="Lorem"
                width="100%"
                minfontsize="1.25rem"
                idealfontsize="2.1vw"
                maxfontsize="1.563rem"
                height="100%"
                background={currentTheme.colors.blue900}
                hovercolor={currentTheme.colors.blue850}
              />
            </S.ButtonWarp>
          </S.ContainerText>
          <S.WarpPerson>
            <S.Person03Mobile src={purpleGirl} alt="personagem de background" />
            <S.Person03 src={jacket} alt="personagem de background" />
            <S.Person04 src={longHair} alt="personagem de background" />
            <S.Person05 src={beaded} alt="personagem de background" />
          </S.WarpPerson>
        </S.Container>
      </S.HomeWarp>
      <S.Img src={sis} alt="imagem de uma onde que complementa o background" />
    </S.Home>
  );
};
