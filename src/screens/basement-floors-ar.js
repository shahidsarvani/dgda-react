import '../bootstrap.min.css';
import '../bootstrap.rtl.min.css';
import '../mystyle.css';
import '../css/rtl.css';
import move_start_basementfloors_right from '../move-start-basementfloors-right';
import bf_up_icon from '../images/icons/bf-up-icon.svg';
import bf_down_icon from '../images/icons/bf-down-icon.svg';
import '../customjqjs';

function Basementfloorsar() {
  return (
    <div className="basementfloors_screen_ar">

        <section id="dg_bf_screen" className="dg_bf_screen">
            <div className="container dg_bf_container">
                <div className="row dg_bfc_row">
                    <div className="col-12 dg_bf_col">
                        <div className="dg_bf_list_wrap">
                            <ul className="dg_bf_list">
                                <li className="dg_bf_list_item">
                                    <a href="#">
                                        <img src={bf_up_icon} alt="bf-up"/>
                                        <span>للأعلى</span>
                                    </a>
                                </li>
                                <li className="dg_bf_list_item">
                                    <a href="#">
                                        <img src={bf_down_icon} alt="bf-down"/>
                                        <span>للأسفل</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
}

export default Basementfloorsar;
