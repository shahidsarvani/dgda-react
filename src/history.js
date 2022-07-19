import move_left_en_back from './move-left-en-back';
import move_homeactive_en_back from './move-homeactive-en-back';
import move_homeactive_ar_back from './move-homeactive-ar-back';
import move_showmodelactive_back from './move-showmodelactive_back';
import videowallsactive_back from './move-videowallsactive-back';
import move_lightsactive_back from './move-lightsactive-back';
import move_startshow_left_back from './move-startshow-left-back';
import move_start_modellights_left_back from './move-start-modellights-left-back';
import move_start_basementfloors_left_back from './move-start-basementfloors-left-back';
//import move_backto_startshow_back from './move-backto-startshow';
export function addHistory(func) {
  //first get storage
  let storage = JSON.parse(window.localStorage.getItem('gdtd_history'));
  if (storage === null) storage = [];
  storage.push(func);
  window.localStorage.setItem('gdtd_history', JSON.stringify(storage));
}
export function removeHistory() {
  let storage = JSON.parse(window.localStorage.getItem('gdtd_history'));
  if(Array.isArray(storage)) {
    let popped = storage.pop();
    switch (popped) {
      case 'move_left_en':
        move_left_en_back();
      case 'move_homeactive_en':
        move_homeactive_en_back();
      case 'move_homeactive_ar':
        move_homeactive_ar_back();
      case 'move_showmodelactive':
        move_showmodelactive_back();
      case 'videowallsactive':
        videowallsactive_back();
      case 'move_lightsactive':
        move_lightsactive_back();
      case 'move_startshow_left':
        move_startshow_left_back();
      case 'move_start_modellights_left':
        move_start_modellights_left_back();
      case 'move_start_basementfloors_left':
        move_start_basementfloors_left_back();
      default:
    }

    window.localStorage.setItem('gdtd_history', JSON.stringify(storage));
  }
}

export function clearHistory() {
  let storage = [];
  window.localStorage.setItem('gdtd_history', JSON.stringify(storage));
}
