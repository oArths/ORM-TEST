import * as S from "./styles.tsx";
import { Logo } from "../../assets/index.tsx";
export const InfoGraph = () => {
  return (
    <S.GraphWarp>
      <S.Container>
        <S.Green>
          <S.Container>
            <S.Yellow>
              <S.Container>
                <S.Blue>
                  <S.Container>
                    <S.Red>
                      <S.Container>
                        <S.Logo>
                          <S.LogoImage alt="logo da suporte de domingo dentro de um grafico" src={Logo} />
                        </S.Logo>
                      </S.Container>
                    </S.Red>
                    <S.ContainerBarRed>
                      <S.ContainerText>
                        <S.Title>Education Focus</S.Title>
                        <S.SubTitle>
                          Conheça nossos serviços, nossa história e o nosso
                          ecossistema. Conheça nossos
                        </S.SubTitle>
                      </S.ContainerText>
                      <S.BarRightRed>
                        <S.NumberLeft>01</S.NumberLeft>
                      </S.BarRightRed>
                    </S.ContainerBarRed>
                  </S.Container>
                </S.Blue>
                <S.ContainerBarBlue>
                  <S.ContainerText>
                    <S.Title>Education Focus</S.Title>
                    <S.SubTitle>
                      Conheça nossos serviços, nossa história e o nosso
                      ecossistema. Conheça nossos
                    </S.SubTitle>
                  </S.ContainerText>
                  <S.BarRightBlue>
                    <S.NumberLeft>02</S.NumberLeft>
                  </S.BarRightBlue>
                </S.ContainerBarBlue>
              </S.Container>
            </S.Yellow>
            <S.ContainerBarYellow>
              <S.BarLeftYellow>
                <S.NumberRight>03</S.NumberRight>
              </S.BarLeftYellow>
              <S.ContainerText>
                <S.Title>Venda de Serviços</S.Title>
                <S.SubTitle>
                  Conheça nossos serviços, nossa história e o nosso ecossistema.
                  Conheça nossos
                </S.SubTitle>
              </S.ContainerText>
            </S.ContainerBarYellow>
          </S.Container>
        </S.Green>
        <S.ContainerBar>
          <S.BarLeft>
            <S.NumberRight>04</S.NumberRight>
          </S.BarLeft>
          <S.ContainerText>
            <S.Title>Comunidade do discord</S.Title>
            <S.SubTitle>
              Conheça nossos serviços, nossa história e o nosso ecossistema.
              Conheça nossos
            </S.SubTitle>
          </S.ContainerText>
        </S.ContainerBar>
      </S.Container>
      <S.ContainerMobile>
        <S.ImageBackGound>
          <S.TextWarpMobile>
            <S.ContainerText>
              <S.Title>1. Serviços Sociais</S.Title>
              <S.SubTitle>
                Conheça nossos serviços, nossa história e o nosso ecossistema.
                Conheça nossos
              </S.SubTitle>
            </S.ContainerText>
            <S.ContainerText>
              <S.Title>2. Education Focus</S.Title>
              <S.SubTitle>
                Conheça nossos serviços, nossa história e o nosso ecossistema.
                Conheça nossos
              </S.SubTitle>
            </S.ContainerText>
          </S.TextWarpMobile>
          <S.TextWarpMobile>
            <S.ContainerTextPosition>
              <S.Title>3. Venda de Serviços</S.Title>
              <S.SubTitle>
                Conheça nossos serviços, nossa história e o nosso ecossistema.
                Conheça nossos
              </S.SubTitle>
            </S.ContainerTextPosition>
            <S.ContainerTextPosition>
              <S.Title>4. Comunidade do discord</S.Title>
              <S.SubTitle>
                Conheça nossos serviços, nossa história e o nosso ecossistema.
                Conheça nossos
              </S.SubTitle>
            </S.ContainerTextPosition>
          </S.TextWarpMobile>
          
        </S.ImageBackGound>
      </S.ContainerMobile>
    </S.GraphWarp>
  );
};
