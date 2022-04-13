import React, { useCallback, useRef } from "react";
import './App.css';
import Body from './components/body';
import ReactCanvasConfetti from 'react-canvas-confetti';


export default function App() {

  const [main, setMain] = React.useState(false)

  const canvasStyles ={
    position: "fixed",
    pointerEvents:"none",
    width:"100%",
    height:"100%",
    top:0,
    left:0
  };
  
  const refAnimationInstance = useRef(null);
  
  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);
  
  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio)
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 50,
      startVelocity: 55
    });

    makeShot(0.2, {
      spread: 60
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45
    });
  }, [makeShot]);

  function openMain(){
    setMain (prevState => {
      return !prevState
    })
  }

  const renderPage = () => {
      if (main === true){
        return (<Body/>)
      }
      else{
        return (
          <div className="App">
          <div>
            <h1 className='main-first'>WORLD SOPHIA DAYYYY!!! &#129395; &#127881; &#129656;</h1>
            <p className='main-second'> #SOFFS2-2FINE &#128025; &#128152; </p>
            <button className="main-button" onClick={openMain} onLoad={fire}> Check in </button>
            <div>
              <button className='confetti-button' onClick={fire}>confetti</button>
              <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
            </div>
          </div>
        </div>
        )
      }
  }

  return (
      <div>
        {renderPage()}
      </div> 
  );
}
