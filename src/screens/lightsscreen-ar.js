import '../bootstrap.min.css';
import '../bootstrap.rtl.min.css';
import '../mystyle.css';
import '../css/rtl.css'; 
import twenty_percent from '../images/icons/lights/20percent-lights.svg';
import fourty_percent from '../images/icons/lights/40percent-lights.svg';
import natural_soft from '../images/icons/lights/natural-soft-lights.svg';
import sixty_percent from '../images/icons/lights/60percent-lights.svg';
import eighty_percent from '../images/icons/lights/80percent-lights.svg';
import natural_bright from '../images/icons/lights/natural-bright-lights.svg';
import model_bright from '../images/icons/lights/model-bright-lights.svg';
import model_soft from '../images/icons/lights/model-soft-lights.svg';
import all_lights_on from '../images/icons/lights/all-lights-on.svg';
import all_lights_off from '../images/icons/lights/all-light-off.svg';
import '../customjqjs';             

function Lightsscreenar() {
  return (
    <div className="lights_screen_wrap_ar">

        <section id="dg_lights_screen" className="dg_lights_screen">
        <div class="container dg_lights_container">
                <div class="row dg_lights_main_row">
                    <div class="col-6">
                        <div class="row dg_lights_row">
                            <div class="col-12 dg_lights_col">
                                <div class="dg_lights_content_wrap dg_lights_20">
                                    <a href="#">
                                        <h3>٢٠٪ درجة إضاءة</h3>
                                        <img src={twenty_percent} alt="20percent-lights"/>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12 dg_lights_col">
                                <div class="dg_lights_content_wrap dg_lights_40">
                                    <a href="#">
                                        <h3>٤٠٪ درجة إضاءة</h3>
                                        <img src={fourty_percent} alt="40percent-lights"/>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12 dg_lights_col">
                                <div class="dg_lights_content_wrap dg_lights_40">
                                    <a href="#">
                                        <h3>إضاءة طبيعية خافتة</h3>
                                        <img src={natural_soft} alt="natural-soft-lights"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row dg_lights_row">
                            <div class="col-12 dg_lights_col">
                                <div class="dg_lights_content_wrap dg_lights_60">
                                    <a href="#">
                                        <h3>٦٠٪ درجة إضاءة</h3>
                                        <img src={sixty_percent} alt="60percent-lights"/>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12 dg_lights_col">
                                <div class="dg_lights_content_wrap dg_lights_entery">
                                    <a href="#">
                                        <h3>٨٠٪ درجة إضاءة</h3>
                                        <img src={eighty_percent} alt="80percent-lights"/>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12 dg_lights_col">
                                <div class="dg_lights_content_wrap dg_lights_entery">
                                    <a href="#">
                                        <h3>درجة الإضاءة الطبيعية</h3>
                                        <img class="model_bright_lights" src={natural_bright} alt="natural-bright-lights"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row dg_lights_main_row dg_lights_main_row2">
                    <div class="col-6">
                        <div class="row dg_lights_row">
                            <div class="col-12 dg_lights_col">
                                <div class="dg_lights_content_wrap dg_lights_60">
                                    <a href="#">
                                        <h3>إضاءة المجسم الطبيعية</h3>
                                        <img class="model_bright_lights" src={model_bright} alt="model-bright-lights"/>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12 dg_lights_col">
                                <div class="dg_lights_content_wrap dg_lights_20">
                                    <a href="#">
                                        <h3>إضاءة المجسم الخافتة</h3>
                                        <img src={model_soft} alt="model-soft-lights"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row dg_lights_row">
                            <div class="col-12 dg_lights_col">
                                <div class="dg_lights_content_wrap dg_lights_entery">
                                    <a href="#">
                                        <h3>تشغيل كل الأضاءات</h3>
                                        <img src={all_lights_on} alt="all-lights-on"/>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12 dg_lights_col">
                                <div class="dg_lights_content_wrap all_no_lights1">
                                    <a href="#">
                                        <h3>إيقاف كل الأضاءات</h3>
                                        <img src={all_lights_off} alt="all-lights-off"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
}

export default Lightsscreenar;
