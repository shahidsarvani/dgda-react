import { gsap } from "gsap";

function move_startshow_left_back(param) {
  
  gsap.to(".title_show_control", {
    opacity: 1,
    display: 'none',
    duration: 1,
    visibility: 'visible',
  });

  gsap.to(".title_basement_floors", {
    opacity: 1,
    display: 'none',
    duration: 1,
    visibility: 'visible',
  });

  gsap.to(".title_night_scene", {
    opacity: 1,
    display: 'none',
    duration: 1,
    visibility: 'visible',
  });
  
  gsap.to("." + param , {
    opacity: 1,
    x: 0,
    visibility: 'visible',
    duration: 1,
  });

  // gsap.to(".dg_rs_screen", {
  //   opacity: 0,
  //   x: -6000,
  //   duration: 1
  // });

  gsap.fromTo(".dg_afrs_screen", {
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

  gsap.fromTo(".dg_sc_screen", {
    opacity: 1,
    x: 3000,
    duration: 1,
    visibility: 'visible',
  }, {
    opacity: 0,
    x: 3000,
    duration: 1,
    visibility: 'hidden',
  });

  gsap.fromTo(".dg_bf_screen", {
    opacity: 1,
    x: 3000,
    duration: 1,
    visibility: 'visible',
  }, {
    opacity: 0,
    x: 3000,
    duration: 1,
    visibility: 'hidden',
  });

  gsap.fromTo(".dg_vwalls_screen", {
    opacity: 1,
    x: 3000,
    duration: 1,
    visibility: 'visible',
  }, {
    opacity: 0,
    x: 3000,
    duration: 1,
    visibility: 'hidden',
  });  
  
}

export default move_startshow_left_back;