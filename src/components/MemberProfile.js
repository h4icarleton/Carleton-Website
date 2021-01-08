import LinkedInLogo from './LinkedInLogo';

const NormalText = ({normalText}) => (
    <div style={{fontSize: '15px', color: 'black', paddingTop:'3px', paddingBottom:'3px', maxWidth:'200'}}>{normalText}</div>
)

const LinkText = ({text, email}) => (
    <a href={`mailto:${email}`}>
        <div style={{fontSize: '10px', color:'#0B5091', fontWight:"400"}}>{text}</div>
    </a>
)

/**
 * 
 * @param props {fullName, position, classYear, imgPath, email, linkedinProfileUrl}
 */
const MemberProfile = (props) => {
    return <div style={{ width:'350px', height:'200px' ,display:'flex', flexDirection:'row', justifyContent:'space-around', padding:'10px 5px'}}>
        <div style={{width:'130px'}}>
            <img src={`${process.env.PUBLIC_URL}${props.imgPath}`} style={{width:'100%', clipPath:'circle(50% at 50% 50%)'}} alt="Progile Image" />
        </div>
        <div style={{display:"flex", flexDirection:'column', width:'200px'}}>
            <NormalText normalText={`${props.fullName}`}/>
            <NormalText normalText={`${props.position}`}/>
            <NormalText style={{fontSize: '10px'}} normalText={`Class of ${props.classYear}`}/>
            <div style={{display:"flex", flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                {props.email ? <LinkText text='Contact Me' email={`${props.email}`}></LinkText> : null}
                {props.email && props.linkedinProfileUrl ? <NormalText normalText='|'></NormalText> : null}
                {props.linkedinProfileUrl ? <LinkedInLogo linkedInUrl={`${props.linkedinProfileUrl}`}></LinkedInLogo> : null}
            </div>
        </div>
    </div>
}

export default MemberProfile;