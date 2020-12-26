import React from 'react';
import MemberProfile from '../components/MemberProfile';
import BigProfiles from '../components/BigProfiles';


const members = [
  <MemberProfile
    fullName='Maya Murphy'
    position='Project Lead of Development, Director of Engineering'
    team='Dev'
    classYear='2022'
    imgPath='/images/profilePictures/dummy-profile.jpeg'
    email='murphym2@carleton.edu'
    linkedinProfileUrl='https://www.linkedin.com/in/maya-murphy-56409a177/'
  />,
  <MemberProfile
    fullName='Henrie Friesen'
    positon='Developer'
    team='Dev'
    classYear='2023'
    imgPath='/images/profilePictures/dummy-profile.jpeg'
    email='fiesenh@carleton.edu'
    linkedinProfileUrl='https://www.linkedin.com/school/carleton-college/'
  />,
  <MemberProfile
    fullName='Zhixing Jiang'
    positon='Developer'
    team='Dev'
    classYear='2023'
    imgPath='/images/profilePictures/dummy-profile.jpeg'
    email='jiangz@carleton.edu'
    linkedinProfileUrl='https://www.linkedin.com/school/carleton-college/'
  />,
  <MemberProfile
    fullName='Juanito Zhang Yang'
    positon='Developer'
    team='Dev'
    classYear='2022'
    imgPath='/images/profilePictures/dummy-profile.jpeg'
    email='zhangyangj@carleton.edu'
    linkedinProfileUrl='https://www.linkedin.com/school/carleton-college/'
  />,
  <MemberProfile
    fullName='Quoc Nguyen'
    positon='Developer'
    team='Dev'
    classYear='2023'
    imgPath='/images/profilePictures/dummy-profile.jpeg'
    email='nguyenq2@carleton.edu'
    linkedinProfileUrl='https://www.linkedin.com/school/carleton-college/'
  />,
  <MemberProfile
    fullName='Kevin Chen'
    positon='Developer'
    team='Dev'
    classYear='2023'
    imgPath='/images/profilePictures/dummy-profile.jpeg'
    email='chenk4@carleton.edu'
    linkedinProfileUrl='https://www.linkedin.com/school/carleton-college/'
  />,
  <MemberProfile
    fullName='Tessa Newman-Heggie'
    positon='Project Lead of Design'
    team='Design-User'
    classYear='2021'
    imgPath='/images/profilePictures/dummy-profile.jpeg'
    email='newmant2@carleton.edu'
    linkedinProfileUrl='https://www.linkedin.com/school/carleton-college/'
  />,
  <MemberProfile
    fullName='Lydia Fick'
    positon='UI Designer'
    team='Design-User'
    classYear='2022'
    imgPath='/images/profilePictures/dummy-profile.jpeg'
    email='fickl@carleton.edu'
    linkedinProfileUrl='https://www.linkedin.com/school/carleton-college/'
  />,
  <MemberProfile
    fullName='Emily Litton'
    positon='UI Designer'
    team='Design-User'
    classYear='2023'
    imgPath='/images/profilePictures/dummy-profile.jpeg'
    email='littone@carleton.edu'
    linkedinProfileUrl='https://www.linkedin.com/school/carleton-college/'
  />,
  <MemberProfile
    fullName='James Marlin
    positon='UI Designer'
    team='Design-User'
    classYear='2023'
    imgPath='/images/profilePictures/dummy-profile.jpeg'
    email='marlinj@carleton.edu'
    linkedinProfileUrl='https://www.linkedin.com/school/carleton-college/'
  />,
  <MemberProfile
    fullName='William Dudarov'
    positon='UI Designer'
    team='Design-User'
    classYear='2023'
    imgPath='/images/profilePictures/dummy-profile.jpeg'
    email='dudarovw@carleton.edu'
    linkedinProfileUrl='https://www.linkedin.com/school/carleton-college/'
  />,
  <MemberProfile
    fullName='Starr Wang'
    positon='UI Designer'
    team='Design-User'
    classYear='2021'
    imgPath='/images/profilePictures/dummy-profile.jpeg'
    email='wangy3@carleton.edu'
    linkedinProfileUrl='https://www.linkedin.com/school/carleton-college/'
  />,
  <MemberProfile
    fullName='PJ Sangvong'
    position='UI Designer'
    team='Design'
    classYear='2023'
    imgPath='/images/profilePictures/PJProfile.jpg'
    email='sangvongp@carleton.edu'
    linkedinProfileUrl='https://www.linkedin.com/in/sangvongp'
  />,
  <MemberProfile
    fullName='Eric Odoom'
    positon='UX Designer'
    team='Design-User'
    classYear='2021'
    imgPath='/images/profilePictures/dummy-profile.jpeg'
    email='odoome@carleton.edu'
    linkedinProfileUrl='https://www.linkedin.com/school/carleton-college/'
  />,
  <MemberProfile
    fullName='Eliot Huh'
    positon='UX Designer'
    team='Design-User'
    classYear='2021'
    imgPath='/images/profilePictures/dummy-profile.jpeg'
    email='huhe@carleton.edu'
    linkedinProfileUrl='https://www.linkedin.com/school/carleton-college/'
  />,
  <MemberProfile
    fullName='Victor Huang'
    positon='Project Lead of Code Review'
    team='Code-Testing'
    classYear='2023'
    imgPath='/images/profilePictures/dummy-profile.jpeg'
    email='huangv2@carleton.edu'
    linkedinProfileUrl='https://www.linkedin.com/school/carleton-college/'
  />,
  <MemberProfile
    fullName='Shaw Qin'
    positon='Code Reviewer'
    team='Code-Testing'
    classYear='2022'
    imgPath='/images/profilePictures/dummy-profile.jpeg'
    email='qins@carleton.edu'
    linkedinProfileUrl='https://www.linkedin.com/school/carleton-college/'
  />,
  <MemberProfile
    fullName='Yasmeen Awad'
    positon='Project Lead of Testing'
    team='Code-Testing'
    classYear='2021'
    imgPath='/images/profilePictures/dummy-profile.jpeg'
    email='awady@carleton.edu'
    linkedinProfileUrl='https://www.linkedin.com/school/carleton-college/'
  />,
  <MemberProfile
    fullName='Ankit Sanghi'
    positon='Code Tester'
    team='Code-Testing'
    classYear='2021'
    imgPath='/images/profilePictures/dummy-profile.jpeg'
    email='sanghia@carleton.edu'
    linkedinProfileUrl='https://www.linkedin.com/school/carleton-college/'
  />,
  <MemberProfile
    fullName='Lita Theng'
    positon='Code Tester'
    team='Code-Testing'
    classYear='2023'
    imgPath='/images/profilePictures/dummy-profile.jpeg'
    email='thengl@carleton.edu'
    linkedinProfileUrl='https://www.linkedin.com/school/carleton-college/'
  />,
  <MemberProfile
    fullName='Aishwarya Varma'
    positon='Co-Founder'
    team='Admin'
    classYear='2023'
    imgPath='/images/profilePictures/dummy-profile.jpeg'
    email='varmaa@carleton.edu'
    linkedinProfileUrl='https://www.linkedin.com/school/carleton-college/'
  />,
  <MemberProfile
    fullName='Nicole Binder
    positon='Co-Founder'
    team='Admin'
    classYear='2021'
    imgPath='/images/profilePictures/dummy-profile.jpeg'
    email='bindern@carleton.edu'
    linkedinProfileUrl='https://www.linkedin.com/school/carleton-college/'
  />
];
