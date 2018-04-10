particlesJS("particles-js", {
  particles: {
      number: {
          value: 48, density: {
              enable: !1, value_area: 800
          }
      }
      , color: {
          value: "#ffffff"
      }
      , shape: {
          type:"circle", stroke: {
              width: 0, color: "#000000"
          }
          , polygon: {
              nb_sides: 5
          }
          , image: {
              src: "img/github.svg", width: 100, height: 100
          }
      }
      , opacity: {
          value: 0.15232414578222467, random:!1, anim: {
              enable: !0, speed: 1, opacity_min: .1, sync: !0
          }
      }
      , size: {
          value: 10, random:!1, anim: {
              enable: !0, speed: 40, size_min: .1, sync: !0
          }
      }
      , line_linked: {
          enable: !0, distance: 500, color: "#ffffff", opacity: .4, width: 2
      }
      , move: {
          enable:!1, speed:1, direction:"bottom", random:!0, straight:!1, out_mode:"out", bounce:!0, attract: {
              enable: !0, rotateX: 1202.559045649142, rotateY: 1200
          }
      }
  }
  , interactivity: {
      detect_on:"canvas", events: {
          onhover: {
              enable: !1, mode: "bubble"
          }
          , onclick: {
              enable: !0, mode: "push"
          }
          , resize:!1
      }
      , modes: {
          grab: {
              distance:400, line_linked: {
                  opacity: 0.5
              }
          }
          , bubble: {
              distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3
          }
          , repulse: {
              distance: 200, duration: .4
          }
          , push: {
              particles_nb: 4
          }
          , remove: {
              particles_nb: 2
          }
      }
  }
  , retina_detect:!1
}
);