import * as S from './styles.tsx' 
import * as I from "lucide-react";
import { useThemes } from '../../../theme/useThema.tsx';
interface IItem {
    link: string;
    name: string;
  }
  
  interface IDropDownWithLink {
    title: string;
    type?: boolean
    data: IItem[];
  }

export const DropDownWithLink : React.FC<IDropDownWithLink> =({title,data , type}) =>{
        const {theme, currentTheme} = useThemes()

return(
    <S.Container>
        <S.title>{title} 
        <I.ChevronDown color={theme ? currentTheme.colors.neutral100 : currentTheme.colors.neutral900} size={20} />
        </S.title>
        <S.visible>
            <S.OptionConteiner >
        {data && data.map((Data,index)=>(
                <S.Option key={index} target="_blank" href={Data.link} >
                    {Data.name}
                    {!type && <I.ArrowUpRight color={currentTheme.colors.neutral100} strokeWidth={1} size={20} /> }
                    </S.Option>
            ))}
            </S.OptionConteiner>
        </S.visible>
    </S.Container>
)
}