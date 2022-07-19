import { gsap } from "gsap";

function move_wadi_left_en_back() { 
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
      gsap.to(".home_ar .logo_diriyah", {
        left: 'unset',
        right: '0',
        duration: 1,
        delay: 0,
        transform: 'translate(0%, 0%)'
      });
      gsap.to(".home_ar .eng_logo", {
        display: 'block',
        duration: 0,
        delay: 0,
        transform: 'translate(0%, 0%)'
      });
      gsap.to(".home_ar .lang-switcher", {
        opacity: 0,
        display: 'none',
        visibility: 'hidden',
        duration: 1,
        delay: 0,
      })
      gsap.to(".lang-switcher", {
        opacity: 0,
        display: 'none',
        visibility: 'hidden',
        duration: 1,
        delay: 1,
      })
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
        display: 'flex',
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
      gsap.fromTo(".home_ar .dg_afrs_screen", {
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
      gsap.fromTo(".home_ar .header-menu-elements", {
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
      gsap.to(".home_ar .dg_rs_screen", {
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
        opacity: 1,
        
      }, {
        bottom: -220,
      });
}

export default move_wadi_left_en_back;