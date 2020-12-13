import './Slides.css';

const SliderNextButton = ({width, handleClick}) => (
    <div 
        className = 'magnify-when-hover'
        onClick={handleClick}
        style={
            {display: 'flex',
            backgroundColor: 'white',
            position: 'absolute',
            height: '50px',
            width: '100px',
            justifyContent: 'center',
            top: '85%',
            right: `${width/5}px`, 
            cursor: 'pointer',
            alignItems: 'center',
            borderRadius: '8px',
            fontSize: '30px'}
        }
    > 
    Next
    </div>
)

export default SliderNextButton;