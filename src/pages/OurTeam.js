import React from 'react';
import SliderContainer from '../components/SliderContainer'
import MemberProfile from '../components/MemberProfile'
import MemberProfileContainer from '../components/MemberProfileContainer'
import './pages.css';
import BigProfiles from '../components/BigProfiles';

// const DevTeamArray = [];
// const DevTeamArray = [];
// const DevTeamArray = [];

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

        <MemberProfileContainer>
          <div className="DevTeam" style={{color: '#FFFFFF'}}>
            <h1> Development </h1>
          </div>
        </MemberProfileContainer>

        <MemberProfileContainer>
          <div className="Design-UserResearchTeam" style={{color: '#FFFFFF'}}>
            <h1> Design && User Research </h1>
          </div>
        </MemberProfileContainer>

        <MemberProfileContainer>
          <div className="CodeReview-TestingTeam" style={{color: '#FFFFFF'}}>
            <h1> Code Review && Testing </h1>
          </div>
        </MemberProfileContainer>
      </div>
    </div>);

}

export default OurTeam;
