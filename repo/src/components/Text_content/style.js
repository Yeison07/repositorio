import styled from "styled-components";
import { Color } from "../../app/shared/color";

export const TextContent=styled.div`
    display: flex;
    border-radius: 0.8em;
    background-color: ${Color.dark_primary};
    padding: 2em;
    width: ${props => props.width ? props.width : ""}
`