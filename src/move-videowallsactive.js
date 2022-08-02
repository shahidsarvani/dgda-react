import { gsap } from "gsap";
import {addHistory} from './history';
 
function videowallsactive() {
  addHistory('videowallsactive', 'dg_vwalls_screen');
  gsap.to(".dg_afrs_screen", {
      opacity: 0,
      x: -3000,
      visibility: 'hidden',
      duration: 1,
  });

  gsap.to(".title_show_control previous_screen", {
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
    opacity: 0,
    display: 'none',
    duration: 1,
    visibility: 'hidden',
  });
  gsap.to(".title_vwalls", {
    opacity: 1,
    display: 'block',
    duration: 1,
    visibility: 'visible',
  });

  gsap.to(".dg_lights_screen", {
    opacity: 0,
    x: 3000,
    visibility: 'hidden',
    duration: 1,
  });
  
  gsap.to(".dg_sm_screen", {
    opacity: 0,
    x: 3000,
    visibility: 'hidden',
    duration: 1,
  });
  gsap.to(".ml_lights_screen", {
    opacity: 0,
    x: -3000,
    visibility: 'hidden',
    duration: 1,
  });
  
  gsap.to(".dg_sc_screen", {
    opacity: 0,
    x: -3000,
    visibility: 'hidden',
    duration: 1,
  });
  gsap.to(".dg_ss_screen", {
    opacity: 0,
    x: -3000,
    visibility: 'hidden',
    duration: 1,
  });
  gsap.fromTo(".dg_vwalls_screen", {
    opacity: 0,
    x: -3000,
    duration: 1,
    visibility: 'hidden',
  }, {
    opacity: 1,
    x: 0,
    duration: 1,
    visibility: 'visible',
  });
}

export default videowallsactive;