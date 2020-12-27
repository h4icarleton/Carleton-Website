import Members from '../components/Members.js';
import React, {Component} from 'react';
import throttle from 'lodash.throttle';
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
        <h1 style={{ color : 'white', fontSize : '50px'}} onClick={this.handleClick}> {this.props.team} </h1>
        {isListOpen
          ? <i class="fas fa-angle-up"  style={{ color : 'white', fontSize : '50px', alignItems:'right'}}></i>
          : <i class="fas fa-angle-down" style={{ color : 'white', fontSize : '50px', alignItems:'right'}}></i>}
      <div className="dd-list">

      </div>
      </div>
    );
  }
}



export default Dropdown;
