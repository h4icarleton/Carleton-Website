import Members from '../components/Members.js';
import React, {Component} from 'react';
import throttle from 'lodash.throttle';
import MemberProfile from '../components/MemberProfile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
/**
 *
 * @param props {team, key}
 */
  // fullName, position, classYear, imgPath, email, linkedinProfileUrl
class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isListOpen: false,
    };
  }

  toggleList(props){
    console.log('List visible');
    members.map((hacker) =>{
      if (hacker.key === this.props.key){
        return (
          <MemberProfile
            fullName={hacker.fullName}
            position={hacker.position}
            classYear={hacker.classYear}
            imgPath={hacker.imgPath}
            email={hacker.email}
            linkedinProfileUrl={hacker.linkedinProfileUrl}
            />
        )}
      }
    )
  }

  handleClick() {
    console.log('Click happened');
    const { isListOpen } = this.state;
    {isListOpen
      ? this.setState({ isListOpen : false }, () => console.log(this.state.isListOpen))
      : this.setState({ isListOpen : true }, () => console.log(this.state.isListOpen))}
  }

  render() {
    const { isListOpen } = this.state;
    return (
      <div className="dd-wrapper">
        <h1 style={{ color : 'white', fontSize : '50px', float: 'left'}} onClick={this.handleClick}> {this.props.team} </h1>
        {isListOpen
          ? <i class="fas fa-angle-up"  onClick={this.handleClick} style={{ color : 'white', fontSize : '65px', float: 'right', marginLeft: '50px'}}></i>
          : <i class="fas fa-angle-down" onClick={this.handleClick} style={{ color : 'white', fontSize : '65px', float: 'right', marginLeft: '50px'}}></i>}
        <div className="dd-list">
        {isListOpen
          ? this.toggleList()
          : console.log('List is hidden')}
        </div>
      </div>
    );
  }
}

const members = [
  {
      fullName:'Maya Murphy',
      position:'Project Lead of Development, Director of Engineering',
      team:'Dev',
      classYear:'2022',
      imgPath:'/images/profilePictures/dummy-profile.jpeg',
      email:'murphym2@carleton.edu',
      linkedinProfileUrl:'https://www.linkedin.com/in/maya-murphy-56409a177/',
  },
  {
      fullName:'Henrie Friesen',
      positon:'Developer',
      team:'Dev',
      classYear:'2023',
      imgPath:'/images/profilePictures/dummy-profile.jpeg',
      email:'fiesenh@carleton.edu',
      linkedinProfileUrl:'https://www.linkedin.com/school/carleton-college/',
  },
  {

      fullName:'Zhixing Jiang',
      positon:'Developer',
      team:'Dev',
      classYear:'2023',
      imgPath:'/images/profilePictures/dummy-profile.jpeg',
      email:'jiangz@carleton.edu',
      linkedinProfileUrl:'https://www.linkedin.com/school/carleton-college/'

  },
  {

      fullName:'Juanito Zhang Yang',
      positon:'Developer',
      team:'Dev',
      classYear:'2022',
      imgPath:'/images/profilePictures/dummy-profile.jpeg',
      email:'zhangyangj@carleton.edu',
      linkedinProfileUrl:'https://www.linkedin.com/school/carleton-college/'

  },
  {
      fullName:'Quoc Nguyen',
      positon:'Developer',
      team:'Dev',
      classYear:'2023',
      imgPath:'/images/profilePictures/dummy-profile.jpeg',
      email:'nguyenq2@carleton.edu',
      linkedinProfileUrl:'https://www.linkedin.com/school/carleton-college/'
  },
  {
      fullName:'Kevin Chen',
      positon:'Developer',
      team:'Dev',
      classYear:'2023',
      imgPath:'/images/profilePictures/dummy-profile.jpeg',
      email:'chenk4@carleton.edu',
      linkedinProfileUrl:'https://www.linkedin.com/school/carleton-college/'

  },
  {

      fullName:'Tessa Newman-Heggie',
      positon:'Project Lead of Design',
      team:'Design-User',
      classYear:'2021',
      imgPath:'/images/profilePictures/dummy-profile.jpeg',
      email:'newmant2@carleton.edu',
      linkedinProfileUrl:'https://www.linkedin.com/school/carleton-college/'

  },
  {

      fullName:'Lydia Fick',
      positon:'UI Designer',
      team:'Design-User',
      classYear:'2022',
      imgPath:'/images/profilePictures/dummy-profile.jpeg',
      email:'fickl@carleton.edu',
      linkedinProfileUrl:'https://www.linkedin.com/school/carleton-college/'

  },
  {

      fullName:'Emily Litton',
      positon:'UI Designer',
      team:'Design-User',
      classYear:'2023',
      imgPath:'/images/profilePictures/dummy-profile.jpeg',
      email:'littone@carleton.edu',
      linkedinProfileUrl:'https://www.linkedin.com/school/carleton-college/'

  },
  {

      fullName:'James Marlin',
      positon:'UI Designer',
      team:'Design-User',
      classYear:'2023',
      imgPath:'/images/profilePictures/dummy-profile.jpeg',
      email:'marlinj@carleton.edu',
      linkedinProfileUrl:'https://www.linkedin.com/school/carleton-college/'

  },
  {

      fullName:'William Dudarov',
      positon:'UI Designer',
      team:'Design-User',
      classYear:'2023',
      imgPath:'/images/profilePictures/dummy-profile.jpeg',
      email:'dudarovw@carleton.edu',
      linkedinProfileUrl:'https://www.linkedin.com/school/carleton-college/',

  },
  {

      fullName:'Starr Wang',
      positon:'UI Designer',
      team:'Design-User',
      classYear:'2021',
      imgPath:'/images/profilePictures/dummy-profile.jpeg',
      email:'wangy3@carleton.edu',
      linkedinProfileUrl:'https://www.linkedin.com/school/carleton-college/'

  },
  {

      fullName:'PJ Sangvong',
      position:'UI Designer',
      team:'Design',
      classYear:'2023',
      imgPath:'/images/profilePictures/PJProfile.jpg',
      email:'sangvongp@carleton.edu',
      linkedinProfileUrl:'https://www.linkedin.com/in/sangvongp'

  },
  {

      fullName:'Eric Odoom',
      positon:'UX Designer',
      team:'Design-User',
      classYear:'2021',
      imgPath:'/images/profilePictures/dummy-profile.jpeg',
      email:'odoome@carleton.edu',
      linkedinProfileUrl:'https://www.linkedin.com/school/carleton-college/',

  },
  {

      fullName:'Eliot Huh',
      positon:'UX Designer',
      team:'Design-User',
      classYear:'2021',
      imgPath:'/images/profilePictures/dummy-profile.jpeg',
      email:'huhe@carleton.edu',
      linkedinProfileUrl:'https://www.linkedin.com/school/carleton-college/'

  },
  {

      fullName:'Victor Huang',
      positon:'Project Lead of Code Review',
      team:'Code-Testing',
      classYear:'2023',
      imgPath:'/images/profilePictures/dummy-profile.jpeg',
      email:'huangv2@carleton.edu',
      linkedinProfileUrl:'https://www.linkedin.com/school/carleton-college/'

  },
  {

      fullName:'Shaw Qin',
      positon:'Code Reviewer',
      team:'Code-Testing',
      classYear:'2022',
      imgPath:'/images/profilePictures/dummy-profile.jpeg',
      email:'qins@carleton.edu',
      linkedinProfileUrl:'https://www.linkedin.com/school/carleton-college/'

  },
  {

      fullName:'Yasmeen Awad',
      positon:'Project Lead of Testing',
      team:'Code-Testing',
      classYear:'2021',
      imgPath:'/images/profilePictures/dummy-profile.jpeg',
      email:'awady@carleton.edu',
      linkedinProfileUrl:'https://www.linkedin.com/school/carleton-college/'

  },
  {

      fullName:'Ankit Sanghi',
      positon:'Code Tester',
      team:'Code-Testing',
      classYear:'2021',
      imgPath:'/images/profilePictures/dummy-profile.jpeg',
      email:'sanghia@carleton.edu',
      linkedinProfileUrl:'https://www.linkedin.com/school/carleton-college/'

  },
  {

      fullName:'Lita Theng',
      positon:'Code Tester',
      team:'Code-Testing',
      classYear:'2023',
      imgPath:'/images/profilePictures/dummy-profile.jpeg',
      email:'thengl@carleton.edu',
      linkedinProfileUrl:'https://www.linkedin.com/school/carleton-college/'

  },
  {

      fullName:'Aishwarya Varma',
      positon:'Co-Founder',
      team:'Admin',
      classYear:'2023',
      imgPath:'/images/profilePictures/dummy-profile.jpeg',
      email:'varmaa@carleton.edu',
      linkedinProfileUrl:'https://www.linkedin.com/school/carleton-college/'

  },
  {

      fullName:'Nicole Binder',
      positon:'Co-Founder',
      team:'Admin',
      classYear:'2021',
      imgPath:'/images/profilePictures/dummy-profile.jpeg',
      email:'bindern@carleton.edu',
      linkedinProfileUrl:'https://www.linkedin.com/school/carleton-college/'

  }
];
export default Dropdown;
