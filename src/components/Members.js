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
    position: "Founder",
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
    fullName: "Etienne Richart",
    position: "Engineering Lead",
    team: "Dev",
    classYear: "2023",
    imgPath: "/images/profilePictures/EtienneProfile.jpg",
    email: "richarte@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/etiennerichart/",
  },
  {
    fullName: "Aishwarya Varma",
    position: "Product Manager",
    team: "Dev",
    classYear: "2023",
    imgPath: "/images/profilePictures/AishwaryaProfile.JPG",
    email: "varmaa@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/aishwaryavarma01/",
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
    fullName: "Khalid Hussain",
    position: "Developer",
    team: "Dev",
    classYear: "2022",
    imgPath: "/images/profilePictures/KhalidProfile.jpg",
    email: "hussaink@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/khalid-hussain-029970176/",
  },
  {
    fullName: "Yusuf Ismail",
    position: "Developer",
    team: "Dev",
    classYear: "2024",
    imgPath: "/images/profilePictures/YusufProfile.jpg",
    email: "ismaily@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/yusuf-ismail/",
  },
  {
    fullName: "Kai Johnson",
    position: "Developer",
    team: "Dev",
    classYear: "2024",
    imgPath: "/images/profilePictures/KaiProfile.jpeg",
    email: "johnsonk4@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/kiara-johnson-35a583204/",
  },
  {
    fullName: "Darryl York III",
    position: "Developer",
    team: "Dev",
    classYear: "2024",
    imgPath: "/images/profilePictures/DarrylProfile.jpg",
    email: "yorkd@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/darrylyork3",
  },
  {
    fullName: "Valentina Guerrero Chala",
    position: "Developer",
    team: "Dev",
    classYear: "2024",
    imgPath: "/images/profilePictures/ValentinaProfile.png",
    email: "guerrerov@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/valentina-guerrero-chala/",
  },
  {
    fullName: "Aishwarya Varma",
    position: "Product Manager",
    team: "Design",
    classYear: "2023",
    imgPath: "/images/profilePictures/AishwaryaProfile.JPG",
    email: "varmaa@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/aishwaryavarma01/",
  },
  {
    fullName: "Tin Nguyen",
    position: "UIUX Designer",
    team: "Design",
    classYear: "2024",
    imgPath: "/images/profilePictures/TinProfile.jpg",
    email: "nguyent4@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/school/carleton-college/",
  },
  {
    fullName: "Lily Li",
    position: "UIUX Designer",
    team: "Design",
    classYear: "2023",
    imgPath: "/images/profilePictures/LilyProfile.png",
    email: "lil3@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/lily-li-26b062197/",
  },
  {
    fullName: "Aidan Roessler",
    position: "UIUX Designer",
    team: "Design",
    classYear: "2025",
    imgPath: "/images/profilePictures/AidanProfile.jpg",
    email: "roesslera@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/aidan-roessler-88b5a0217/",
  },
  {
    fullName: "Vanessa Heynes",
    position: "UIUX Designer",
    team: "Design",
    classYear: "2025",
    imgPath: "/images/profilePictures/VanessaProfile.jpeg",
    email: "heynesk@carleton.edu ",
    linkedinProfileUrl: "https://www.linkedin.com/school/carleton-college/",
  }
];
export default Members;
