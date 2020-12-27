import './Slides.css';

const SliderNextButton = ({width, handleClick}) => (
    <div 
        className = 'magnifyWhenHover'
        onClick={handleClick}
        style={
            {display: 'flex',
            backgroundColor:'rgba(0, 0, 0, 0.1)',
            position: 'absolute',
            height: '80px',
            clipPath: 'circle(50% at 50% 50%)',
            width: '80px',
            justifyContent: 'center',
            right: '12%', 
            cursor: 'pointer',
            alignItems: 'center',
            borderRadius: '8px',
            fontSize: '30px'}
        }
    > 
    <i style={
        {border: 'solid white',
        borderWidth: '0 6px 6px 0',
        display: 'inline-block',
        padding: '8px',
        marginLeft: '-8px',
        transform: 'rotate(-45deg)'}
  }></i>
    </div>
)

export default SliderNextButton;