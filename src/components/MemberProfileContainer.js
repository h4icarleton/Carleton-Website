const MemberProfileContainer = (props) => {
    return <div style={{width:'100%', display:'flex', flexFlow:'row wrap', justifyContent:'space-between', alignItems:'center', marginTop:"30px"}}>
        {props.children}
    </div>
}

export default MemberProfileContainer;
