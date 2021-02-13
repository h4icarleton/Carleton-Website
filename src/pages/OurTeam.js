import React from 'react';
import SliderContainer from '../components/SliderContainer'
import './pages.css';
import BigProfiles from '../components/BigProfiles';
import Dropdown from '../components/Dropdown.js'

const OurTeam = () => {
  return(
    <>
    <div className = "our-team-background"></div>
    <div id="ourteam-scroll" style={{flexDirection:'column', overflowY:'scroll', marginTop:'12vh'}}>
      <div style={{ width:'100%', marginBottom:'auto', overflowX: 'hidden'}}>
        <SliderContainer slides={BigProfiles} autoPlay={3.5}/>
      </div>
      <div style={{marginTop:'40px', marginBottom:'60px', alignItems:'center', display:'flex', justifyContent:'space-bewteen', flexDirection:'column'}}>
        <Dropdown team="Directors && Leadership" shortTeam ="Directors" teamIndex="Directors"/>
        <Dropdown team="Development Team" shortTeam = 'Dev' teamIndex="Dev"/>
        <Dropdown team="Design && User Research Team" shortTeam = 'Design-User' teamIndex="Design-User"/>
        <Dropdown team="Code Review && Testing Team" shortTeam = 'Code-Testing' teamIndex="Code-Testing"/>
      </div>
    </div>
    </>);
} 

export default OurTeam;
