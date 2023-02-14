import React from 'react';
import { ButtonS } from '../Button/style';
import { Title } from '../Text/style';
import {HeaderS } from './sytle';
import { Content } from '../Content/style';
export const Header = () => {
    return ( 
            <HeaderS>
                <Content>
            <Title><span>Hola soy Yeison,</span> te presento un breve recorrido de mi portafolio</Title>
            <ButtonS>CONTACTAME</ButtonS>
                </Content>
        </HeaderS>
     );
}
 
export default Header;