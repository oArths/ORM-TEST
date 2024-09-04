import { InfoGraph } from '@components/infograph/index.tsx'
import * as S from './styles.tsx' 
import { useThemes } from "../../theme/useThema.tsx";

export  const Ecosystem =()=>{
    const { theme } = useThemes();

return(
    <S.SectionEco  $CurrentTheme={theme}>
    <S.ServicesHeader>
      <S.Title>
        <S.bar />
        ECOSSISTEMA DA SUPORTE
      </S.Title>
      <S.subTitle>Empresa como um hub</S.subTitle>
      <S.TextBody>
        Conheça nossos serviços, nossa história e o nosso ecossistema.
        Conheça nossos serviços, nossa história e o nosso ecossistema.
        Conheça nossos serviços, nossa história e o nosso ecossistema.
      </S.TextBody>
    </S.ServicesHeader>
    <InfoGraph />
    <S.ServicesContact id="Contato">
      <S.Title>
        <S.bar />
        CONTATO
      </S.Title>
      <S.subTitle>Entre em contato com a gente :)</S.subTitle>
      <S.TextBody>
        Conheça nossos serviços, nossa história e o nosso ecossistema.
        Conheça nossos serviços, nossa história e o nosso ecossistema.
        Conheça nossos serviços, nossa história e o nosso ecossistema.
      </S.TextBody>
    </S.ServicesContact>
  </S.SectionEco>
)
}