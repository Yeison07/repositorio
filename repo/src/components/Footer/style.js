import { Color } from '../../app/shared/color'
import styled from 'styled-components'

export const FooterS=styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    font-family: "Oswald", sans-serif;
    background-color: ${Color.background_dark};
    color: ${Color.text_primary};
   height: 450px;
    & div p{
        font-family: "Oswald", sans-serif;
        font-size: 5em;
    }

    & div{
        display: flex;
        align-items: center;
    }

    & div > img{
        margin: 0em 1em;

    }

    & div > img:hover{
        opacity: 50%;
    }

    hr{
        width: 100%;
        border-style: none;
border-top-style: dotted;
border-width: 3px;
    }
`
export const CopyText=styled.p`
    width: 100%;
    font-size: 15px;
    font-family: 'Roboto';
    text-align:center;
    align-self: flex-end;
    `

