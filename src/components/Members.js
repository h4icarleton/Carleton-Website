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
              projects={person.projects}
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
    position: "Executive Director",
    team: "Directors",
    classYear: "2023",
    projects: "Gen Connect, Isuroon",
    imgPath: "/images/profilePictures/AishwaryaProfile.JPG",
    email: "varmaa@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/aishwaryavarma01/",
  },
  {
    fullName: "Etienne Richart",
    position: "Engineering Director",
    team: "Directors",
    classYear: "2023",
    projects: "Gen Connect, Isuroon",
    imgPath: "/images/profilePictures/EtienneProfile.jpg",
    email: "richarte@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/etiennerichart/",
  },
  {
    fullName: "Maya Murphy",
    position: "Developer and Marketing Lead",
    team: "alumni",
    classYear: "2022",
    projects: "Gen Connect",
    imgPath: "images/profilePictures/MayaProfile.jpg",
    email: "murphym2@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/maya-and-tech",
  },
  {
    fullName: "Etienne Richart",
    position: "Engineering Director",
    team: "Dev",
    classYear: "2023",
    projects: "Gen Connect, Isuroon",
    imgPath: "/images/profilePictures/EtienneProfile.jpg",
    email: "richarte@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/etiennerichart/",
  },
  {
    fullName: "Aishwarya Varma",
    position: "Product Manager",
    projects: "Gen Connect, Isuroon",
    team: "product",
    classYear: "2023",
    imgPath: "/images/profilePictures/AishwaryaProfile.JPG",
    email: "varmaa@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/aishwaryavarma01/",
  },
  {
    fullName: "Khalid Hussain",
    position: "Developer",
    team: "alumni",
    classYear: "2022",
    projects: "Isuroon",
    imgPath: "/images/profilePictures/KhalidProfile.jpg",
    email: "hussaink@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/khalid-hussain-029970176/",
  },
  {
    fullName: "Darryl York III",
    position: "Backend Developer",
    team: "Dev",
    projects: "Isuroon",
    classYear: "2023",
    imgPath: "/images/profilePictures/DarrylProfile.jpg",
    email: "yorkd@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/darrylyork3",
  },
  {
    fullName: "Tony Ni",
    position: "Backend Developer",
    team: "Dev",
    projects: "Isuroon",
    classYear: "2025",
    imgPath: "/images/profilePictures/carleton.png",
    email: "nit@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/carleton-college",
  },
  {
    fullName: "Tin Nguyen",
    position: "UIUX Designer",
    team: "Design",
    projects: "Isuroon",
    classYear: "2024",
    imgPath: "/images/profilePictures/TinProfile.jpg",
    email: "nguyent4@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/school/carleton-college/",
  },
  {
    fullName: "Hannah Moran",
    position: "UIUX Designer",
    team: "Design",
    classYear: "2024",
    projects: "Gen Connect v2",
    imgPath: "/images/profilePictures/HannahProfile.jpeg",
    email: "moranh@carleton.edu ",
    linkedinProfileUrl: "https://www.linkedin.com/school/carleton-college/",
  },
  {
    fullName: "Aidan Roessler",
    position: "UIUX Designer",
    team: "Design",
    classYear: "2025",
    projects: "Isuroon",
    imgPath: "/images/profilePictures/AidanProfile.jpg",
    email: "roesslera@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/aidan-roessler-88b5a0217/",
  },
  {
    fullName: "Aidan Roessler",
    position: "Frontend Developer",
    team: "Dev",
    classYear: "2025",
    projects: "Isuroon",
    imgPath: "/images/profilePictures/AidanProfile.jpg",
    email: "roesslera@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/aidan-roessler-88b5a0217/",
  },
  {
    fullName: "Vanessa Heynes",
    position: "UIUX Designer",
    team: "Design",
    classYear: "2025",
    projects: "Isuroon",
    imgPath: "/images/profilePictures/VanessaProfile.jpeg",
    email: "heynesk@carleton.edu ",
    linkedinProfileUrl: "https://www.linkedin.com/school/carleton-college/",
  },
  {
    fullName: "Vanessa Heynes",
    position: "Frontend Developer",
    team: "Dev",
    classYear: "2025",
    projects: "Isuroon",
    imgPath: "/images/profilePictures/VanessaProfile.jpeg",
    email: "heynesk@carleton.edu ",
    linkedinProfileUrl: "https://www.linkedin.com/school/carleton-college/",
  },
  {
    fullName: "Luke Drake",
    position: "AWS Engineer",
    team: "Dev",
    classYear: "2025",
    projects: "Isuroon",
    imgPath: "/images/profilePictures/LukeProfile.jpeg",
    email: "drakel2@carleton.edu ",
    linkedinProfileUrl: "https://www.linkedin.com/school/carleton-college/",
  },
  {
    fullName: "Francine Legba",
    position: "Project Sourcer",
    team: "outreach",
    classYear: "2023",
    imgPath: "/images/profilePictures/FrancineProfile.jpg",
    email: "legbaf@carleton.edu ",
    linkedinProfileUrl: "https://www.linkedin.com/school/carleton-college/",
  },
  {
    fullName: "Hermela Shiferaw",
    position: "Project Sourcer",
    team: "outreach",
    classYear: "2023",
    imgPath: "/images/profilePictures/carleton.png",
    email: "shiferawh@carleton.edu ",
    linkedinProfileUrl: "https://www.linkedin.com/school/carleton-college/",
  },
  {
    fullName: "Nectaree Thao",
    position: "Social Media",
    team: "outreach",
    classYear: "2023",
    imgPath: "/images/profilePictures/NectareeProfile.jpeg",
    email: "thaon3@carleton.edu ",
    linkedinProfileUrl: "https://www.linkedin.com/school/carleton-college/",
  },
  {
    fullName: "Raahsahn Bakayoko",
    position: "Social Media",
    team: "outreach",
    classYear: "2023",
    imgPath: "/images/profilePictures/carleton.png",
    email: "bakayokor@carleton.edu ",
    linkedinProfileUrl: "https://www.linkedin.com/school/carleton-college/",
  },
  {
    fullName: "Lily Li",
    position: "UIUX Designer",
    team: "Design",
    classYear: "2023",
    projects: "Isuroon",
    imgPath: "/images/profilePictures/LilyProfile.png",
    email: "lil3@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/lily-li-26b062197/",
  },
  {
    fullName: "PJ Sangvong",
    position: "Frontend Developer",
    team: "Dev",
    classYear: "2023",
    projects: "Gen Connect",
    imgPath: "/images/profilePictures/PJProfile.jpg",
    email: "sangvongp@carleton.edu",
    linkedinProfileUrl: "https://www.linkedin.com/in/sangvongp",
  },
];
export default Members;
