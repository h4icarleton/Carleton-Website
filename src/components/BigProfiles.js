const ImageContainer = ({imgPath}) => (
    <div
        style={
            {height: '100%',
            width: '45%',
            borderRadius: '30px 0px 0px 30px',
            backgroundImage: `url('${imgPath}')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'noRepeat',
            backgroundPosition: 'center'}
        }
    ></div>
)

const TextContainer = ({textDict}) => (
    <div
        style={
            {display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            height: '80%',
            top: '5%',
            width: '50%'
            }
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
                {height: '60%'}
            }
        >
            <BoldText boldText={textDict.quote}/>
        </div>
    </div>
)

const NormalText = ({normalText}) => (
    <div style={{fontSize: '20px', color: 'black'}}>{normalText}</div>
)

const BoldText = ({boldText}) => (
    <p style={{fontSize: '25px', color: 'yellow', width: '90%', height: '40%', whiteSpace: 'initial'}}>{boldText}</p>
)

/**
 * 
 * @param {string} imgPath path to image
 * @param {dictionary} textDict consists of position, name, classOf, email, quote
 */
const BigProfiles = ({imgPath, textDict}) => (
    <div style={{backgroundColor: 'blue', height: '100%', borderRadius: '30px', display: 'flex', justifyContent: 'space-between'}}>
        <ImageContainer imgPath={imgPath}/>
        <TextContainer textDict={textDict}/>
    </div>
)
const randomQuote1 = "\" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a \"";
const bigProfileArray =  [
                            <BigProfiles imgPath={'https://images.unsplash.com/photo-1607113421429-96a7c613f649?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'} 
                                textDict={{'position':'Project Lead', 'name':'Bob1 LastName','classOf': 2051, 'quote':`${randomQuote1}`}}/>,
                            <BigProfiles imgPath={'https://images.unsplash.com/photo-1606636889299-1f309d44b3be?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'} 
                                textDict={{'position':'Project Lead', 'name':'Bob2 Mid LastLast', 'classOf': 2020, 'quote':`${randomQuote1}`}}/>,
                            <BigProfiles imgPath={'https://images.unsplash.com/photo-1606191027634-340159c45142?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'} 
                                textDict={{'position':'Project Lead', 'name':'Bob3 BlaBla','classOf': 2077, 'quote':`${randomQuote1}`}}/> 
                        ]

export default bigProfileArray
