import * as S from "./styles.tsx";
import * as I from "lucide-react";
import Logo from "../../assets/Sdd.svg";
import LogoDark from "../../assets/SddDark.svg";
import { useThemes } from "../../theme/useThema.tsx";
import { DropDownWithLink } from "../../components/dropdown/dropdownWithLink/index.tsx";
import ButtonTheme from "../../components/button/buttonTheme/index.tsx";
import { ButtonDefault } from "../../components/button/buttonDefault/index.tsx";
import { Menu } from "../menu/index.tsx";
import { useState } from "react";
export default function Header() {
  const { theme, currentTheme } = useThemes();
  const [modal, setModal] = useState(false);
  const CunData = [
    { link: "https://discord.gg/Uyw4bFsK4u", name: "Discord" },
    {
      link: "https://chat.whatsapp.com/I6tE2UGQnsqFcPQ1zl8Hgl",
      name: "WhatsApp",
    },
  ];
  const EcoData = [
    { link: "", name: "Nouveau" },
    { link: "", name: "Stack Overflow" },
    { link: "", name: "Education" },
  ];
  const SerData = [
    { link: "Workshops", name: "Workshops" },
    { link: "Eventos Culturais", name: "Eventos Culturais" },
    { link: "Apadrinhamento", name: "Apadrinhamento" },
    { link: "Parcerias", name: "Parcerias" },
  ];
  return (
    <S.Header>
      <S.Logo
        alt="logo da empresa suporte de domingo"
        src={theme === "light" ? Logo : LogoDark}
      />
      <S.Nav>
        <S.Option href="#inicio">Início</S.Option>
        <S.Option href="#QuemSomos">Quem Somos</S.Option>
        <S.Option href="#Sevicos">Serviços</S.Option>
        <S.Option href="#Ecossistema">Ecossistema</S.Option>
        <DropDownWithLink title="Comunidade" data={CunData} />
      </S.Nav>
      <S.ContainerMenu>
        <ButtonTheme />
        <S.MenuWrap onClick={() => setModal(!modal)}>
          <I.Menu size={32} color={currentTheme.colors.neutral100} />
        </S.MenuWrap>
      </S.ContainerMenu>
      <S.ContainerButton>
        <ButtonTheme />

        <ButtonDefault
          blank={true}
          href="#Contato"
          title="Contato"
          right={true}
          stroke={1.98}
          minfontsize="1rem"
          idealfontsize="2.5vw"
          maxfontsize="1.25rem"
          background={currentTheme.colors.orange500}
          hovercolor={currentTheme.colors.orange600}
          size={20}
          width="143px"
          height="41px"
        />
      </S.ContainerButton>
      <Menu Close={() => setModal(!modal)} isOpen={modal} />
    </S.Header>
  );
}
