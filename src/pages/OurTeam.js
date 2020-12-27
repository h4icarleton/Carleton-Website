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
        </MemberProfileContainer>
      </div>
    </div>);

}

export default OurTeam;
