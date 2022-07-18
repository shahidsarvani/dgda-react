import { gsap } from "gsap";
class customFun {
  constructor(lang = 'en') {                // NOTE: size and brand are arguments
    this.lang = lang;
  }
  changeLangMeta(lang) {
    document.documentElement.lang = (lang) ? lang : 'en';
    this.runAnimation();
  }
  runAnimation() {
    gsap.fromTo("#en_version", {
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
  }
}

export default customFun