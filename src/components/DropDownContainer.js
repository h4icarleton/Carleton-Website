import "./ourTeam.css"

const MemberProfileContainer = (props) => {
    return <div className="dropDownContainerOnResize" style={{backgroundColor:`rgba(255, 255, 255, ${props.isListOpen ? 0.6 : 0.3})`, border: '3px solid #003E7E'}}>
        {props.children}
    </div>
}

export default MemberProfileContainer;
