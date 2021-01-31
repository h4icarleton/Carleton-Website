import './Slides.css';

const Slide = ({ content, width }) => (
    <div
        className='slide'
        style={{
            width: `${width * 90/100}px`,
            marginRight:  `${width * 5/100}px`,
            marginLeft:  `${width * 5/100}px`,
            borderRadius: '100px'
        }}
    >
        {content}
    </div>
)
  
  export default Slide