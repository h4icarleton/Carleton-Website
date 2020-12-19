const MemberProfileContainer = (props) => {
    return <div style={{width:'90%', margin:'30px 0',backgroundColor:'rgba(0, 0, 0, 0.3)', borderRadius:'30px', display:'flex', flexFlow:'row wrap', justifyContent:'center', alignItems:'center', padding:'40px 60px'}}>
        {props.children}
    </div>
}

export default MemberProfileContainer;
