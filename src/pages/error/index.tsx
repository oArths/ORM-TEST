import * as S from "./styles.tsx";
import { Carrossel } from "@components/carrossel/index.tsx";
import { Dino } from "@assets/index.tsx";
export default function ErrorPage() {
  return (
    <S.Body>
      <S.ContainerCarrossel>

      <Carrossel text="• SUPORTEㅤDEㅤDOMINGO • SUPORTEㅤDEㅤDOMINGO SUPORTEㅤDEㅤDOMINGO • SUPORTEㅤDEㅤDOMINGO •" />
      </S.ContainerCarrossel>
      <S.Main>
        <S.ContainerView>
          <S.HeaderView>
            <S.Balls />
            <S.Balls />
            <S.Balls />
          </S.HeaderView>
          <S.TextView>
            <S.TextBody>
              <S.Title>404</S.Title>
              <S.SubTitle>Página não encontrada...</S.SubTitle>
            </S.TextBody>
          </S.TextView>
        </S.ContainerView>
        <S.DinoImage src={Dino} />
      </S.Main>
    </S.Body>
  );
}
