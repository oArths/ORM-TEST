import React from 'react'
import * as S from './styles.tsx' 


interface ICarrossel{
    text : string
}
export const Carrossel : React.FC<ICarrossel>= ({text})=>{
return(
    <S.Marquee>
        <S.MarqueeContent>{text}</S.MarqueeContent>
    </S.Marquee>
)
}

