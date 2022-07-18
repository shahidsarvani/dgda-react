import { gsap } from "gsap";

function move_step_back() {
  gsap.fromTo(".activate_prev", {
    opacity: 0,
    x: -3000,
    duration: 1,
  }, {
    opacity: 1,
    x: 0,
    duration: 1,
  });
}

export default move_step_back;