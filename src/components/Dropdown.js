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
    const { isListOpen } = this.state;
    {isListOpen
      ? this.setState({ isListOpen : false }, () => console.log(this.state.isListOpen))
      : this.setState({ isListOpen : true }, () => console.log(this.state.isListOpen))}
  }
  
  render () {
    const { isListOpen } = this.state;
    return (
      <div className="dd-wrapper">
        <h1 style={{ color : 'white', fontSize : '50px', float: 'left'}} onClick={this.handleClick}> {this.props.team} </h1>
        {isListOpen
          ? <i class="fas fa-angle-up"  onClick={this.handleClick} style={{ color : 'white', fontSize : '65px', float: 'right', marginLeft: '50px'}}></i>
          : <i class="fas fa-angle-down" onClick={this.handleClick} style={{ color : 'white', fontSize : '65px', float: 'right', marginLeft: '50px'}}></i>}

        {isListOpen && <Members team={this.props.team} status={isListOpen} shortTeam = {this.props.shortTeam}/>}

      </div>
    );
  }
}
export default Dropdown;
