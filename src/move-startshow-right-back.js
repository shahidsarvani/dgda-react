import { gsap } from "gsap";

function move_startshow_right_back() {
  gsap.to(".dg_rs_screen", {
    opacity: 1,
    x: 0,
    duration: 1
  });
  gsap.to(".dg_sc_screen", {
    opacity: 1,
    x: 0,
    duration: 1,
    visibility: 'visible',
  });
  gsap.fromTo(".dg_sm_screen", {
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
    opacity: 1,
    x: 0,
    duration: 1
  });
  gsap.to(".home_ar .dg_afrs_screen", {
    opacity: 1,
    x: 0,
    duration: 1,
    visibility: 'visible',
  });
  gsap.to(".home_ar .dg_sc_screen", {
    opacity: 1,
    x: 0,
    duration: 1,
    visibility: 'hidden',
  });
  gsap.fromTo(".home_ar .dg_sm_screen", {
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

export default move_startshow_right_back;