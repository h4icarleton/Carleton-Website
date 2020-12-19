import React from 'react';
import SliderContainer from '../components/SliderContainer'
import MemberProfile from '../components/MemberProfile'
import MemberProfileContainer from '../components/MemberProfileContainer'
import './pages.css';
import BigProfiles from '../components/BigProfiles';

const OurTeam = () => {
  return(
    <div className="background" style={{flexDirection:'column', overflowY:'scroll', overflowX:'hidden'}}>
      <div style={{height:'40vh', marginTop: '1200px', width:'100%', marginBottom:'auto'}}>
        <SliderContainer slides={BigProfiles} autoPlay={5}/>
      </div>
      <div style={{marginTop:'200px', marginBottom:'200px', alignItems:'center', display:'flex', justifyContent:'space-bewteen', flexDirection:'column'}}>
        <MemberProfileContainer>
          {
            <MemberProfile 
              fullName='PJ Sangvong' 
              position='Developer?' 
              classYear='2023' 
              imgPath='/images/profilePictures/PJProfile.jpg' 
              email='sangvongp@carleton.edu' 
              linkedinProfileUrl='https://www.linkedin.com/in/sangvongp'
            />
          }
          {
            <MemberProfile 
              fullName='Dummy A' 
              position='being a dummy' 
              classYear='0000' 
              imgPath='/images/profilePictures/dummy-profile.jpeg' 
              email='dummy@gmail.com' 
              linkedinProfileUrl='https://www.linkedin.com/school/carleton-college/'
            />
          }
          {
            <MemberProfile 
              fullName='Dummy B' 
              position='who uses email?' 
              classYear='0000' 
              imgPath='/images/profilePictures/dummy-profile.jpeg' 
              linkedinProfileUrl='https://www.linkedin.com/school/carleton-college/'
            />
          }
          {
            <MemberProfile 
              fullName='Dummy C' 
              position='what is linkedin?' 
              classYear='0000' 
              imgPath='/images/profilePictures/dummy-profile.jpeg' 
              email='dummy@gmail.com' 
            />
          }
        </MemberProfileContainer>
        <MemberProfileContainer>
          {
            <MemberProfile 
              fullName='Dummy D' 
              position='new container' 
              classYear='0000' 
              imgPath='/images/profilePictures/dummy-profile.jpeg' 
              email='dummy@gmail.com' 
            />
          }
        </MemberProfileContainer>
      </div>
    </div>);
  
}

export default OurTeam;
