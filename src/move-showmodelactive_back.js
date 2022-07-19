import { gsap } from "gsap";

function move_showmodelactive_back(param) {
    gsap.to(".title_show_control", {
        opacity: 0,
        display: 'none',
        duration: 1,
        visibility: 'visible',
      });
      gsap.to(".title_night_scene", {
        opacity: 0,
        display: 'none',
        duration: 1,
        visibility: 'visible',
      });
      gsap.to(".title_basement_floors", {
        opacity: 0,
        display: 'none',
        duration: 1,
        visibility: 'visible',
      });
      gsap.to(".title_vwalls", {
        opacity: 0,
        display: 'none',
        duration: 1,
        visibility: 'hidden',
      });
      gsap.to(".title_lights", {
        opacity: 0,
        display: 'none',
        duration: 1,
        visibility: 'hidden',
      });
      gsap.to("." + param , {
        opacity: 1,
        x: 0,
        visibility: 'visible',
        duration: 1,
      });

      // gsap.fromTo(".dg_afrs_screen", {
      //   opacity: 1,
      //   x: 0,
      //   duration: 1,
      //   visibility: 'visible',
      // }, {
      //   opacity: 0,
      //   x: -3000,
      //   duration: 1,
      //   visibility: 'hidden',
        
      // });
      // gsap.to(".dg_rs_screen", {
      //   opacity: 1,
      //   x: 0,
      //   duration: 1,
      //   visibility: 'visible',
      // });
      // gsap.to(".dg_lights_screen", {
      //   opacity: 1,
      //   x: 0,
      //   duration: 1,
      //   visibility: 'visible',
      // });
      // gsap.to(".dg_sm_screen", {
      //   opacity: 1,
      //   x: 0,
      //   duration: 1,
      //   visibility: 'visible',
      // });
      // gsap.to(".ml_lights_screen", {
      //   opacity: 1,
      //   x: 0,
      //   duration: 1,
      //   visibility: 'visible',
      // });
      // gsap.to(".dg_bf_screen", {
      //   opacity: 1,
      //   x: 0,
      //   duration: 1,
      //   visibility: 'visible',
      // });
      // gsap.to(".dg_ss_screen", {
      //   opacity: 1,
      //   x: 0,
      //   duration: 1,
      //   visibility: 'visible',
      // });
      // gsap.to(".dg_sc_screen", {
      //   opacity: 1,
      //   x: 0,
      //   duration: 1,
      //   visibility: 'visible',
      // });
      gsap.fromTo(".dg_vwalls_screen", {
        opacity: 0,
        x: 3000,
        duration: 1,
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        
      });
  }

  export default move_showmodelactive_back;