import { gsap } from "gsap";
import {addHistory} from './history';
 
function move_startshow_left() {
  addHistory('move_startshow_left', 'dg_sc_screen');
  gsap.to(".title_show_control", {
    opacity: 1,
    display: 'block',
    duration: 1,
    visibility: 'visible',
  });
  gsap.to(".dg_rs_screen", {
    opacity: 0,
    x: -6000,
    duration: 1
  });
  gsap.to(".dg_afrs_screen", {
    opacity: 0,
    x: -3000,
    duration: 1
  });
  gsap.fromTo(".dg_sc_screen", {
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

  ///////////////////arabic animations///////////////////////
  gsap.to(".home_ar .dg_rs_screen", {
    opacity: 0,
    x: 6000,
    duration: 1
  });
  gsap.to(".home_ar .dg_afrs_screen", {
    opacity: 0,
    x: 3000,
    duration: 1
  });
  gsap.fromTo(".home_ar .dg_sc_screen", {
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

export default move_startshow_left;