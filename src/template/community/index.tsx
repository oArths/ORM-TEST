import * as S from "./styles.tsx";
import { QR, Phone } from "@assets/index.tsx";
import { ButtonDefault } from "../../components/button/buttonDefault/index.tsx";
import { useThemes } from "../../theme/useThema.tsx";
export const Community = () => {
  const { currentTheme } = useThemes();

  return (
    <S.Section>
      <S.ContainerCommunity>
        <S.ContainerWarp>
          <S.Discord>
            <S.titleDiscord>
              <S.bar />
              NOSSAS COMUNIDADES
            </S.titleDiscord>
            <S.subTitleDiscord>Suporte de Domingo no Discord</S.subTitleDiscord>
            <S.TextBodyDiscord>
            Conecte-se com nossa comunidade no Discord e colabore com outros entusiastas da tecnologia, assim como você!!
            </S.TextBodyDiscord>
            <S.ButtonContainerLeft>
              <S.ButtonWarp
                href="https://discord.gg/Uyw4bFsK4u"
                target="_blank"
              >
                <ButtonDefault
                  title="Entrar"
                  width="100%"
                  right={true}
                  minfontsize="1.313rem"
                  idealfontsize="2.5vw"
                  maxfontsize="2rem"
                  height="100%"
                  stroke={3.5}
                  size={32}
                  background={currentTheme.colors.blue500}
                  hovercolor={currentTheme.colors.blue600}
                />
              </S.ButtonWarp>
            </S.ButtonContainerLeft>
          </S.Discord>
          <S.QrCode>
            <S.ContainerQrCode>
              <S.QR
                alt="imagem de um QR code para acessar o discord"
                src={QR}
              />
            </S.ContainerQrCode>
          </S.QrCode>
        </S.ContainerWarp>
        <S.ContainerWarpTwo>
          <S.WhatsApp>
            <S.PhoneImage
              alt="imagem De um celular com o WhatsApp do grupo da Suporte de Domingo"
              src={Phone}
            />
          </S.WhatsApp>
          <S.Community>
            <S.subTitleWhatsApp>
              Grupo & Comunidade no WhatsApp
            </S.subTitleWhatsApp>
            <S.TextBodyWhatsApp>
            Não perca nada: participe do nosso grupo no WhatsApp e receba atualizações em primeira mão e esteja sempre à frente com as últimas notícias.
            </S.TextBodyWhatsApp>
            <S.ButtonContainerRight>
              <S.ButtonWarp
                id="QuemSomos"
                href="https://chat.whatsapp.com/I6tE2UGQnsqFcPQ1zl8Hgl"
                target="_blank"
              >
                <ButtonDefault
                  title="Entrar"
                  width="100%"
                  left={true}
                  minfontsize="1.313rem"
                  idealfontsize="2.5vw"
                  maxfontsize="2rem"
                  height="100%"
                  stroke={3.5}
                  size={32}
                  background={currentTheme.colors.orange500}
                  hovercolor={currentTheme.colors.orange600}
                />
              </S.ButtonWarp>
            </S.ButtonContainerRight>
          </S.Community>
        </S.ContainerWarpTwo>
      </S.ContainerCommunity>
    </S.Section>
  );
};
