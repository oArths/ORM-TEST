import * as S from "../style";
import * as I from "lucide-react";
import { useState } from "react";
import { ICardsDeskTop } from "../card.interface.tsx";
import { useThemes } from "../../../theme/useThema.tsx";
import { ButtonDefault } from "@components/button/buttonDefault/index.tsx";

export const CardsMobile: React.FC<ICardsDeskTop> = ({ data }) => {
  const { currentTheme } = useThemes();
  const [visibleTextBodies, setVisibleTextBodies] = useState({});

  const handleIconClick = (id) => {
    setVisibleTextBodies((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <>
      {data &&
        data.map((Data, index) => {
          const IconComponent = I[Data.iconName];

          const Color = Data.type
            ? currentTheme.colors.blue900
            : currentTheme.colors.blue500;

          return (
            <S.Mobile
              key={`${index}-mobile`}
            >
              <S.TitleWarp
                id={Data.id}
                onClick={() => 
                  handleIconClick(Data.id)}
              >
                <S.TitleCard>
                  <S.ContainerIconBlack
                    $color={
                      Color === currentTheme.colors.blue900 ? true : false
                    }
                  >
                    {IconComponent && <IconComponent size={32} color={Color} />}
                  </S.ContainerIconBlack>
                  {Data.title}
                </S.TitleCard>
                <S.IconWarp $isVisible={visibleTextBodies[Data.id]}>
                  <I.ChevronDown
                    size={32}
                    color={currentTheme.colors.gray100}
                  />
                </S.IconWarp>
              </S.TitleWarp>
              <S.TextBodyWarp
                className={visibleTextBodies[Data.id] ? "open" : "closed"}
              >
                <S.TextBodyCard>{Data.textBody}</S.TextBodyCard>
                <ButtonDefault
                  width="200px"
                  height="45px"
                  background={
                    Color
                      ? currentTheme.colors.blue500
                      : currentTheme.colors.blue800
                  }
                  hovercolor={
                    Color
                      ? currentTheme.colors.blue400
                      : currentTheme.colors.blue850
                  }
                  title="Ver Mais"
                  right={true}
                  stroke={2.65}
                  size={24}
                />
              </S.TextBodyWarp>
            </S.Mobile>
          );
        })}
      <S.Mobile>
        <S.TitleWarp key={`${5}-mobile`} onClick={() => handleIconClick(5)}>
          <S.TitleCard>
            <S.ContainerIconBlack $color={true}>
              <I.Code size={32} color={currentTheme.colors.blue800} />
            </S.ContainerIconBlack>
            <S.WebTitleMobile>Desenvolvimento</S.WebTitleMobile>
            <S.WebTitle>Desenvolvimento: Web & Mobile</S.WebTitle>
          </S.TitleCard>
          <S.IconWarp $isVisible={visibleTextBodies[5]}>
            <I.ChevronDown size={32} color={currentTheme.colors.gray100} />
          </S.IconWarp>
        </S.TitleWarp>
        <S.TextBodyWarp className={visibleTextBodies[5] ? "open" : "closed"}>
          <S.TextBodyCard>
            Desenvolvimento de websites e aplicativos funcionais, modernos e
            responsivos. Com foco no desempenho, usabilidade e escalabilidade.
          </S.TextBodyCard>
          <ButtonDefault
            width="200px"
            height="45px"
            background={currentTheme.colors.blue500}
            hovercolor={currentTheme.colors.blue400}
            title="Ver Mais"
            right={true}
            stroke={2.65}
            size={24}
          />
        </S.TextBodyWarp>
      </S.Mobile>
    </>
  );
};
