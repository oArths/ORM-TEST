import * as S from "./styles.tsx";
import { ImageAboutUs } from "@assets/index.tsx";
export const AboutUs = () => {
  return (
    <S.Section>
      <S.IdSection>
        <S.ContainerAboutUs>
            <S.AboutUs>
              <S.Title>
                <S.bar />
                QUEM SOMOS
              </S.Title>
              <S.subTitle>Suporte de Domingo</S.subTitle>
              <S.WarpBodyText>
                <S.TextBody>
                  Somos uma iniciativa nascida da jornada de um periférico que
                  construiu sua carreira em TI com determinação e paixão. Nossa
                  missão é levar conhecimento e oportunidades às comunidades,
                  promovendo equidade e transparência. Acreditamos que todos
                  devem ter acesso às ferramentas de desenvolvimento e design
                  para transformar suas realidades.
                </S.TextBody>
                <S.TextBody>
                  Oferecemos diversos serviços que não apenas impulsionam
                  negócios e indivíduos, mas também geram recursos que
                  reinvestimos em nossa missão social. Nosso objetivo é criar um
                  ecossistema onde o conhecimento seja compartilhado e onde cada
                  pessoa tenha a chance de alcançar seu potencial máximo.
                  Junte-se a nós nessa jornada de transformação e faça parte de
                  uma comunidade que acredita no poder da tecnologia para mudar
                  vidas.
                </S.TextBody>
              </S.WarpBodyText>
            </S.AboutUs>
            <S.ImageContainer>
              <S.Image
                src={ImageAboutUs}
                alt="ilustração de grupo de pessoas"
                />
            </S.ImageContainer>
        </S.ContainerAboutUs>
        <div id="Sevicos"></div>
      </S.IdSection>
    </S.Section>
  );
};
