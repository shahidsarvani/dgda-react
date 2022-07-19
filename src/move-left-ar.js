import { gsap } from "gsap";
import {addHistory} from './history';

function move_left_ar() {
  addHistory('move_left_ar', 'dg_afrs_screen');
  gsap.to(".diriyah_room_page", {
    opacity: 1,
    display: 'block',
    duration: 1,
  });
  gsap.to(".wadi_e_safar_room_page", {
      opacity: 0,
      display: 'none',
      duration: 1,
  });
  gsap.to(".header-wrap.header_ar .logo_diriyah", {
    left: 'unset',
    right: '0',
    duration: 1,
    delay: 0,
    transform: 'translate(0%, 0%)',
    padding: '118px 120px 0px 0px',
  });
  gsap.to(".header_ar .lang-switcher", {
    opacity: 1,
    display: 'block',
    visibility: 'visible',
    duration: 1,
    delay: 0,
  })
  gsap.to(".lang-switcher", {
    opacity: 1,
    visibility: 'visible',
    duration: 1,
    delay: 1,
  })
  gsap.to(".lang-switcher", {
    opacity: 1,
    visibility: 'visible',
    duration: 1,
    delay: 1,
  });

  ///////////////////arabic animations///////////////////////
  gsap.to(".dg_rs_screen", {
    opacity: 0,
    x: 3000,
    duration: 1
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
  gsap.fromTo(".header-wrap .header-menu-elements", {
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
  
  gsap.to(".dg_rs_screen", {
    opacity: 0,
    x: 3000,
    duration: 1
  });
  gsap.to(".dg_sm_screen", {
    opacity: 0,
    x: 3000,
    duration: 1
  });
  
  gsap.fromTo(".dg_ft_cont_en", {
    bottom: -220,
  }, {
    bottom: 0,
  });
}

export default move_left_ar;