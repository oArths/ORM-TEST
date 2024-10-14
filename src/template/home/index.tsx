import * as S from "./styles.tsx";
import { ButtonDefault } from "@components/button/buttonDefault/index.tsx";
import { Group } from "@assets/index.tsx";
export const Home = () => {
  return (
    <>
      <S.Home>
        <S.Container>
          <S.ContainerText>
            <S.centerText>
              <S.title>Construindo Pontes</S.title>
              <S.title>com a Tecnologia</S.title>
            </S.centerText>
            <S.bodyText>
              Mergulhe em nossos serviços, conheça nossa
              jornada e conecte-se ao nosso ecossistema.
            </S.bodyText>
            <ButtonDefault title="Ver Mais" width="40%" height="41px" background="#6C91C2" hovercolor="#7A8DAF" />
          </S.ContainerText>
        </S.Container>
        <S.Container>
          <S.Image src={Group}  alt="imagem de um grupo de pessoas dando as mãos"  />
        </S.Container>
      </S.Home>
      <S.IConn />
    </>
  );
};
