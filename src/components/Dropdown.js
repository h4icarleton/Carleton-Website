import Members from '../components/Members.js';
import React, {Component} from 'react';
import MemberProfile from '../components/MemberProfile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

  // fullName, position, classYear, imgPath, email, linkedinProfileUrl
class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isListOpen: false,
    };
  }

  handleClick() {
    console.log('Click happened');
    const { isListOpen } = this.state;
    isListOpen
      ? this.setState({ isListOpen : false }, () => console.log(this.state.isListOpen))
      : this.setState({ isListOpen : true }, () => console.log(this.state.isListOpen))
  }
  
  render () {
    const { isListOpen } = this.state;
    return (
      <div className="dd-wrapper">
        <h1 style={{ color : 'white', fontSize : '50px', float: 'left'}} onClick={this.handleClick}> {this.props.team} </h1>
        {isListOpen
          ? <i className="fas fa-angle-up"  onClick={this.handleClick} style={{ color : 'white', fontSize : '65px', float: 'right', marginLeft: '50px'}}></i>
          : <i className="fas fa-angle-down" onClick={this.handleClick} style={{ color : 'white', fontSize : '65px', float: 'right', marginLeft: '50px'}}></i>}
        // <MemberProfile fullName="Maya" position="Dev" classYear="2022" imgPath="/images/profilePictures/dummy-profile.jpeg" email="murphym2@carleton.edu" linkedinProfileUrl="https://www.linkedin.com/in/maya-murphy-56409a177/"/>

        <Members team={this.props.team} status={isListOpen}/>

      </div>
    );
  }
}
export default Dropdown;
