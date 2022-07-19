import { gsap } from "gsap";

function move_homeactive_en_back() {
    gsap.to(".home_ar", {
        opacity: 1,
        display: 'block',
        duration: 1,
        visibility: 'visible',
    });
    gsap.to(".title_show_control", {
        opacity: 1,
        display: 'block',
        duration: 1,
        visibility: 'visible',
    });
    gsap.to(".title_night_scene", {
        opacity: 1,
        display: 'block',
        duration: 1,
        visibility: 'visible',
    });
    gsap.to(".title_basement_floors", {
        opacity: 1,
        display: 'block',
        duration: 1,
        visibility: 'visible',
    });
    gsap.to(".logo_diriyah .ar_logo", {
        opacity: 0,
        display: 'none',
        left: '0',
        duration: 1,
        delay: 0,
        transform: 'translate(0%, 0%)'
    })
    gsap.fromTo(".header-menu-elements", {
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
    gsap.to(".logo_diriyah", {
        left: '0',
        duration: 1,
        delay: 0,
        transform: 'translate(0%, 0%)'
    })
    gsap.to(".lang-switcher", {
        opacity: 1,
        visibility: 'visible',
        duration: 1,
        delay: 0,
    })
    gsap.fromTo(".dg_rs_screen", {
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
    gsap.to(".dg_afrs_screen", {
        opacity: 1,
        x: 0,
        duration: 1,
        visibility: 'visible',
    });
    gsap.to(".dg_lights_screen", {
        opacity: 1,
        x: 0,
        duration: 1,
        visibility: 'visible',
    });
    gsap.to(".dg_sm_screen", {
        opacity: 1,
        x: 0,
        duration: 1,
        visibility: 'visible',
    });
    gsap.to(".dg_sc_screen", {
        opacity: 1,
        x: 0,
        duration: 1,
        visibility: 'visible',
    });
    gsap.to(".dg_ss_screen", {
        opacity: 1,
        x: 0,
        duration: 1,
        visibility: 'visible',
    });
    gsap.to(".ml_lights_screen", {
        opacity: 1,
        x: 0,
        duration: 1,
        visibility: 'visible',
    });
    gsap.to(".dg_bf_screen", {
        opacity: 1,
        x: 0,
        duration: 1
    });
    gsap.fromTo(".dg_ft_cont_ar", {
        opacity: 0,
        bottom: -220,
        duration: 1,
    }, {
        opacity: 1,
        bottom: 0,
        duration: 1,
    });
    gsap.fromTo(".dg_ft_cont_en", {
        opacity: 0,
        bottom: -220,
        duration: 1,
    }, {
        opacity: 1,
        bottom: 0,
        duration: 1,
    });
    gsap.fromTo(".dg_vwalls_screen", {
        opacity: 0,
        x: 3000,
        duration: 1,
    }, {
        opacity: 1,
        x: 0,
        duration: 1,
    });
}

export default move_homeactive_en_back;