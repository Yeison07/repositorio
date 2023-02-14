import { Color } from "../../app/shared/color";
import { Content } from "../Content/style";
import { SectionS } from "../Section";
import { SubTitle, Title } from "../Text/style";
import { TextContent } from "../Text_content/style";
import { ItemProject, ProjectDescription, VisitSitieButton } from "./style";
import piqImg from "../../app/shared/imgs/group1.png"
import colImg from "../../app/shared/imgs/group2.png"
const ProjectsList = () => {
    return ( <>
        <SectionS bg={Color.dark_primary}>
            <Content>
                <SubTitle color={Color.secondary}>Proyectos desarrollados</SubTitle>
        <ItemProject>
        <img src={piqImg} alt="" />
        <div>
            <SubTitle>Sitio web para venta de comida rápida</SubTitle>
            <ProjectDescription>
            <p>Aplicativo para un restaurante de comida rápida desarollado con JS, CSS puro, Spring y Thymeleaf con java en el backend</p>
            </ProjectDescription>
            <VisitSitieButton>Ir al sitio web</VisitSitieButton>
        </div>
        
        </ItemProject>
        <ItemProject>
        <img src={colImg} alt="Imagen sitio web ColombiaTour" />
        <div>
            <SubTitle>Sitio web para venta de comida rápida</SubTitle>
            <ProjectDescription>
            <p>Aplicativo para un restaurante de comida rápida desarollado con JS, CSS puro, Spring y Thymeleaf con java en el backend</p>
            </ProjectDescription>
        <VisitSitieButton>Visitar</VisitSitieButton>
        </div>
            
        </ItemProject>
        <ItemProject>
        <img src={piqImg} alt="" />
        <div>
            <SubTitle>Sitio web para venta de comida rápida</SubTitle>
            <ProjectDescription>
            <p>Aplicativo para un restaurante de comida rápida desarollado con JS, CSS puro, Spring y Thymeleaf con java en el backend</p>
            </ProjectDescription>
        <VisitSitieButton>Visitar</VisitSitieButton>
        </div>
            
        </ItemProject>
            </Content>
        </SectionS>
        
            
    </> );
}
 
export default ProjectsList;