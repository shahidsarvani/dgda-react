import { gsap } from "gsap";

function splash_video_fade() {
  gsap.to(".dg_vw_screen", {
    display: 'none',
    duration: 1
  });
  gsap.to(".logo_diriyah", {
    padding: '118px 0 0px 120px',
    top: '0',
    width: '100%',
    duration: 1,
    delay: 1,
    transform: 'translate(-50%, 0%)'
  });
  gsap.to(".logo_diriyah", {
    left: '36%',
    duration: 1,
    delay: 2,
    transform: 'translate(0%, 0%)'
  });
  gsap.to(".home_ar .logo_diriyah", {
    padding: '118px 120px 0px 0px',
    top: '0',
    width: '100%',
    duration: 1,
    delay: 1,
    transform: 'translate(50%, 0%)'
  });
  gsap.to(".home_ar .logo_diriyah", {
    left: 'unset',
    right: '0',
    duration: 1,
    delay: 2,
    transform: 'translate(0%, 0%)'
  });
  gsap.to("#header", {
    position: 'absolute',
    delay: 3,
  });
  gsap.from(".dg_rs_screen", {
    opacity: 1,
    x: 3000,
    duration: 1,
    delay: 2
  });
  gsap.fromTo(".overlay_sc", {
    opacity: 1,
    x: 3000,
    duration: 1,
    delay: 2
  }, {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 2
  });
  gsap.fromTo(".overlay_sc", {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 2
  }, {
    opacity: 1,
    x: -3000,
    duration: 1,
    delay: 3
  });
  

}

export default splash_video_fade;