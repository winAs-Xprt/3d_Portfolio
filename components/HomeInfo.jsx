import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
      <p className="font-medium sm:text-x1 text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-x1 sm:leadi8ng-snug text-center neo-brutalism-blue py-4 
        px-8 text-white mx-5 ">
            Hi, I am <span className="font-semibold">ASWIN</span> 👋
            <br/>
            A SoftWare Engineer From Chennai📍
            
        </h1>
    ),
    2: (
        <InfoBox 
        text="Worked With many Companies and Picked Up many Skills Along the way"
        link="/about"
        btnText="Learn More"
        />
    ),
    3: (
        <InfoBox 
        text="let Multiple Projects To Success Over THe Year, Curious About the impact? "
        link="/projects"
        btnText="Visit my Portfolio"
        />
    ),
    4: (
        <InfoBox 
        text="Need A Projects Done Or Looking For A Dev? I'm just a few Keystrokes away"
        link="/contact"
        btnText="Lets's Talk"
        />
    ),
}




const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
