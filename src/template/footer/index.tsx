import * as S from "./styles.tsx";
import * as I from "lucide-react";
import { ButtonDefault } from "@components/button/buttonDefault/index.tsx";
import { useThemes } from "src/theme/useThema.tsx";
import { Discord, Git, Insta, Link, WhatsApp } from "../../assets/index.tsx";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const NewLetter = z.object({
  email: z
    .string()
    .min(1, { message: "O email é obrigatorio" })
    .email({ message: "Email é obrigatório e deve ser válido" }),
});

type NewLetter = z.infer<typeof NewLetter>;

export const Footer = () => {
  const { currentTheme } = useThemes();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewLetter>({
    resolver: zodResolver(NewLetter),
  });

  function Send(data: NewLetter) {
    const templateParams = {
      email: data.email,
    };
    emailjs
      .send(
        "service_ky8wkph",
        "template_7htbi4h",
        templateParams,
        "vTcnOqeKlspsKk1rg"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADsO", response.status, response.text);
          reset();
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );
  }

  return (
    <S.Footer>
      <S.ContainerLogo>
        <S.Logo>SUPORTE DE DOMINGO</S.Logo>
      </S.ContainerLogo>
      <S.ContainerInfo>
        <S.ColumnContainer>
          <S.SectionWarpOne>
            <S.Column>
              <S.ContainerText>
                <S.Title>Explore</S.Title>
                <S.SubTitleLink href="#Sevicos">Nossos Serviços</S.SubTitleLink>
                <S.SubTitle>Parcerias</S.SubTitle>
              </S.ContainerText>
            </S.Column>
            <S.Column>
              <S.ContainerText>
                <S.Title>Sobre</S.Title>
                <S.SubTitleLink href="#QuemSomos">História</S.SubTitleLink>
                <S.SubTitleLink href="#Valores">Motivos & Valores</S.SubTitleLink>
                <S.SubTitleLink href="#Ecossistema">Empresa como Hub</S.SubTitleLink>
              </S.ContainerText>
            </S.Column>
            <S.Column>
              <S.ContainerText>
                <S.Title>Connect</S.Title>
                <S.SubTitleLink href="#Contato">Contato</S.SubTitleLink>
                <S.SubTitle>Contrate nossos devs</S.SubTitle>
              </S.ContainerText>
            </S.Column>
          </S.SectionWarpOne>

          <S.SectionWarpTow>
            <S.ContainerTextTow>
              <S.Title>Entre em Contato</S.Title>
              <S.SubTitleLink
                href="https://wa.me/5511949963686?text=Olá%2C%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços."
                target="_blank"
              >
                <S.WhatsApp alt="Icone do WhatsApp" src={WhatsApp} /> (11) 94996-3686
              </S.SubTitleLink>
              <S.SubTitleLink
                href="mailto:suportededomingo@outlook.com?subject=Solicitação%20de%20Informações&body=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços."
                target="_blank"
              >
                <I.Mail
                  style={{ marginRight: "5px" }}
                  size={15}
                  color={currentTheme.colors.gray1000}
                />{" "}
                suportededomingo@outlook.com
              </S.SubTitleLink>
            </S.ContainerTextTow>

            <S.ContainerTextTow>
              <S.Title>Nossas Redes & Comunidades</S.Title>
              <S.Icons>
                <S.LinkIcons
                  href="https://discord.gg/Uyw4bFsK4u"
                  target="_blank"
                >
                  <S.Icon alt="Icone do Discord" src={Discord} />
                </S.LinkIcons>
                <S.LinkIcons
                  href="https://github.com/orgs/suporte-de-domingo"
                  target="_blank"
                >
                  <S.Icon  alt="Icone do GitHub" src={Git} />
                </S.LinkIcons>
                <S.LinkIcons
                  href="https://www.instagram.com/suportededomingo/"
                  target="_blank"
                >
                  <S.Icon alt="Icone do instagram" src={Insta} />
                </S.LinkIcons>
                <S.LinkIcons
                  href="https://www.linkedin.com/company/suporte-de-domingo/"
                  target="_blank"
                >
                  <S.Icon   alt="Icone do linkedin"src={Link} />
                </S.LinkIcons>
              </S.Icons>
            </S.ContainerTextTow>
          </S.SectionWarpTow>
          <S.SectionWarpThree onSubmit={handleSubmit(Send)}>
            <S.ContainerText>
              <S.Title>Receba Atualizações</S.Title>
              <S.SubTitle>Se Increva na nossa NewsLetter.</S.SubTitle>
            </S.ContainerText>
            <S.ContainerText>
              <S.input {...register("email")} />
              <S.ErrorWarp>
                {errors.email && <S.Error>{errors.email.message}</S.Error>}
              </S.ErrorWarp>
            <S.ButtonWarp>
              <ButtonDefault
                title="Registrar-se"
                minfontsize="1rem"
                idealfontsize="0.833vw"
                maxfontsize="1rem"
                width="134px"
                height="35px"
                background={currentTheme.colors.blue900}
                hovercolor={currentTheme.colors.blue850}
                type="submit"
              />
            </S.ButtonWarp>
            </S.ContainerText>
          </S.SectionWarpThree>
          <S.SectionWarpFour>
            <S.ContainerTextFour>
              <S.Title>Explore</S.Title>
              <S.SubTitleLink href="#Sevicos">Nossos Serviços</S.SubTitleLink>
              <S.SubTitleLink href="#Contato">Contato</S.SubTitleLink>
              <S.SubTitleLink href="#QuemSomos">História</S.SubTitleLink>
              <S.SubTitleLink href="#Valores">Motivos & Valores</S.SubTitleLink>
              <S.SubTitleLink href="#Ecossistema">Empresa como Hub</S.SubTitleLink>
            </S.ContainerTextFour>
            <div>
              <S.Title>Nossas Redes & Comunidades</S.Title>
              <S.Icons>
                <S.LinkIcons
                  href="https://discord.gg/Uyw4bFsK4u"
                  target="_blank"
                >
                  <S.Icon alt="Icone do discord" src={Discord} />
                </S.LinkIcons>
                <S.LinkIcons
                  href="https://github.com/orgs/suporte-de-domingo"
                  target="_blank"
                >
                  <S.Icon alt="Icone do github" src={Git} />
                </S.LinkIcons>
                <S.LinkIcons
                  href="https://www.instagram.com/suportededomingo/"
                  target="_blank"
                >
                  <S.Icon alt="Icone do instagram" src={Insta} />
                </S.LinkIcons>
                <S.LinkIcons
                  href="https://www.linkedin.com/company/suporte-de-domingo/"
                  target="_blank"
                >
                  <S.Icon alt="Icone do linkedin" src={Link} />
                </S.LinkIcons>
              </S.Icons>
            </div>
          </S.SectionWarpFour>
        </S.ColumnContainer>
      </S.ContainerInfo>
      <S.ContainerReserved>
        <S.Reserved>
          <S.Bold>© 2024.</S.Bold>
          All Rights Reserved.{" "}
        </S.Reserved>
        <S.Reserved>
          Designed By <S.Bold>Suporte de Domingo</S.Bold>
        </S.Reserved>
      </S.ContainerReserved>
    </S.Footer>
  );
};
