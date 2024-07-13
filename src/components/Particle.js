import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.1, // Very subtle connection
          },
          move: {
            direction: "none",
            speed: 1.0, // Moderate speed
          },
          size: {
            value: 1.5,
          },
          opacity: {
            value: 0.5,
            anim: {
              enable: true,
              speed: 0.4,
              opacity_min: 0,
              sync: false,
            },
          },
          color: {
            value: "#ffffff", // White color
          },
        },
        interactivity: {
          events: {
          
            onhover: {
              enable: true,
              mode: "connect",
            },
          },
          modes: {
            bubble: {
              distance: 250,
              size: 6,
            },
            connect: {
              distance: 100, // Distance for connections
              line_linked: {
                opacity: 0.15, // Subtle connection
              },
              radius: 80,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
