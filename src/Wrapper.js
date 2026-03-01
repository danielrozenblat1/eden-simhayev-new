import React, { useState, useCallback } from 'react';
import './App.css';
import Navbar from './components/nav/nav';
import SplashScreen from './components/SplashScreen/SplashScreen';
import FloatingButton from './components/FloatButton/FloatButton';
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
  const [showSplash, setShowSplash] = useState(true);

  const handleHeroLoad = useCallback(() => {
    // Small delay so the exit animation plays smoothly
    setTimeout(() => setShowSplash(false), 400);
  }, []);

  return (
    <div className="App">
      <SplashScreen visible={showSplash} />
      <Navbar />
      <FirstScreen onImageLoad={handleHeroLoad} />
      <SecondScreen />
      <FourthScreen />
      <TestimonialsScreen />
      <ThirdScreen />
      <SixthScreen />
      <SeventhScreen />
      <EighthScreen />
      <NinthScreen />
      <Footer />

      <FloatingButton />
    </div>
  );
}

export default Wrapper;
