const SliderContent = props => (
    <div
        style={
            {transform: `translateX(-${props.translate}px)`,
            transition: `transform ease-out ${props.transition}s `,
            width: `${props.width}px`,
            display: 'flex'}
        }
    >
        {props.children}
    </div>
)

export default SliderContent