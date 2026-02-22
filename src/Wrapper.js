import React from 'react';
import './App.css';
import FirstScreen from './screens/firstScreen/firstScreen';
import SecondScreen from './screens/secondScreen/secondScreen';
import ThirdScreen from './screens/thirdScreen/thirdScreen';
import FourthScreen from './screens/fourthScreen/fourthScreen';
import TestimonialsScreen from './screens/testimonialsScreen/testimonialsScreen';
import SixthScreen from './screens/sixthScreen/sixthScreen';
import SeventhScreen from './screens/seventhScreen/seventhScreen';
import EighthScreen from './screens/eighthScreen/eighthScreen';
import NinthScreen from './screens/ninthScreen/ninthScreen';
import Footer from './components/Footer/Footer';
function Wrapper() {
  return (
    <div className="App">
      <FirstScreen />
      <SecondScreen /> 
      <ThirdScreen />
      <FourthScreen />
      <TestimonialsScreen />
      <SixthScreen />
      <SeventhScreen />         
      <EighthScreen />
      <NinthScreen />
      <Footer />
    </div>
  );
}   

export default Wrapper;
