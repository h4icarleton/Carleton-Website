import Members from './Members';
import React, {Component} from 'react';
import DropDownContainer from './DropDownContainer'
import "./ourTeam.css"

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
    isListOpen
      ? this.setState({ isListOpen : false })
      : this.setState({ isListOpen : true });
  }
    
  
  render () {
    const { isListOpen } = this.state;
    return (
      <DropDownContainer isListOpen={isListOpen} refer={this.props.refer}>
        <div className="dropDownHeaderOnResize">
          <h1 className="dropDownHeaderOnResize"> {this.props.team} </h1>
          {isListOpen
            ? <i className="arrow"  onClick={this.handleClick}></i>
            : <i className="arrowup" onClick={this.handleClick}></i> } 
        </div>
        {isListOpen && <Members team={this.props.team} status={isListOpen} shortTeam = {this.props.shortTeam}/>}
      </DropDownContainer>
    );
  }
}
export default Dropdown;
