import { gsap } from "gsap";

function move_startshow_left_back() {
  gsap.to(".title_show_control", {
    opacity: 0,
    display: 'none',
    duration: 1,
    visibility: 'hidden',
  });
  gsap.to(".dg_rs_screen", {
    opacity: 0,
    x: -3000,
    duration: 1
  });
  gsap.to(".dg_afrs_screen", {
    opacity: 1,
    x: 0,
    duration: 1
  });
  gsap.fromTo(".dg_sc_screen", {
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
    duration: 1
  });
  gsap.fromTo(".home_ar .dg_sc_screen", {
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

export default move_startshow_left_back;