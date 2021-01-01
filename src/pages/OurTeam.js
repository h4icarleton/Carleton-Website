import React from 'react';
import SliderContainer from '../components/SliderContainer'
import MemberProfile from '../components/MemberProfile'
import MemberProfileContainer from '../components/MemberProfileContainer'
import './pages.css';
import BigProfiles from '../components/BigProfiles';
import Dropdown from '../components/Dropdown.js'

const OurTeam = () => {
  return(
    <div style={{flexDirection:'column', overflowY:'scroll'}}>
      <div style={{ width:'100%', marginBottom:'auto'}}>
        <SliderContainer slides={BigProfiles} autoPlay={3.5}/>
      </div>
      <div style={{marginTop:'200px', marginBottom:'60px', alignItems:'center', display:'flex', justifyContent:'space-bewteen', flexDirection:'column'}}>
        <MemberProfileContainer>
          <Dropdown team="Development Team" teamIndex="Dev"/>
        </MemberProfileContainer>
        <MemberProfileContainer>
          <Dropdown team="Design && User Research Team" teamIndex="Design-User"/>
        </MemberProfileContainer>
        <MemberProfileContainer>
          <Dropdown team="Code Review && Testing Team" teamIndex="Code-Testing"/>
        </MemberProfileContainer>

      </div>
    </div>);
} // <MemberProfile fullName="Maya" position="Dev" classYear="2022" imgPath="/images/profilePictures/dummy-profile.jpeg" email="murphym2@carleton.edu" linkedinProfileUrl="https://www.linkedin.com/in/maya-murphy-56409a177/"/>

export default OurTeam;
