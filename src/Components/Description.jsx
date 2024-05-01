import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "./useMousePosition";
import styles from "./Description.module.css";



function Description() {
  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();

  const size = isHovered ? 400 : 40;
  return (
        <main className={styles.main}>
          <motion.div
            className={styles.mask}
            animate={{
              WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
    
              WebkitMaskSize: `${size}px`,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
          >
            <p
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              The 911 is known for its sleek design, powerful engines, and handling capabilities. The 911 is highly valued by collectors and enthusiasts alike and is considered a classic among sports cars.
            </p>
          </motion.div>
    
          <div className={styles.body}>
            <p>
                The <span>Porsche 911</span> is a sports car produced by Porsche. It was first introduced in 1963 and has since become one of the most iconic cars in the world.
            </p>
          </div>
        </main>

  );
}

export default Description;

