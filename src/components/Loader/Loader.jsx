// GridLoader.jsx
import React, { useEffect, useRef } from 'react';
import './Loader.css';

const gridPositions = [
  ['1fr 4vw 1fr', '2fr 7.11vw 3fr'],
  ['5fr 4vw 2fr', '1fr 7.11vw 1fr'],
  ['1fr 4vw 3fr', '4fr 7.11vw 2fr'],
];

const images = [
  'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1920&h=1080&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1630693912525-7a833b62c81f?w=1920&h=1080&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1574169208019-214ec90d09a9?w=1920&h=1080&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1661822561279-b85cb751db23?w=1920&h=1080&auto=format&fit=crop',
];

const Loader = () => {
  const audioRef = useRef();
  const gridRef = useRef();
  const centralCellRef = useRef();

  useEffect(() => {
    const spacingVertical = '--spacing-vertical';
    const spacingHorizontal = '--spacing-horizontal';
    const root = document.documentElement;

    const defaultStyles = getComputedStyle(root);
    const defaultVertical = defaultStyles.getPropertyValue(spacingVertical);
    const defaultHorizontal = defaultStyles.getPropertyValue(spacingHorizontal);

    const gridBackgrounds = gridRef.current.querySelectorAll('.grid__background');
    const centralCell = centralCellRef.current;

    gridBackgrounds.forEach((img, i) => {
      if (i > 0) {
        centralCell.appendChild(img.cloneNode());
      }
    });

    let currentStep = 1;
    const totalSteps = gridPositions.length;

    function animateZoom() {
      const isFinalStep = currentStep === totalSteps;

      setTimeout(() => {
        audioRef.current?.play();
        root.style.setProperty(spacingVertical, gridPositions[currentStep - 1][0]);
      }, 1000);

      setTimeout(() => {
        root.style.setProperty(spacingHorizontal, gridPositions[currentStep - 1][1]);
      }, 3000);

      setTimeout(() => {
        centralCell.children[currentStep - 1].classList.add('visible');
        root.style.setProperty(spacingVertical, defaultVertical);
        root.style.setProperty(spacingHorizontal, defaultHorizontal);
      }, 4500);

      setTimeout(() => {
        currentStep++;
        centralCell.children[currentStep - 2].classList.remove('visible');
        gridBackgrounds[currentStep - 2].classList.remove('visible');
        gridBackgrounds[currentStep - 1]?.classList.add('visible');
        if (!isFinalStep) animateZoom();
      }, 5500);
    }

    animateZoom();
  }, []);

  return (
    <div className="grid-loader">
      <div className="grid" ref={gridRef}>
        {images.map((src, i) => (
          <img
            key={i}
            className={`grid__background${i === 0 ? ' visible' : ''}`}
            src={src}
            alt="Background"
          />
        ))}
        <div className="grid__cell grid__cell--top"></div>
        <div className="grid__cell grid__cell--left"></div>
        <div className="grid__cell grid__cell--central" ref={centralCellRef}></div>
        <div className="grid__cell grid__cell--right"></div>
        <div className="grid__cell grid__cell--bottom"></div>
        <audio
          ref={audioRef}
          src="https://www.georgewpark.com/audio/battlefront-loading.mp3"
          preload="auto"
        />
      </div>
    </div>
  );
};

export default Loader;
