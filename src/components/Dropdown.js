import Members from '../components/Members.js';
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

/**
 *
 * @param props {team, key}
 */
  // fullName, position, classYear, imgPath, email, linkedinProfileUrl
const Dropdown = (props) => {
  return (
    <div className="dd-wrapper">
      <h1 style={{ color : 'white', fontSize : '50px'}}> {props.team} </h1>
      <span> <i class="fas fa-angle-down" style={{ color : 'white', fontSize : '50px', alignItems:'right'}}></i> </span>
    <div className="dd-list">

    </div>
    </div>
  )
}

export default Dropdown;
