import React, { useLayoutEffect, useRef } from "react";
import styles from "./Introduction.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import IntroBG from "../assets/images/introBG.jpg";
import IntroImg from "../assets/images/introOne.png";

function Introduction() {
  const background = useRef(null);
  const introImage = useRef(null);
  const homeHeader = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: "+=1000px",
      },
    });
  }, []);

  return (
    <div ref={homeHeader} className={styles.homeHeader}>
      <div className={styles.backgroundImage} ref={background}>
        <img src={IntroBG} fill={true} priority={true} alt="background image" />
      </div>
      <div className={styles.intro}>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="5.0"
          className={styles.introImage}
        >
          <img src={IntroImg} fill={true} priority={true} alt="intro image" />
        </div>
        <h1 data-scroll data-scroll-speed="1">
          Porsche 911 <br />
          <span
            style={{
              fontFamily: "sans-serif",
              fontSize: "5vw",
              color: "#ec4e39",
              backgroundColor: "#000",
            }}
          >
            There is no Substitute”
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Introduction;
