import { gsap } from "gsap";

function move_start_modellights_right_back(param) {
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
  //   opacity: 0,
  //   x: -3000,
  //   duration: 1,
  //   visibility: 'hidden',
  // });
  gsap.fromTo(".dg_ss_screen", {
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
}

export default move_start_modellights_right_back;