import './Slides.css';

const Slide = ({ content, refA, refB}) => (
    <div
        className='slide'
        style={{
            minWidth: `${refA}px`,
            marginRight:  `${refB}px`,
            marginLeft:  `${refB}px`,
            borderRadius: '30px',
            border: '3px solid #003E7E', 
            backgroundColor: `rgb(255, 255, 255)`
        }}
    >
        {content}
    </div>
    
)
  
  export default Slide