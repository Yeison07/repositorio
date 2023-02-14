import styled from "styled-components";
import { Color, Fonts } from "../../app/shared/color";


export const ItemProject=styled.div`
    display:grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(1,1fr);
    row-gap: 1em;
    column-gap: 1em;
    margin-bottom: 5em;
    

    & img{
        width: 700px;
        grid-row: 1 / 2;

        &:hover{
            transform: rotateZ(10deg);
            
        }
    }

    & p{
        grid-row: 1;
    }
   
`

export const ProjectDescription=styled.div`
    background-color: ${Color.primary};
    padding: 1em 1em 1em 3em;
    width: 80%;
    color: ${Color.text_primary};
    border-radius: 0.5em;
    top: 4em;
    right: 6em;
    position: relative;
    & p {
        font-size: ${Fonts.FONT_SIZE_SMALL}px;
        }
`

export const VisitSitieButton=styled.button`
    border: 3px solid ${Color.secondary};
    border-radius: 0.2em;
    background: none;
    color: ${Color.text_primary};
    width: 40%;
    height: 80px;
    grid-row: 2;
    grid-column: 2;
    margin-top: 20%;
    margin-left: 12%;
    font-size: ${Fonts.FONT_SIZE_NORMAL}px;
    cursor: pointer;

    &:hover{
        background-color: ${Color.secondary};
        color: ${Color.text_primary};
        border-color: #fff;
    }
`

