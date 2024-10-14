import * as S from "./styles.tsx";
import data from "./servicesText.json";
import { CardsDeskTop } from "@components/cards/cardsDesktop/index.tsx";
import { CardsMobile } from "@components/cards/cardsMobile/index.tsx";
export const Services = () => {
  return (
    <S.Section>
      <S.ServicesHeader>
        <S.Title>
          <S.bar />
          SERVIÇOS DA SUPORTE
        </S.Title>
        <S.subTitleHeader>Serviços ofertados</S.subTitleHeader>
        <S.TextBody>
          Nossos serviços abrangem desde o design criativo e desenvolvimento
          técnico até a capacitação por meio de workshops e parcerias
          estratégicas. Oferecemos soluções completas e personalizadas, ajudando
          empresas e profissionais a alcançar seus objetivos com inovação,
          eficiência e qualidade. Seja para construir uma nova identidade
          visual, desenvolver um website ou aprimorar suas habilidades, estamos
          aqui para transformar ideias em realidade.
        </S.TextBody>
      </S.ServicesHeader>
      <S.ServicesContainerDesktop>
        <CardsDeskTop data={data} />
      </S.ServicesContainerDesktop>
      <S.ServicesContainerMobile>
        <CardsMobile data={data} />
      </S.ServicesContainerMobile>
      <S.Id id="Ecossistema"></S.Id>
    </S.Section>
  );
};
