import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Picture1 from "../assets/images/p1.jpg";
import Picture2 from "../assets/images/p2.jpg";
import Picture3 from "../assets/images/p3.jpg";
import Picture4 from "../assets/images/p4.jpg";
import Picture5 from "../assets/images/p5.jpg";
import Picture6 from "../assets/images/p6.jpg";
import Picture7 from "../assets/images/p7.jpg";

function Parallax() {
  const ParallaxContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ParallaxContainer,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    { src: Picture1, scale: scale4 },
    { src: Picture2, scale: scale5 },
    { src: Picture3, scale: scale6 },
    { src: Picture4, scale: scale5 },
    { src: Picture5, scale: scale9 },
    { src: Picture6, scale: scale6 },
    { src: Picture7, scale: scale9 },
  ];

  return (
    <div ref={ParallaxContainer} className="ParallaxContainer">
      <div className="sticky">
        {pictures.map(({ src, scale }, index) => (
          <motion.div style={{ scale }} key={index} className="el">
            <div className="imageContainer">
              <img src={src} alt="image" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Parallax;
