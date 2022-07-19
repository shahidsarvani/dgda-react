import { gsap } from "gsap";
import {addHistory} from './history';
 
function move_lightsactive() {
  addHistory('move_lightsactive', 'dg_lights_screen');
    gsap.to(".dg_vwalls_screen", {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".dg_afrs_screen", {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".dg_sc_screen", {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".dg_ss_screen", {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.fromTo(".dg_lights_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    }, {
      opacity: 1,
      x: 0,
      duration: 1,
      visibility: 'visible',
    });
    gsap.to(".dg_sm_screen", {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".ml_lights_screen", {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'hidden',
    });
    // gsap.to("home_ne .ml_lights_screen", {
    //   opacity: 0,
    //   x: -3000,
    //   duration: 1,
    //   visibility: 'hidden',
    // });
    gsap.to(".dg_bf_screen", {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'hidden',
    });

    gsap.to(".title_show_control", {
      opacity: 0,
      display: 'none',
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".title_night_scene", {
      opacity: 0,
      display: 'none',
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".title_basement_floors", {
      opacity: 0,
      display: 'none',
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".title_lights", {
      opacity: 1,
      display: 'block',
      duration: 1,
      visibility: 'visible',
    });
    gsap.to(".title_vwalls", {
      opacity: 0,
      display: 'none',
      duration: 1,
      visibility: 'hidden',
    });

    // ////////////////////// ARABIC Animations
    gsap.fromTo(".home_ar .dg_lights_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    }, {
      opacity: 1,
      x: 0,
      duration: 1,
      visibility: 'visible',
    });
    gsap.to(".home_ar .dg_vwalls_screen", {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'visible',
    });
    gsap.to(".home_ar .dg_rs_screen", {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'visible',
    });
  }

  export default move_lightsactive;