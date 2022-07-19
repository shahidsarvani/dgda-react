import { gsap } from "gsap";
import {addHistory} from './history';
 
function move_start_modellights_right() {
  addHistory('move_start_modellights_right');
  gsap.to(".dg_rs_screen", {
    opacity: 0,
    x: -3000,
    duration: 1
  });
  gsap.to(".dg_afrs_screen", {
    opacity: 1,
    x: 0,
    duration: 1,
    visibility: 'visible',
  });
  gsap.fromTo(".dg_ss_screen", {
    opacity: 1,
    x: 0,
    duration: 1,
    visibility: 'visible',
  }, {
    opacity: 0,
    x: 3000,
    duration: 1,
    visibility: 'hidden',
  });

  ///////////////////arabic animations///////////////////////
  gsap.to(".home_ar .dg_rs_screen", {
    opacity: 0,
    x: 3000,
    duration: 1
  });
  gsap.to(".home_ar .dg_afrs_screen", {
    opacity: 1,
    x: 0,
    duration: 1,
    visibility: 'visible',
  });
  gsap.fromTo(".home_ar .dg_ss_screen", {
    opacity: 1,
    x: 0,
    duration: 1,
    visibility: 'visible',
  }, {
    opacity: 0,
    x: -3000,
    duration: 1,
    visibility: 'hidden',
  });
  
}

export default move_start_modellights_right;