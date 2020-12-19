import './LinkedInLogo.css';

const LinkedInLogo = (props) => {
    console.log(props.linkedInUrl)
    return <div>
        <a href={props.linkedInUrl} target="_blank">
            <img src={ `${process.env.PUBLIC_URL}/images/logo/linkedInLogo.png`} style={{width:'20px'}} className='logo' />
        </a>
    </div>
}

export default LinkedInLogo;