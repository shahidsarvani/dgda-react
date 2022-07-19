import { gsap } from "gsap";
import {addHistory} from './history';

function move_main_left() {
  addHistory('move_main_left');
    ///////////////////english animations///////////////////////
    gsap.to(".title_show_control", {
      opacity: 0,
      display: 'none',
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".title_night_scene", {
      opacity: 0,
      display: 'none',
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".title_basement_floors", {
      opacity: 0,
      display: 'none',
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".title_lights", {
      opacity: 0,
      display: 'none',
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".title_vwalls", {
      opacity: 1,
      display: 'none',
      duration: 1,
      visibility: 'hidden',
    });
  
  
    gsap.to(".main_ar", {
      opacity: 1,
      display: 'flex',
      duration: 1,
      visibility: 'visible',
    });
    gsap.to(".header-arabic-wrap .logo_diriyah", {
      width: '100%',
      x: 0,
      top: 0,
      left: 'unset',
      right: 0,
      padding: '118px 120px 0px 0px',
    });
    gsap.to(".header-arabic-wrap .logo_diriyah .ar_logo", {
      display: 'block',
      opacity: 1,
      right: 0,
      duration: 1,
    });
    gsap.to(".header-arabic-wrap .logo_diriyah .eng_logo", {
      display: 'none',
      opacity: 0,
      right: 0,
      duration: 1,
    });
    gsap.to("header-wrap .lang-switcher", {
      opacity: 1,
      visibility: 'visible',
      duration: 1,
      delay: 1,
      display: 'block',
    })
    gsap.to("header-arabic-wrap .lang-switcher", {
      opacity: 1,
      visibility: 'visible',
      duration: 1,
      delay: 1,
    })
    ///////////////////english animations///////////////////////
    gsap.fromTo(".main_en", {
      opacity: 1,
      x: 0,
      duration: 1,
      visibility: 'visible',
    }, {
      opacity: 0,
      x: -3000,
      display: 'none',
      duration: 1,
      visibility: 'hidden',
    });
    gsap.fromTo(".main_en .dg_afrs_screen", {
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
    gsap.fromTo(".main_en .dg_sm_screen", {
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
    gsap.fromTo(".main_en .ml_lights_screen", {
      opacity: 1,
      x: -3000,
      duration: 1,
      visibility: 'visible',
    }, {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.fromTo(".main_en .dg_sc_screen", {
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
    gsap.fromTo(".main_en .dg_ss_screen", {
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
    gsap.fromTo(".main_en .dg_bf_screen", {
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
    gsap.fromTo(".main_en .dg_vwalls_screen", {
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
    gsap.fromTo(".main_en .dg_lights_screen", {
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

    gsap.fromTo(".header-wrap", {
      opacity: 1,
      x: 0,
      duration: 1,
      visibility: 'visible',
    }, {
      opacity: 0,
      x: -3000,
      display: 'none',
      duration: 1,
      visibility: 'hidden',
    });
  
    
    ////////////// Arabic Movement /////////////
    gsap.fromTo(".header-arabic-wrap", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    }, {
      opacity: 1,
      x: 0,
      duration: 1,
      display: 'block',
      position: 'absolute',
      width: '100%',
      visibility: 'visible',
    });
    gsap.fromTo(".main_ar .dg_afrs_screen", {
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
    gsap.fromTo(".main_ar .dg_sm_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    }, {
      opacity: 1,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.fromTo(".main_ar .ml_lights_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    }, {
      opacity: 1,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.fromTo(".main_ar .dg_bf_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    }, {
      opacity: 1,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.fromTo(".main_ar .dg_ss_screen", {
      opacity: 1,
      x: 0,
      duration: 1,
      visibility: 'hidden',
    }, {
      opacity: 1,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.fromTo(".main_ar .dg_sc_screen", {
      opacity: 1,
      x: 0,
      duration: 1,
      visibility: 'hidden',
    }, {
      opacity: 1,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.fromTo(".main_ar .dg_vwalls_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    }, {
      opacity: 1,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.fromTo(".main_ar .dg_lights_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    }, {
      opacity: 1,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.fromTo(".main_ar", {
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
  
    //////// footer movement////////////
    gsap.fromTo(".dg_ft_cont_ar", {
      opacity: 0,
      bottom: -220,
      visibility: 'hidden',
    }, {
      bottom: 0,
      opacity: 1,
      visibility: 'visible',
    });
    gsap.fromTo(".dg_ft_cont_en", {
      opacity: 1,
      bottom: 0,
      visibility: 'visible',
    }, {
      opacity: 0,
      bottom: -220,
      visibility: 'hidden',
    });
  }

  export default move_main_left;