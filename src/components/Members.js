import React from "react";
import MemberProfile from "../components/MemberProfile";
import MemberProfileContainer from "../components/MemberProfileContainer";
import "../components/Slides.css";

/**
 *
 * @param props {team, status}
 */
// want to return MemberProfile
const Members = (props) => {
  const isListOpen = props.status;
  const isMemberArray = [];
  members.map((person) => {
    if (props.shortTeam === person.team) {
      return isMemberArray.push(true);
    } else {
      return isMemberArray.push(false);
    }
  });

  return (
    <MemberProfileContainer>
      {members.map((person, index) => {
        return (
          isListOpen &&
          isMemberArray[index] && (
            <MemberProfile
              key={person.fullName}
              fullName={person.fullName}
              position={person.position}
              classYear={person.classYear}
              imgPath={person.imgPath}
              email={person.email}
              linkedinProfileUrl={person.linkedinProfileUrl}
            />
          )
        );
      })}
    </MemberProfileContainer>
  );
};

const members = [
  {
    fullName: "Aishwarya Varma",
    position: "Founder and Product Manager",
    team: "Directors",
    classYear: "2023",
    imgPath: "/images/profilePictures/AishwaryaProfile.JPG",
    email: "varmaa@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/aishwaryavarma01/",
  },
  {
    fullName: "Etienne Richart",
    position: "Engineering Lead",
    team: "Directors",
    classYear: "2023",
    imgPath: "/images/profilePictures/EtienneProfile.jpg",
    email: "richarte@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/etiennerichart/",
  },
  {
    fullName: "Maya Murphy",
    position: "People and Collaboration Lead",
    team: "Directors",
    classYear: "2022",
    imgPath: "images/profilePictures/MayaProfile.jpg",
    email: "murphym2@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/maya-and-tech",
  },
  {
    fullName: "PJ Sangvong",
    position: "Developer",
    team: "Dev",
    classYear: "2023",
    imgPath: "/images/profilePictures/PJProfile.jpg",
    email: "sangvongp@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/sangvongp",
  },
  {
    fullName: "Maya Murphy",
    position: "Developer",
    team: "Dev",
    classYear: "2022",
    imgPath: "/images/profilePictures/MayaProfile.jpg",
    email: "murphym2@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/maya-and-tech",
  },
  {
    fullName: "Etienne Richart",
    position: "Developer",
    team: "Dev",
    classYear: "2023",
    imgPath: "/images/profilePictures/EtienneProfile.jpg",
    email: "richarte@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/etiennerichart/",
  },
  {
    fullName: "PJ Sangvong",
    position: "UI Designer",
    team: "Design-User",
    classYear: "2023",
    imgPath: "/images/profilePictures/PJProfile.jpg",
    email: "sangvongp@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/sangvongp",
  },
  {
    fullName: "Aishwarya Varma",
    position: "Recruitment Lead",
    team: "Social-Marketing",
    classYear: "2022",
    imgPath: "/images/profilePictures/AishwaryaProfile.JPG",
    email: "varmaa@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/aishwaryavarma01/",
  },
  {
    fullName: "Aishwarya Varma",
    positon: "Founder",
    team: "Admin",
    classYear: "2023",
    imgPath: "/images/profilePictures/dummy-profile.jpeg",
    email: "varmaa@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/school/carleton-college/",
  },
];
export default Members;
