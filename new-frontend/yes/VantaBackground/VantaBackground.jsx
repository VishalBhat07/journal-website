import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three"; // Vanta requires THREE to be in scope
import RINGS from "vanta/src/vanta.rings"; // If installed via npm



function VantaBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {

      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x000000,
          color: 0xff0000,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed", // Sit on top of the page layout
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Send behind everything
        overflow: "hidden",
      }}
    />
  );
}

export default VantaBackground;
