import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Parallax from "../Components/Parallax";

function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="main">
      <Parallax />
    </div>
  );
}

export default Home;
