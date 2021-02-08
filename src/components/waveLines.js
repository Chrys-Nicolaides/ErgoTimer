// import { TimelineMax, TweenMax } from "gsap";
// import { ReactComponent as lightWaveLine } from "../images/lightWaveLine";
// import { ReactComponent as midWaveLine } from "../images/midWaveLine";
// import { ReactComponent as darkWaveLine } from "../images/darkWaveLine";

// export const waveLines = () => {
//   return (

//     (lightWaveLine = document.querySelector(".lightWaveLine")),
//     (midWaveLine = document.querySelector(".midWaveLine")),
//     (darkWaveLine = document.querySelector(".darkWaveLine")),
//     (waveTimeline = new TimelineMax({ repeat: -1 })),
//     waveTimeline.timeScale(3),
//     (lightWaveTween = TweenMax.to([lightWaveLine], 6, {
//       x: -782.6,
//       repeat: -1,
//       ease: Linear.easeNone,
//     })),
//     (midWaveTween = TweenMax.to([midWaveLine], 6, {
//       x: -782.6,
//       repeat: -1,
//       ease: Linear.easeNone,
//     })),
//     (darkWaveTween = TweenMax.to([darkWaveLine], 4.5, {
//       x: -782.6,
//       repeat: -1,
//       ease: Linear.easeNone,
//     }))

//     waveTimeline.add(lightWaveTween, 0),
//     waveTimeline.add(midWaveTween, 0),
//     waveTimeline.add(darkWaveLine, 0),
//     (mainTimeline = new TimelineMax()),
//     mainTimeline.timeScale(2)
//   );
// };
