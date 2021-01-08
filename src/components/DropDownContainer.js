import "./ourTeam.css"

const MemberProfileContainer = (props) => {
    return <div className="dropDownContainerOnResize" style={{backgroundColor:`rgba(255, 255, 255, ${props.isListOpen ? 0.6 : 0.3})`}}>
        {props.children}
    </div>
}

export default MemberProfileContainer;
