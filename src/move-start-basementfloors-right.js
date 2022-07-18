import { gsap } from "gsap";

function move_start_basementfloors_right() {
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
  gsap.fromTo(".dg_bf_screen", {
    opacity: 1,
    x: 0,
    duration: 1,
    visibility: 'visible',
  }, {
    opacity: 0,
    x: 3000,
    duration: 1,
    visibility: 'visible',
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
  gsap.fromTo(".home_ar .dg_bf_screen", {
    opacity: 1,
    x: 0,
    duration: 1,
    visibility: 'visible',
  }, {
    opacity: 0,
    x: -3000,
    duration: 1,
    visibility: 'visible',
  });
  
}

export default move_start_basementfloors_right;