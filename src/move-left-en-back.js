import { gsap } from "gsap";

function move_left_en_back() {
  gsap.to(".diriyah_room_page", {
    opacity: 0,
    display: 'none',
    duration: 1,
  });
  gsap.to(".wadi_e_safar_room_page", {
      opacity: 1,
      display: 'none',
      duration: 1,
  });
  gsap.to(".logo_diriyah .ar_logo", {
    opacity: 1,
    display: 'block',
    left: '0',
    duration: 0,
    delay: 0,
    transform: 'translate(0%, 0%)'
  });
  gsap.to(".logo_diriyah", {
    left: '0',
    duration: 1,
    delay: 0,
    transform: 'translate(0%, 0%)'
  });
  gsap.to(".header-arabic-wrap .logo_diriyah", {
    left: 'unset',
    right: '0',
    duration: 1,
    delay: 0,
    transform: 'translate(0%, 0%)'
  });
  gsap.to(".header-arabic-wrap .eng_logo", {
    display: 'block',
    duration: 0,
    delay: 0,
    transform: 'translate(0%, 0%)'
  });
  gsap.to(".header-arabic-wrap .lang-switcher", {
    opacity: 0,
    display: 'none',
    visibility: 'hidden',
    duration: 1,
    delay: 0,
  })
  gsap.to(".lang-switcher", {
    opacity: 0,
    visibility: 'hidden',
    duration: 1,
    delay: 1,
  })
  gsap.fromTo(".header-arabic-wrap .header-menu-elements", {
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
  gsap.to(".dg_rs_screen", {
    opacity: 1,
    x: 0,
    duration: 1
  });
  gsap.fromTo(".dg_afrs_screen", {
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
  gsap.fromTo(".header-menu-elements", {
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
  gsap.to(".main_ar .dg_rs_screen", {
    opacity: 1,
    x: 0,
    duration: 1
  });
  gsap.fromTo(".main_ar .dg_afrs_screen", {
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
  
  gsap.to(".main_ar .dg_rs_screen", {
    opacity: 1,
    x: 0,
    duration: 1
  });
  gsap.fromTo(".body_ar .dg_ft_cont_ar", {
    bottom: 0,
  }, {
    bottom: -220,
  });
  gsap.fromTo("body_en .dg_ft_cont_ar", {
    bottom: -220,
  }, {
    bottom: -220,
  });
  gsap.fromTo(".dg_ft_cont_en", {
    bottom: 0,
  }, {
    bottom: -220,
    opacity: 0,
  });
}

export default move_left_en_back;