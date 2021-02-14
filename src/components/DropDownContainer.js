import "./ourTeam.css"

const MemberProfileContainer = (props) => {
    return <div className="dropDownContainerOnResize" style={{backgroundColor:`rgba(255, 255, 255, 1)`, border: '3px solid #003E7E'}} ref={props.refer}>
        {props.children}
    </div>
}

export default MemberProfileContainer;
