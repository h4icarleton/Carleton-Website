import './Slides.css';

const Slide = ({ content, width }) => (
    <div
        className='slide'
        style={{
            width: `${width * 70/100}px`,
            marginRight:  `${width * 15/100}px`,
            marginLeft:  `${width * 15/100}px`,
            borderRadius: '100px'
        }}
    >
        {content}
    </div>
)
  
  export default Slide