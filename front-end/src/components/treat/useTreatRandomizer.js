import { useState } from "react";

const getRandomArrayElement = (array) => {
  // choose a random index and use it to change treatPicture
  const randomTreatIndex = Math.floor(Math.random() * array.length);
  return array[randomTreatIndex];
};

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const getRandomNumberOfSeconds = (min, max) => {
  let num = Math.floor(Math.random() * (max - min)) + min;
  return num;
};

const playSound = (sound) => {
  new Audio(sound).play();
};

const getRandomTopPosition = () =>
  getRandomNumber(0.25 * window.innerHeight, 0.75 * window.innerHeight);

const getRandomLeftPosition = () =>
  getRandomNumber(0.25 * window.innerWidth, 0.75 * window.innerWidth);

const NUM_MILLIS_IN_SECOND = 1000;

export const useTreatRandomizer = (
  treatSound,
  treatPics,
  minFrequencyInSeconds,
  maxFrequencyInSeconds
) => {
  const [treatPicture, setTreatPicture] = useState(treatPics[0]);

  const [hidden, setHidden] = useState(false);
  const [topPosition, setTopPosition] = useState(getRandomTopPosition());
  const [leftPosition, setLeftPosition] = useState(getRandomLeftPosition());

  const hideTreat = () => setHidden(true);
  const showTreat = () => setHidden(false);

  const moveTreatToNewRandomPosition = () => {
    setTopPosition(getRandomTopPosition());
    setLeftPosition(getRandomLeftPosition());
  };

  const showTreatAgain = (minSeconds, maxSeconds) => {
    setTimeout(() => {
      setTreatPicture(getRandomArrayElement(treatPics));
      moveTreatToNewRandomPosition();
      showTreat();
    }, getRandomNumberOfSeconds(minSeconds, maxSeconds) * NUM_MILLIS_IN_SECOND);
  };

  const temporarilyHideTreat = () => {
    hideTreat();
    playSound(treatSound);

    showTreatAgain(minFrequencyInSeconds, maxFrequencyInSeconds);
  };

  return [
    temporarilyHideTreat,
    topPosition,
    leftPosition,
    treatPicture,
    hidden,
  ];
};
