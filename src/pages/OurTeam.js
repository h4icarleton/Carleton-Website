import React from 'react';
import SliderContainer from '../components/SliderContainer'
import './pages.css';
import BigProfiles from '../components/BigProfiles';

const OurTeam = () => {
  return(
    <div className="background">
      <div style={{height:'40vh', marginTop: '150px'}}>
        <SliderContainer slides={BigProfiles} autoPlay={2}/>
      </div>
    </div>);
  

  // return ReactDOM.render(
  //   <div className="background">
  //     <SliderContainer/>
  //   </div>
  // , document.querySelector('#root'))
}

export default OurTeam;
