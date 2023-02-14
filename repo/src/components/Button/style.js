import styled from "styled-components";
import { Color, Fonts } from "../../app/shared/color";

export const ButtonS=styled.button`
    width: 246px;
    height: 60px;
    background-color: ${Color.dark_primary};
    border: 3px ${Color.secondary} solid;
    border-radius: 10px;
    color: ${Color.secondary};
    font-size: ${Fonts.FONT_SIZE_SMALL}px;
    align-self: flex-end;

    &:hover{
        background-color: ${Color.secondary};
        color: ${Color.background};
        
    }
`