import Members from './Members';
import React, {Component} from 'react';
import DropDownContainer from './DropDownContainer'
import "./ourTeam.css"
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
      <DropDownContainer isListOpen={isListOpen}>
        <div className="dropDownHeaderOnResize">
          <h1 className="dropDownHeaderOnResize" onClick={this.handleClick}> {this.props.team} </h1>
          {isListOpen
            ? <i className="arrow"  onClick={this.handleClick}></i>
            : <i className="arrowup" onClick={this.handleClick}></i>}
        </div>
        {isListOpen && <Members team={this.props.team} status={isListOpen} shortTeam = {this.props.shortTeam}/>}
      </DropDownContainer>
    );
  }
}
export default Dropdown;
