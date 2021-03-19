import './Slides.css';

const ImageContainer = ({imgPath}) => (
    <img
        className='imageContainerOnResize'
        src={`${process.env.PUBLIC_URL}${imgPath}`}
        style={
            {width: '80%',
            clipPath: 'circle(50% at 50% 50%)'}
        }
        alt="hack4impact member"
    ></img>
)

const BigProfileInfoTextContainer = ({textDict}) => (
    <div
        className='hiddenComponent bigProfileInfoTextContainerOnResize'
    >
        <NormalText normalText={textDict.name}/>
        <NormalText normalText={textDict.position}/>
        <NormalText normalText={textDict.classOf}/>
    </div>
)

const BigProfileQuoteTextContainer = ({textDict}) => (
    <div
        className='hiddenComponent bigProfileQuoteTextContainerOnResize'
    >
        <div
            style={
                {height: '60%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'}
            }
        >
            <BoldText boldText={textDict.quote}/>
        </div>
    </div>
)

/**
 * Contains both the information and the quote of the BigProfiles Component
 */
const TextContainer = ({textDict}) => (
    <div
        className='textContainerOnResize'
        style={
            {display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            height: '80%',
            top: '5%',
            width: '100%',
            padding: '30px'}
        }
    >
        <div
            style={
                {height: '35%',
                marginTop: '5%'}
            }
        >
            <NormalText normalText={textDict.name}/>
            <NormalText normalText={textDict.position}/>
            <NormalText normalText={textDict.classOf}/>
        </div>
        <div
            style={
                {height: '60%',
                marginTop: '3%'}
            }
        >
            <BoldText boldText={textDict.quote}/>
        </div>
    </div>
)

const NormalText = ({normalText}) => (
    <div style={{fontSize: '30px', 
                color: 'black',
                fontFamily: 'Consolas'}}>{normalText}</div>
)

const BoldText = ({boldText}) => (
    <p style={{fontSize: '23px', 
            color: 'rgba(0, 62, 126, 1)', 
            width: '90%', 
            height: '40%', 
            whiteSpace: 'initial',
            fontFamily: 'Roboto',
            fontWeight: '500'
            }}>{boldText}</p>
)

/**
 * 
 * @param {string} imgPath path to image
 * @param {dictionary} textDict consists of position, name, classOf, email, quote
 */
const BigProfiles = ({imgPath, textDict}) => (
    <div className='bigProfile' style={{backgroundColor:'rgba(255, 255, 255, 1)', width: '100%', borderRadius: '30px', display: 'flex', justifyContent: 'space-between',position:'relative'}}>
        <div className='ImageAndProfileInfoWrapperOnResize'>
            <ImageContainer  imgPath={imgPath}/>
            <BigProfileInfoTextContainer  textDict={textDict}/> {/*will only appear on small screen*/}
        </div>
        <TextContainer textDict={textDict}/> {/*will not appear on small screen*/}
        <BigProfileQuoteTextContainer textDict={textDict}/> {/*will only appear on small screen*/}
    </div>
)
const randomQuote1 = "\"I love their mission: To empower engineers, designers, activists, and humanitarians to create lasting and impactful social change, fostering the wider adoption of software as a tool for social good.\"";
const randomQuote2 = "\"I'm excited to work with nonprofits across the world. Hack4Impact members build products to improve the functions of effective nonprofits in their local communities.\"";
const bigProfileArray =  [
                            <BigProfiles  imgPath={'/images/profilePictures/carleton.png'} 
                                textDict={{'position':'', 'name':'','classOf': '', 'quote':`${randomQuote1}`}}/>,
                            <BigProfiles imgPath={'/images/profilePictures/carleton.png'} 
                                textDict={{'position':'', 'name':'', 'classOf': '', 'quote':`${randomQuote2}`}}/>
                        ]
export default bigProfileArray
