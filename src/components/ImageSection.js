import React from 'react';
import sona from '../img/sona.jpeg';



function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={sona} alt="" />
            </div>
            <div className="about-info">
                <h4>I am<span>Sonali Kumari</span></h4>
                <p className="about-text">
                    I am b.tech final year student.By nature I am very friendly and simple girl.Being a career oriented person.I want to achieve my goal as soon as possible to justify my talent.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: Sonali Kumari</p>
                        <p>: 22</p>
                        <p>: Indian</p>
                        <p>: English,Hindi</p>
                        <p>: Lohapatti,Raxaul(Bihar)</p>
                    </div>
                </div>
                <br/>
                <a className="btn"  target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1iDhkrF7vrQGOZkMwUF0aAncRpVxhHNMj/view?usp=sharing">Download CV</a>
            </div>
        </div>
    )
}

export default ImageSection;