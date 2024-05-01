import React, { useEffect } from "react";
import Introduction from "../Components/Introduction";
import Home from "./Home";
import Slider from "../Components/Slider";
import Description from "../Components/Description";

function Intro() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div>
      <Introduction />
      <Description />
      <Home />
      <Slider />
    </div>
  );
}

export default Intro;
