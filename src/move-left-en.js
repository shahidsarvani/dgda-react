import { gsap } from "gsap";

function move_left_en() {
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
  // gsap.to(".header-wrap.header_ar .logo_diriyah .ar_logo", {
  //   opacity: 1,
  //   display: 'block',
  //   left: 'unset',
  //   right: 0,
  //   duration: 0,
  //   delay: 0,
  //   transform: 'translate(0%, 0%)'
  // });

  

  // gsap.to(".header-wrap.header_ar .logo_diriyah .ar_logo", {
  //   opacity: 1,
  //   display: 'block',
  //   left: '0',
  //   duration: 0,
  //   delay: 0,
  //   transform: 'translate(0%, 0%)'
  // });

  // gsap.to(".header-wrap.header_en .logo_diriyah .eng_logo", {
  //   display: 'block',
  //   opacity: 1,
  //   duration: 0,
  //   delay: 0,
  //   transform: 'translate(0%, 0%)'
  // });

  // gsap.to(".header-wrap.header_ar .logo_diriyah .eng_logo", {
  //   display: 'none',
  //   opacity: 0,
  //   duration: 0,
  //   delay: 0,
  //   transform: 'translate(0%, 0%)'
  // });

  // gsap.to(".header-wrap.header_en .logo_diriyah .ar_logo", {
  //   opacity: 0,
  //   display: 'none',
  //   left: '0',
  //   duration: 0,
  //   delay: 0,
  //   transform: 'translate(0%, 0%)'
  // });

  
  
  gsap.to(".header-wrap .logo_diriyah", {
    right: 'unset',
    left: 0,
    duration: 1,
    delay: 0,
    transform: 'translate(0%, 0%)',
    padding: '118px 0px 0px 120px',
  });
  
  
  gsap.to(".header-wrap.header_ar .lang-switcher", {
    opacity: 1,
    display: 'block',
    visibility: 'visible',
    duration: 1,
    delay: 0,
  })
  gsap.to(".header-wrap .lang-switcher", {
    opacity: 1,
    visibility: 'visible',
    duration: 1,
    delay: 1,
  })
  gsap.fromTo(".header-wrap.header_ar .header-menu-elements", {
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
  
  gsap.fromTo(".header-wrap.header_en .header-menu-elements", {
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
  gsap.fromTo(".header-wrap.header_ar .header-menu-elements", {
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
  
  gsap.to(".dg_rs_screen", {
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
    bottom: 0,
  });
  gsap.fromTo(".dg_ft_cont_en", {
    bottom: -220,
  }, {
    bottom: 0,
    opacity: 1,
  });

  

  // gsap.to(".dg_sm_screen", {
  //   opacity: 0,
  //   x: 3000,
  //   duration: 1
  // });

  // gsap.to(".basementfloors_screen", {
  //   opacity: 0,
  //   x: 3000,
  //   duration: 1
  // });
  // gsap.to(".video_walls_screen_wrap", {
  //   opacity: 0,
  //   x: 3000,
  //   duration: 1
  // });
  // gsap.to(". lights_screen_wrap", {
  //   opacity: 0,
  //   x: 3000,
  //   duration: 1
  // });
  
  // gsap.to(".modelshow_screen", {
  //   opacity: 0,
  //   x: 3000,
  //   duration: 1
  // });
  // gsap.to(".show_controls_screen", {
  //   opacity: 0,
  //   x: 3000,
  //   duration: 1
  // });
  // gsap.to(".model_lights_screen", {
  //   opacity: 0,
  //   x: 3000,
  //   duration: 1
  // });
  gsap.to(".dg_sm_screen", {
    opacity: 0,
    x: 3000,
    duration: 1
  });


}

export default move_left_en;