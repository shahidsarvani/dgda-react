import { gsap } from "gsap";

function move_wadi_left_en() { 
    gsap.to(".diriyah_room_page", {
        opacity: 0,
        display: 'none',
        duration: 1,
    });
    gsap.to(".wadi_e_safar_room_page", {
        opacity: 1,
        display: 'block',
        duration: 1,
    });
    gsap.to(".logo_diriyah .ar_logo", {
        opacity: 0,
        display: 'none',
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
      gsap.to(".home_ar .logo_diriyah", {
        left: 'unset',
        right: '0',
        duration: 1,
        delay: 0,
        transform: 'translate(0%, 0%)'
      });
      gsap.to(".home_ar .eng_logo", {
        display: 'none',
        duration: 0,
        delay: 0,
        transform: 'translate(0%, 0%)'
      });
      gsap.to(".home_ar .lang-switcher", {
        opacity: 1,
        display: 'block',
        visibility: 'visible',
        duration: 1,
        delay: 0,
      })
      gsap.to(".lang-switcher", {
        opacity: 1,
        display: 'block',
        visibility: 'visible',
        duration: 1,
        delay: 1,
      })
      gsap.to(".dg_rs_screen", {
        opacity: 0,
        x: -3000,
        duration: 1
      });
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
      gsap.fromTo(".header-menu-elements", {
        opacity: 0,
        x: 3000,
        duration: 1,
        visibility: 'hidden',
      }, {
        opacity: 1,
        display: 'flex',
        x: 0,
        duration: 1,
        visibility: 'visible',
      });
    
      ///////////////////arabic animations///////////////////////
      gsap.to(".home_ar .dg_rs_screen", {
        opacity: 0,
        x: 3000,
        duration: 1
      });
      gsap.fromTo(".home_ar .dg_afrs_screen", {
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
      gsap.fromTo(".home_ar .header-menu-elements", {
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
      gsap.to(".home_ar .dg_rs_screen", {
        opacity: 0,
        x: 3000,
        duration: 1
      });
      gsap.fromTo(".body_ar .dg_ft_cont_ar", {
        bottom: -220,
      }, {
        bottom: 0,
      });
      gsap.fromTo("body_en .dg_ft_cont_ar", {
        bottom: -220,
      }, {
        bottom: -220,
      });
      gsap.fromTo(".dg_ft_cont_en", {
        bottom: -220,
      }, {
        bottom: 0,
        opacity: 1,
      });
}

export default move_wadi_left_en;