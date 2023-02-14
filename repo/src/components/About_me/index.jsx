import { Avatar } from "../avatar/style";
import { Content } from "../Content/style";
import { TextContent } from "../Text_content/style";
import { SubTitle, TextS } from "../Text/style";
import linkeIcon from "../../app/shared/icons/linkedin_button.png"
import cssIcon from "../../app/shared/icons/css_button.png"
import emailIcon from "../../app/shared/icons/email_me.png"
import jsIcon from "../../app/shared/icons/js_button.png"
import nodeIcon from "../../app/shared/icons/nodejs_button.png"
import javaIcon from "../../app/shared/icons/java_button.png"
import reactIcon from "../../app/shared/icons/react_button.png"
import { css } from "styled-components";
import { IconsList } from "../Icons/style";
import { Color } from "../../app/shared/color";
import { SectionS } from "../Section";
import { AboutMeLayout } from "./style";
const AboutMe = () => {
    return ( 
        <>
        <SectionS>
        <Content>
            <SubTitle color={Color.dark_primary}>Acerca de mi</SubTitle>
            <AboutMeLayout>
        <Avatar/>
            <TextContent width="50%">
            <TextS>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam perspiciatis facilis enim, voluptate unde impedit! Dolore illo, explicabo, commodi officiis voluptatem debitis fuga aspernatur mollitia enim in amet autem aperiam.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore expedita obcaecati, atque doloribus sed repellat provident quos facere accusantium ab. Pariatur animi nam quod ex, eius blanditiis velit fuga voluptatem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate modi id placeat! Sed, omnis laboriosam a, aspernatur reprehenderit soluta porro qui molestias voluptates in doloremque quae repellat praesentium, sunt incidunt!
            </TextS>
            </TextContent>
            <IconsList>
                <img src={reactIcon} alt=""  height={45} />
                <img src={jsIcon} alt=""  height={45} />
                <img src={javaIcon} alt=""  height={45} />
                <img src={linkeIcon} alt=""  height={45} />
                <img src={cssIcon} alt="" height={45} />
                <img src={nodeIcon} alt=""  height={45} />
            </IconsList>
        </AboutMeLayout>
        </Content>
        </SectionS>
        </>
     );
}
 
export default AboutMe;