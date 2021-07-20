import React from 'react';
import Tittle from '../components/Tittle';
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';
import ServicesSection from '../components/ServicesSection';
import img11 from '../img/img11.png';
import img9 from '../img/img9.svg';
import img8 from '../img/img8.svg';


function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'React'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Python'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'C Language'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Bootstrap'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'HTML5'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'CSS3'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Java'} progress={'60%'} width={'60%'}/>
            </div>
            <Tittle title={'Project'} span={'Project'} />
            <div className="servives-container">
                <ServicesSection image={img11} title={'Web Development'} text={'Heart and Diabetes prediction'}/>
                <ServicesSection image={img8} title={'Python'} text={'Hospital Voice assistance'}/>
                <ServicesSection image={img9} title={'React'} text={'Update of Covid-19'}/>
            </div>
        </div>
    )
}

export default AboutPage;