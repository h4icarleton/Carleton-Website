import './Slides.css';

const Slide = ({ content, width }) => (
    <div
        className='slide'
        style={{
            width: `${width * 90/100}px`,
            marginRight:  `${width * 5/100}px`,
            marginLeft:  `${width * 5/100}px`,
            borderRadius: '30px',
            border: '3px solid #003E7E'
        }}
    >
        {content}
    </div>
)
  
  export default Slide