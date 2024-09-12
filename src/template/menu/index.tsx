import * as S from "./styles.tsx";
import Modal from "@components/modal/index.tsx";
import * as I from "lucide-react";
import { Discord, Git, Insta } from "../../assets/index.tsx";
import { useThemes } from "src/theme/useThema.tsx";

export const Menu = ({ isOpen, Close }) => {

    const {currentTheme} = useThemes()
  return (
    <Modal
      isOpen={isOpen}
      children={
        <S.Container>
          <S.ButtonWrap onClick={Close} >
          <I.X size={32} color={currentTheme.colors.white900} />
          </S.ButtonWrap>
          <S.ContainerNav>
            <S.OptionsWrap>
              <S.Options onClick={Close} href="#inicio">Início</S.Options>
              <S.Options  onClick={Close} href="#QuemSomos">Quem Somos</S.Options>
              <S.Options onClick={Close}  href="#Sevicos">Serviços</S.Options>
              <S.Options onClick={Close}  href="#Ecossistema">Ecossistema</S.Options>
              <S.Options onClick={Close}  href="#Sevicos">Comunidade</S.Options>
            </S.OptionsWrap>
          </S.ContainerNav>
          <S.ContainerInfos>
            <S.Title>ENTRE EM CONTATO</S.Title>
            <S.SubTitle>suportededomingo@outlook.com</S.SubTitle>
            <S.Icons>
            <S.LinkIcons
                href="https://github.com/orgs/suporte-de-domingo"
                target="_blank"
              >
                <S.Icon alt="Icone do github" src={Git} />

              </S.LinkIcons>
           
              <S.LinkIcons href="https://discord.gg/Uyw4bFsK4u" target="_blank">
                <S.Icon alt="Icone do Discord" src={Discord} />
              </S.LinkIcons>
              <S.LinkIcons
                href="https://www.instagram.com/suportededomingo/"
                target="_blank"
              >
                <S.Icon alt="Icone do instagram" src={Insta} />

              </S.LinkIcons>
            </S.Icons>
            <S.Reserved> © 2024. All Rights Reserved.</S.Reserved>
          </S.ContainerInfos>
        </S.Container>
      }
    />
  );
};
