import styled from "styled-components";
import { Color, Fonts } from "../../app/shared/color";

export const Title = styled.p`
    color: ${Color.background};
    font-size: ${Fonts.FONT_SIZE_BIG}px;
    width: 65%;
    
    & span{
        color: ${Color.secondary};
    }
`
export const SubTitle = styled.p`
    font-size: ${Fonts.FONT_SIZE_MEDIUM}px;
    font-weight: 500;
    color: ${props => props.color ? props.color : Color.background};
    letter-spacing: -1px;
    text-align: center;
`

export const TextS = styled.p`
    font-size: ${Fonts.FONT_SIZE_SMALL}px;
    color: #fff;
    text-align: center;
`