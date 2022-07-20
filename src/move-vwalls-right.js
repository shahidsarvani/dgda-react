import { gsap } from "gsap";
import {addHistory} from './history';
 
function move_vwalls_right() {
  addHistory('move_vwalls_right');
  gsap.fromTo(".dg_vwalls_screen", {
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
  gsap.fromTo(".dg_afrs_screen", {
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

export default move_vwalls_right;