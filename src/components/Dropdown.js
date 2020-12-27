import Members from '../components/Members.js';
import React, {Component} from 'react';
import { MDBIcon } from 'mdbreact';

/**
 *
 * @param props {team}
 */
  // fullName, position, classYear, imgPath, email, linkedinProfileUrl
const Dropdown = (props) => {
  return (
    <div className="dd-wrapper">
      <h1 style={{ color : 'white', fontSize : '50px'}}> {props.team} </h1>

    <div className="dd-list">

    </div>
    </div>
  )
}

export default Dropdown;
