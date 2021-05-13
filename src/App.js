import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Particles from "react-particles-js";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Particles
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
              },
            },
            color: {
              value: "#6b6f72",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 12,
              },
            },
            opacity: {
              value: 0.025,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#6b6f72",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Projects} path="/projects" />
        <Route component={Contact} path="/contact" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
