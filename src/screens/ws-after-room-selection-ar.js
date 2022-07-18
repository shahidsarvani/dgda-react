import '../bootstrap.min.css';
import '../bootstrap.rtl.min.css';
import '../mystyle.css';
import '../css/rtl.css';
import move_startshow_left from '../move-startshow-left';
import move_start_modellights_left from '../move-start-modellights-left';
import start_show_icon from '../images/icons/play-icon.svg';
import model_districts_icon from '../images/icons/model-zones.svg';
import '../customjqjs';

function Wsafterroomselectionar() {
  return (
    <div className="after_room_selection_screen_ar">

        <section id="dg_afrs_screen" className="dg_afrs_screen">
            <div className="container dg_afrs_container">
                <div className="row dg_afrs_row">
                    <div className="col-6 dg_afrs_col">
                        <a id="start_icon_afrs1" href="#" onClick={move_startshow_left}>
                            <img class="start_show_icon" src={start_show_icon} alt="start-show"/>
                            <h3 class="dg_afrs_col1_h">بدء العرض</h3>
                        </a>
                    </div>
                    <div className="col-6 dg_afrs_col">
                        <a id="model_district_icon1" href="#" onClick={move_start_modellights_left}>
                            <img class="screensaver_icon" src={model_districts_icon} alt="screensaver"/>
                            <h3 class="dg_afrs_col2_h">مناطق المجسم</h3>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
}

export default Wsafterroomselectionar;
