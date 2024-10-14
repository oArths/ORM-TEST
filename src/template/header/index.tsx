import * as S from "./styles.tsx";
import * as I from "lucide-react";
import {Sdd, SddDark} from '@assets/index.tsx'
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
    { link: "/", name: "em Breve..." },
    { link: "/", name: "em Breve..." },
    { link: "/", name: "em Breve..." },
  ];
  const SerData = [
    { link: "/", name: "Workshops" },
    { link: "/", name: "Desenvolvimento" },
    { link: "/", name: "Design" },
    { link: "/", name: "Parcerias" },
    { link: "/", name: "Educação" },
  ];

  return (
    <S.Header>
      <S.Logo
        alt="logo da empresa suporte de domingo"
        src={theme === "light" ? Sdd : SddDark}
      />
      <S.Nav>
        <S.Option href="#inicio">Início</S.Option>
        <S.Option href="#QuemSomos">Quem Somos</S.Option>
        <DropDownWithLink title="Serviços" data={SerData} />
        <DropDownWithLink title="Ecossistema" data={EcoData} />
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
        <S.LinkButton href="#Contato">
          <ButtonDefault
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
        </S.LinkButton>
      </S.ContainerButton>
      <Menu Close={() => setModal(!modal)} isOpen={modal} />
    </S.Header>
  );
}
