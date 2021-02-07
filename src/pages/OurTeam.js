import React from 'react';
import SliderContainer from '../components/SliderContainer'
import './pages.css';
import BigProfiles from '../components/BigProfiles';
import Dropdown from '../components/Dropdown.js'

const OurTeam = () => {
  return(
    <div style={{flexDirection:'column', overflowY:'scroll', marginTop:'12vh'}}>
      <div style={{ width:'100%', marginBottom:'auto', overflowX: 'hidden'}}>
        <SliderContainer slides={BigProfiles} autoPlay={3.5}/>
      </div>
      <div style={{marginTop:'40px', marginBottom:'60px', alignItems:'center', display:'flex', justifyContent:'space-bewteen', flexDirection:'column'}}>
        <Dropdown team="Development Team" shortTeam = 'Dev' teamIndex="Dev"/>
        <Dropdown team="Design && User Research Team" shortTeam = 'Design-User' teamIndex="Design-User"/>
        <Dropdown team="Code Review && Testing Team" shortTeam = 'Code-Testing' teamIndex="Code-Testing"/>
      </div>
    </div>);
} // <MemberProfile fullName="Maya" position="Dev" classYear="2022" imgPath="/images/profilePictures/dummy-profile.jpeg" email="murphym2@carleton.edu" linkedinProfileUrl="https://www.linkedin.com/in/maya-murphy-56409a177/"/>

export default OurTeam;
