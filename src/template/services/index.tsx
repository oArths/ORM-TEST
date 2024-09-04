import * as S from "./styles.tsx";
import * as I from "lucide-react";
import { useThemes } from "../../theme/useThema.tsx";
import { useState } from "react";

export const Services = () => {
  const { currentTheme, theme } = useThemes();
  const data = [
    {
      id: '1',
      type: true,
      title: "WorkShop",
      iconName: "Presentation",
      textBody:
        "Conheça nossos serviços, nossa história e o nosso ecossistema. Conheça nossos serviços, nossa história e o nosso ecossistema.Conheça nossos serviços, nossa história e o nosso ecossistema.",
    },
    {
      id: '2',
      type: false,
      title: "Eventos Culturais",
      iconName: "Leaf",
      textBody:
        "Conheça nossos serviços, nossa história e o nosso ecossistema. Conheça nossos serviços, nossa história e o nosso ecossistema.Conheça nossos serviços, nossa história e o nosso ecossistema.",
    },
    {
      id: '3',
      type: true,
      title: "Parcerias",
      iconName: "Handshake",
      textBody:
        "Conheça nossos serviços, nossa história e o nosso ecossistema. Conheça nossos serviços, nossa história e o nosso ecossistema.Conheça nossos serviços, nossa história e o nosso ecossistema.",
    },
    {
      id: '4',
      type: false,
      title: "Apadrinhamento",
      iconName: "HandHeart",
      textBody:
        "Conheça nossos serviços, nossa história e o nosso ecossistema. Conheça nossos serviços, nossa história e o nosso ecossistema.Conheça nossos serviços, nossa história e o nosso ecossistema.",
    },
    {
      id: '5',
      type: true,
      title: "Lorem Lorem",
      iconName: "Trophy",
      textBody:
        "Conheça nossos serviços, nossa história e o nosso ecossistema. Conheça nossos serviços, nossa história e o nosso ecossistema.Conheça nossos serviços, nossa história e o nosso ecossistema.",
    },
    {
      id: '6',
      type: false,
      title: "Lorem Lorem",
      iconName: "Coffee",
      textBody:"Conheça nossos serviços, nossa história e o nosso ecossistema. Conheça nossos serviços, nossa história e o nosso ecossistema.Conheça nossos serviços, nossa história e o nosso ecossistema.",
    },
  ];
  const [visibleTextBodies, setVisibleTextBodies] = useState({});

  const handleIconClick = (id) => {
    setVisibleTextBodies((prevState) => ({
      ...prevState,
      [id]: !prevState[id], 
    }));
  };
  return (
    <S.Section>
      <S.ServicesHeader >
        <S.Title>
          <S.bar />
          SERVIÇOS DA SUPORTE
        </S.Title>
        <S.subTitle>Serviços ofertados</S.subTitle>
        <S.TextBody>
          Conheça nossos serviços, nossa história e o nosso ecossistema. Conheça
          nossos serviços, nossa história e o nosso ecossistema. Conheça nossos
          serviços, nossa história e o nosso ecossistema.
        </S.TextBody>
      </S.ServicesHeader>
      <S.ServicesContainer>
        {data &&
          data.map((Data, index) => {
            const IconComponent = I[Data.iconName];
           
            const isEvenRow = Math.floor(index / 2) % 2 === 0;
            const isOddItem = index % 2 !== 0;
            const iconColor = isEvenRow
                ? isOddItem
                  ? currentTheme.colors.blue500
                  : currentTheme.colors.blue900
                : isOddItem
                ? currentTheme.colors.blue900
                : currentTheme.colors.blue500;
            const backgroundColor =
              isEvenRow
                ? isOddItem
                  ? false
                  : true
                : isOddItem
                ? true
                : false;

            return (
              <>
                <S.cellServices id={Data.id} key={index} $CurrentTheme={theme} onClick={() => handleIconClick(Data.id)}>
                 <S.TitleWarp>
                  <S.TitleCard>
                    <S.ContainerIconBlack $color={backgroundColor}>
                      {IconComponent && (
                        <IconComponent
                          size={32}
                          color={iconColor}
                        />
                      )}
                    </S.ContainerIconBlack>
                    {Data.title}
                      </S.TitleCard>
                    <S.IconWarp $isVisible={visibleTextBodies[Data.id]} >
                      <I.ChevronDown
                        size={32}
                        color={currentTheme.colors.neutral100}
                      />
                    </S.IconWarp>
                 </S.TitleWarp>
                  <div style={{overflow: 'hidden', padding: '0px 4px 4px 4px'}}>
                  <S.TextBodyWarp $isVisible={visibleTextBodies[Data.id]}>
                  <S.TextBody>{Data.textBody}</S.TextBody>
                  </S.TextBodyWarp>
                  </div>
                </S.cellServices>



                <S.cellServicesMobile id={Data.id} key={index} $CurrentTheme={theme} onClick={() => handleIconClick(Data.id)}>
                 <S.TitleWarp>
                  <S.TitleCard>
                    <S.ContainerIconBlack $color={Data.type}>
                      {IconComponent && (
                        <IconComponent
                          size={32}
                          color={Data.type === true ? currentTheme.colors.blue900 : currentTheme.colors.blue500 }
                        
                        />
                      )}
                    </S.ContainerIconBlack>
                    {Data.title}
                      </S.TitleCard>
                    <S.IconWarp $isVisible={visibleTextBodies[Data.id]} >
                      <I.ChevronDown
                        size={32}
                        color={currentTheme.colors.neutral100}
                      />
                    </S.IconWarp>
                 </S.TitleWarp>
                  <div style={{overflow: 'hidden', padding: '0px 4px 4px 4px'}}>
                  <S.TextBodyWarp $isVisible={visibleTextBodies[Data.id]}>
                  <S.TextBody>{Data.textBody}</S.TextBody>
                  </S.TextBodyWarp>
                  </div>
                </S.cellServicesMobile>
                </>
            );
          })}
      </S.ServicesContainer>
          <S.Id id='Ecossistema'></S.Id>
    </S.Section>
  );
};
