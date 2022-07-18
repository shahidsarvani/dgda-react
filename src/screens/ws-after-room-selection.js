import '../bootstrap.min.css';
import '../mystyle.css';
import move_startshow_left from '../move-startshow-left';
import move_start_modellights_left from '../move-start-modellights-left';
import start_show_icon from '../images/icons/play-icon.svg';
import model_districts from '../images/icons/model-zones.svg';
import '../customjqjs';

function Wsafterroomselection() {
  return (
    <div className="after_room_selection_screen">

        <section id="dg_afrs_screen" className="dg_afrs_screen">
            <div className="container dg_afrs_container">
                <div className="row dg_afrs_row">
                    <div className="col-6 dg_afrs_col">
                        <a className='start_show_a' href="#" onClick={move_startshow_left}>
                            <img class="start_show_icon" src={start_show_icon} alt="start-show"/>
                            <h3 className="dg_afrs_col1_h">START SHOW</h3>
                        </a>
                    </div>
                    <div className="col-6 dg_afrs_col">
                        <a className='start_modelzone_a' href="#" onClick={move_start_modellights_left}>
                            <img class="screensaver_icon" src={model_districts} alt="night-scene"/>
                            <h3 className="dg_afrs_col2_h">MODEL DISTRICTS</h3>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
}

export default Wsafterroomselection;
