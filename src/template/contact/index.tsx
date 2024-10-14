import * as S from "./styles.tsx";
import { ContactIllustration } from "../../assets/index.tsx";
import { Form } from "@components/form/index.tsx";
export const Contact = () => {
return (
    <S.SectionContact id="Contato">
      <S.TitleWarp>

       <S.ServicesContact >
        <S.Title>
          <S.bar />
          CONTATO
        </S.Title>
        <S.subTitle>Entre em contato com a gente :)</S.subTitle>
        <S.TextBody>
        Alguma dúvida, parceria ou deseja nos conhecer melhor? Manda uma mensagem!
        </S.TextBody>
      </S.ServicesContact>
      </S.TitleWarp>
      <S.ContainerContact>
        
        <Form />
        <S.ImageContainer>
          <S.imageIllustration
            alt="Ilustração de uma pessoa usando o computador"
            src={ContactIllustration}
          />
        </S.ImageContainer>
      </S.ContainerContact>
    </S.SectionContact>
  );
};
