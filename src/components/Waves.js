import React from "react";
import { ReactComponent as FirstWave } from "../images/first-wave.svg";
import { ReactComponent as SecondWave } from "../images/second-wave.svg";
import { ReactComponent as ThirdWave } from "../images/third-wave.svg";
import { ReactComponent as LightWaveLine } from "../images/light-wave-line.svg";
import { ReactComponent as MidWaveLine } from "../images/mid-wave-line.svg";
import { ReactComponent as DarkWaveLine } from "../images/dark-wave-line.svg";

const Waves = () => {
  return (
    <div>
      <div className="wave-lines">
        <LightWaveLine className="first-wave-line" />
        <MidWaveLine className="second-wave-line" />
        <DarkWaveLine className="third-wave-line" />
      </div>
      <div classNames="waves">
        <FirstWave className="first-wave" />
        <SecondWave className="second-wave" />
        <ThirdWave className="third-wave" />
      </div>
    </div>
  );
};

export default Waves;
