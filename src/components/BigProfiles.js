import './Slides.css';

const ImageContainer = ({imgPath}) => (
    <img
        className='imageContainerOnResize'
        src={`${process.env.PUBLIC_URL}${imgPath}`}
        style={
            {width: '80%',
            clipPath: 'circle(50% at 50% 50%)'}
        }
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
            fontFamily: 'Arial',
            }}>{boldText}</p>
)

/**
 * 
 * @param {string} imgPath path to image
 * @param {dictionary} textDict consists of position, name, classOf, email, quote
 */
const BigProfiles = ({imgPath, textDict}) => (
    <div className='bigProfile' style={{backgroundColor:'rgba(255, 255, 255, 0.3)', width: '100%', borderRadius: '30px', display: 'flex', justifyContent: 'space-between',position:'relative'}}>
        <div className='ImageAndProfileInfoWrapperOnResize'>
            <ImageContainer  imgPath={imgPath}/>
            <BigProfileInfoTextContainer  textDict={textDict}/> {/*will only appear on small screen*/}
        </div>
        <TextContainer textDict={textDict}/> {/*will not appear on small screen*/}
        <BigProfileQuoteTextContainer textDict={textDict}/> {/*will only appear on small screen*/}
    </div>
)
const randomQuote1 = "\" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took \"";
const randomQuote2 = "\" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took \"";
const bigProfileArray =  [
                            <BigProfiles  imgPath={'/images/profilePictures/dummy-profile.jpeg'} 
                                textDict={{'position':'Project Lead', 'name':'Bob1 LastName','classOf': 2051, 'quote':`${randomQuote1}`}}/>,
                            <BigProfiles imgPath={'/images/profilePictures/dummy-profile.jpeg'} 
                                textDict={{'position':'Project Lead', 'name':'Bob2 Mid LastLast', 'classOf': 2020, 'quote':`${randomQuote2}`}}/>,
                            <BigProfiles imgPath={'/images/profilePictures/dummy-profile.jpeg'} 
                                textDict={{'position':'Project Lead', 'name':'Bob3 BlaBla','classOf': 2077, 'quote':`${randomQuote1}`}}/> 
                        ]
export default bigProfileArray
