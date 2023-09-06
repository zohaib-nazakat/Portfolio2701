import React from 'react'
import '../About me/Aboutme.css'
import aboutImg from '../../../images/aboutme.jpg';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

const Aboutme = () => {
  return (
        <>
            <section id='aboutMe'>
                <h1 className='aboutHeading'>About Me</h1>
                <div className="aboutmeContent">
                <div className="aboutText">
                    <span className="aboutTitle">UI/UX Designer and Web Developer</span>
                    <div className="aboutTextPara">Hello, I'm <span className="aboutName">Muhammad Zohaib</span> I have completed My Bachelor's in Computer Science From PUJC with Strong Academic Achivements. I'm also fully Proficient in <span className="aboutHighlight">Website Designing and Development.</span> Moreover, I can Design Landing Pages in Short Period of Time.</div>
                    <button className="aboutBtn"><span className="aboutBtnIcon"><SimCardDownloadIcon/> Download CV</span></button>
                </div>
                
                <img src={aboutImg} alt="About Picture"  className='aboutImg' srcset="" />
                </div>
               
            </section>
        </>
    )
}

export default Aboutme;