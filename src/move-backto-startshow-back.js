import { gsap } from "gsap";

function move_backto_startshow_back(param) {
  gsap.to("." + param , {
    opacity: 1,
    x: 0,
    visibility: 'visible',
    duration: 1,
  });
    // gsap.to(".dg_rs_screen", {
    //     opacity: 0,
    //     x: -3000,
    //     duration: 1
    //   });
    //   gsap.to(".dg_sc_screen", {
    //     opacity: 1,
    //     x: 0,
    //     duration: 1,
    //     visibility: 'visible',
    //   });
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
  }

  export default move_backto_startshow_back;