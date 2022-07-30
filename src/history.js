import move_homeactive_ar_back from './move-homeactive-ar-back';
import move_homeactive_en_back from './move-homeactive-en-back';
import move_left_ar_back from './move-left-ar-back';
import move_left_en_back from './move-left-en-back';
import move_lightsactive_back from './move-lightsactive-back';
import move_main_left_back from './move-main-left-back';
import move_main_right_back from './move-main-right-back';
import move_showmodelactive_back from './move-showmodelactive_back';
import move_start_basementfloors_left_back from './move-start-basementfloors-left-back';
import move_start_basementfloors_right_back from './move-start-basementfloors-right-back';
import move_start_modellights_left_back from './move-start-modellights-left-back';
import move_start_modellights_right_back from './move-start-modellights-right-back';
import move_startshow_left_back from './move-startshow-left-back';
import move_startshow_right_back from './move-startshow-right-back';
import videowallsactive_back from './move-videowallsactive-back';
import move_vwalls_right_back from './move-vwalls-right-back';
import move_wadi_left_ar_back from './move-wadi-left-ar-back';
import move_wadi_left_en_back from './move-wadi-left-en-back';
import move_backto_startshow_back from './move-backto-startshow-back';

//import move_backto_startshow_back from './move-backto-startshow';
export function addHistory(func, pram = '') {
  //first get storage
  let storage = JSON.parse(window.localStorage.getItem('gdtd_history'));
  if (storage === null) storage = [];
  storage = [...storage, {'func': func, 'pram': pram}];
  window.localStorage.setItem('gdtd_history', JSON.stringify(storage));
}
export function removeHistory() {
  let storage = JSON.parse(window.localStorage.getItem('gdtd_history'));
  if (!storage || storage.length == 1) return;
  //if(Array.isArray(storage.func)) {
    let popped = storage.pop();
    let lastele = storage[storage.length - 1].pram;

    if(lastele == null || lastele === '') lastele = popped.param;

    console.log(popped);
    switch (popped.func) {
      case 'move_main_left':
        move_main_left_back(lastele);
        break;
      case 'move_main_right':
        move_main_right_back(lastele);
        break;
      case 'move_left_en':
        move_left_en_back(lastele);
        break;
      case 'move_left_ar':
        move_left_ar_back(lastele);
        break;
      case 'move_homeactive_en':
        move_homeactive_en_back(lastele);
        break;
      case 'move_homeactive_ar':
        move_homeactive_ar_back(lastele);
        break;
      case 'move_showmodelactive':
        move_showmodelactive_back(lastele);
        break;
      case 'videowallsactive':
        videowallsactive_back(lastele);
        break;
      case 'move_lightsactive':
        move_lightsactive_back(lastele);
        break;
      case 'move_startshow_left':
        console.log('moving startshow left');
        move_startshow_left_back(lastele);
        break;
      case 'move_startshow_right':
        move_startshow_right_back(lastele);
        break;
      case 'move_start_modellights_left':
        move_start_modellights_left_back(lastele);
        break;
      case 'move_start_modellights_right':
        move_start_modellights_right_back(lastele);
        break;
      case 'move_start_basementfloors_left':
        move_start_basementfloors_left_back(lastele);
        break;
      case 'move_start_basementfloors_right':
        move_start_basementfloors_right_back(lastele);
        break;
      case 'move_vwalls_right':
        move_vwalls_right_back(lastele);
        break;
      case 'move_wadi_left_ar':
        move_wadi_left_ar_back(lastele);
        break;
      case 'move_wadi_left_en':
        move_wadi_left_en_back(lastele);
        break;
      case 'move_backto_startshow':
        move_backto_startshow_back(lastele);
        break;
      default:
        //move_backto_startshow_back(lastele);
        break;
    }

    window.localStorage.setItem('gdtd_history', JSON.stringify(storage));
  //}
}

export function clearHistory() {
  let storage = [];
  window.localStorage.setItem('gdtd_history', JSON.stringify(storage));
}
