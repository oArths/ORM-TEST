import * as S from "./styles.tsx";
import { ButtonDefault } from "../../components/button/buttonDefault/index.tsx";
import { useThemes } from "../../theme/useThema.tsx";
import { sis, ilu, HomeMobile } from "@assets/index.tsx";

export const Home = () => {
  const { currentTheme } = useThemes();

  return (
    <S.Home >
      <S.BackImg  alt="imagem de fundo da seção home para desktop" src={ilu} />
      <S.BackImgMobile alt="imagem de fundo da seção home para mobile" src={HomeMobile} />
      <S.HomeWarp>
        <S.Container>
          <S.ContainerText>
            <S.centerText>
              <S.title>Construindo Pontes</S.title>
              <S.SubTitle>com a Tecnologia</S.SubTitle>
            </S.centerText>
            <S.bodyText>
              Conheça nossos serviços, nossa história e o nosso ecossistema.
              Conheça nossos serviços, nossa história e o nosso ecossistema.
              Conheça nossos serviços, nossa história e o nosso ecossistema.
              Conheça nossos serviços, nossa história e o nosso ecossistema.
            </S.bodyText>
            <S.ButtonWarp>
              <ButtonDefault
                title="Lorem"
                width="100%"
                minfontsize="1.25rem"
                idealfontsize="2.5vw"
                maxfontsize="1.563rem"
                height="55px"
                background={currentTheme.colors.blue900}
                hovercolor={currentTheme.colors.blue850}
              />
            </S.ButtonWarp>
          </S.ContainerText>
        </S.Container>
      </S.HomeWarp>
      <S.Img src={sis} />
    </S.Home>
  );
};
