export interface IItem {
    id: string,
    type: boolean,
    title:string
    iconName:string
    textBody:string
}
export interface ICardsDeskTop{
    data: IItem[]
}