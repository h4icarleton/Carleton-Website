const Slide = ({ content, width }) => (
    <div
        style={{
            height: '90%',
            width: `${width * 70/100}px`,
            minWidth: '600px',
            marginRight:  `${width * 15/100}px`,
            marginLeft:  `${width * 15/100}px`,
            borderRadius: '100px'
        }}
    >
        {content}
    </div>
)
  
  export default Slide