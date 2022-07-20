import { gsap } from "gsap";

function move_start_basementfloors_left_back(param) {
  gsap.to(".title_basement_floors", {
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

  // gsap.to(".dg_rs_screen", {
  //   opacity: 0,
  //   x: -3000,
  //   duration: 1
  // });
  // gsap.to(".dg_afrs_screen", {
  //   opacity: 1,
  //   x: 0,
  //   duration: 1,
  //   visibility: 'visible',
  // });
  gsap.fromTo(".dg_bf_screen", {
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
  
}

export default move_start_basementfloors_left_back;