import * as S from "../style";
import * as I from "lucide-react";
import { useState } from "react";
import { ICardsDeskTop } from "../card.interface.tsx";
import { useThemes } from "../../../theme/useThema.tsx";
import { ButtonDefault } from "@components/button/buttonDefault/index.tsx";

export const CardsDeskTop: React.FC<ICardsDeskTop> = ({ data }) => {
  const { currentTheme, theme } = useThemes();
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

          const isEvenRow = Math.floor(index / 2) % 2 === 0;
          const isOddItem = index % 2 !== 0;
          const iconColor = isEvenRow
            ? isOddItem
              ? currentTheme.colors.blue500
              : currentTheme.colors.blue900
            : isOddItem
            ? currentTheme.colors.blue900
            : currentTheme.colors.blue500;
          const backgroundColor = isEvenRow
            ? isOddItem
              ? false
              : true
            : isOddItem
            ? true
            : false;

          return (
            <S.cellServicesMobile
              id={Data.id}
              key={`${index}-desktop`}
              $CurrentTheme={theme}
              onClick={() => handleIconClick(Data.id)}
            >
              <S.TitleWarp>
                <S.TitleCard>
                  <S.ContainerIconBlack $color={backgroundColor}>
                    {IconComponent && (
                      <IconComponent size={30} color={iconColor} />
                    )}
                  </S.ContainerIconBlack>
                  <S.ConatinerIconBlackTablet $color={!isOddItem}>
                    {IconComponent && (
                      <IconComponent
                        size={30}
                        color={
                          isOddItem
                            ? currentTheme.colors.blue500
                            : currentTheme.colors.blue900
                        }
                      />
                    )}
                  </S.ConatinerIconBlackTablet>
                  <S.TitleMobile>

                  {Data.title}
                  </S.TitleMobile>
                </S.TitleCard>
              </S.TitleWarp>
              <div style={{ overflow: "hidden", height: "100%" }}>
                <S.TextBodyWarp $isVisible={visibleTextBodies[Data.id]}>
                  <S.TextBodyCard>{Data.textBody}</S.TextBodyCard>
                  <S.WarpButtonTablet>
                    <ButtonDefault
                      width="200px"
                      height="45px"
                      background={
                        !isOddItem
                          ? currentTheme.colors.blue500
                          : currentTheme.colors.blue800
                      }
                      hovercolor={
                        !isOddItem
                          ? currentTheme.colors.blue400
                          : currentTheme.colors.blue850
                      }
                      title="Ver Mais"
                      right={true}
                      stroke={2.65}
                      size={24}
                    />
                  </S.WarpButtonTablet>
                  <S.WarpButton>
                    <ButtonDefault
                      width="200px"
                      height="45px"
                      background={
                        backgroundColor
                          ? currentTheme.colors.blue500
                          : currentTheme.colors.blue800
                      }
                      hovercolor={
                        backgroundColor
                          ? currentTheme.colors.blue400
                          : currentTheme.colors.blue850
                      }
                      title="Ver Mais"
                      right={true}
                      stroke={2.65}
                      size={24}
                    />
                  </S.WarpButton>
                </S.TextBodyWarp>
              </div>
            </S.cellServicesMobile>
          );
        })}
      <S.cellServicesMobile
        key={5}
        $CurrentTheme={theme}
        onClick={() => handleIconClick(5)}
      >
        <S.TitleWarp>
          <S.TitleCard>
            <S.ContainerIconBlack $color={true}>
              <I.Code size={32} color={currentTheme.colors.blue800} />
            </S.ContainerIconBlack>
            <S.ConatinerIconBlackTablet $color={true}>
              <I.Code size={32} color={currentTheme.colors.blue800} />
            </S.ConatinerIconBlackTablet>
            <S.WebTitleMobile>Desenvolvimento</S.WebTitleMobile>
            <S.WebTitle>Desenvolvimento: Web & Mobile</S.WebTitle>
          </S.TitleCard>
          <S.IconWarp $isVisible={visibleTextBodies[5]}>
            <I.ChevronDown size={32} color={currentTheme.colors.gray100} />
          </S.IconWarp>
        </S.TitleWarp>
        <div style={{ overflow: "hidden" }}>
          <S.TextBodyWarp $isVisible={visibleTextBodies[5]}>
            <S.TextBodyCard>
              Desenvolvimento de websites e aplicativos funcionais, modernos e
              responsivos. Com foco no desempenho, usabilidade e escalabilidade.
            </S.TextBodyCard>

            <ButtonDefault
              width="40%"
              height="45px"
              background={currentTheme.colors.blue500}
              hovercolor={currentTheme.colors.blue400}
              title="Ver Mais"
              right={true}
              stroke={2.65}
              size={24}
            />
          </S.TextBodyWarp>
        </div>
      </S.cellServicesMobile>
    </>
  );
};
