import './bootstrap.min.css';
import './mystyle.css';
import move_showmodelactive from './move-showmodelactive';
import move_homeactive_en from './move-homeactive-en';
import videowallsactive from './move-videowallsactive';
import move_lightsactive from './move-lightsactive';
import move_step_back from './move-step-back';
import lights_icon from './images/icons/ftr-lights-icon.svg';
import vwalls_nonactive_icon from './images/icons/ftr-vwalls-icon.svg';
import vwalls_active_icon from './images/icons/vwalls-selected-icon.svg';
import model_icon from './images/icons/ftr-model-icon.svg';
import home_nonactive_icon from './images/icons/ftr-home-icon.svg';
import home_active_icon from './images/icons/home-selected-icon.svg';
import back_icon from './images/icons/backward-light-icon.svg';
import './customjqjs';
import Translator from './translator';
import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.tran = new Translator(this.props.lang);
        this.state = {
            phases: [],
            menu: 'model',
        }
    }
    async componentDidMount() {
    }
    componentWillUpdate(nextProps, nextState) {
        this.tran = new Translator(nextProps.lang);
    }
    async componentDidUpdate(prevProps, prevState) {
        // if(prevProps.lang !== this.props.lang) {
        //     this.tran = null;
        //     this.tran = new Translator(this.props.lang);   
        // }
    }
    setMenu(menu) {
        this.setState({
            menu: menu,
        })
        switch(menu) {
            case 'back':
                move_step_back();
              break;
            case 'main_page':
                move_homeactive_en();
              break;
            case 'model':
                move_showmodelactive();
              break;
            case 'video_wall':
                videowallsactive();
              break;
            case 'lights':
                move_lightsactive();
              break;
            default:
              // code block
          } 
        
    }
    render() {
        return (
            <div className="dgda-footer dg_ft_cont_en">

                <div className="container dg_ft_cont">
                        <div className="row dg_ft_row">
                            <div className="col-12 dg_ft_col">
                                    <div class="dg_ft_nav">
                                    <div class="dg_ft_nav_titles">
                                        <div class="dg_ft_navtitle_link dg_ften_navtitle_link">
                                            <h3 class="page_title title_show_control">SHOW CONTROLS</h3>
                                            <h3 class="page_title title_night_scene">MODEL DISTRICTS</h3>
                                            <h3 class="page_title title_basement_floors">BASEMENT FLOORS</h3>
                                            <h3 class="page_title title_lights">LIGHTS</h3>
                                            <h3 class="page_title title_vwalls">VIDEO WALLS</h3>
                                        </div>
                                        <div className="dg_ft_navtitle_link dg_ftar_navtitle_link">
                                            <h3 className="page_title title_show_control">لوحة التحكم بالعرض</h3>
                                            <h3 className="page_title title_night_scene">مناطق المجسم</h3>
                                            <h3 className="page_title title_basement_floors">الطوابق السفلية</h3>
                                            <h3 className="page_title title_lights">الإضاءة</h3>
                                            <h3 className="page_title title_vwalls">الشاشات</h3>
                                        </div>
                                    </div>
                                    <ul class="dg_ft_nav_list">
                                        <li className={`dg_ft_nav_item dg_ft_nav_item1 ${(this.state.menu === 'back') ? 'active' : ''}`}>
                                            <a href="#" id="bring_it_back" onClick={() => this.setMenu('back')} data-fromDir="left">
                                                <div class="dg_ft_nav_img">
                                                    <img src={back_icon} alt="back"/>
                                                </div>
                                                <div class="dg_ft_nav_link">
                                                    <h3>{this.tran.T('BACK')}</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li className={`dg_ft_nav_item dg_ft_nav_item2 ft_main_page ${(this.state.menu === 'main_page') ? 'active' : ''}`}>
                                            <a href="#" onClick={() => this.setMenu('main_page')} data-fromDir="right">
                                                <div class="dg_ft_nav_img">
                                                    <img class="non_active_img" src={home_nonactive_icon} alt="main-page"/>
                                                    <img class="active_img" src={home_active_icon} alt="main-page"/>
                                                </div>
                                                <div class="dg_ft_nav_link">
                                                    <h3>{this.tran.T('HOME')}</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li className={`dg_ft_nav_item dg_ft_nav_item1 ${(this.state.menu === 'model') ? 'active' : ''}`}>
                                            <a href="#" onClick={() => this.setMenu('model')} data-fromDir="left">
                                                <div class="dg_ft_nav_img">
                                                    <img src={model_icon} alt="Model"/>
                                                </div>
                                                <div class="dg_ft_nav_link">
                                                    <h3>{this.tran.T('MODEL')}</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li className={`dg_ft_nav_item dg_ft_nav_item4 ft_videowalls ${(this.state.menu === 'video_wall') ? 'active' : ''}`}>
                                            <a href="#" onClick={() => this.setMenu('video_wall')} data-fromDir="right">
                                                <div class="dg_ft_nav_img">
                                                    <img class="non_active_img" src={vwalls_nonactive_icon} alt="VIDEO WALLS"/>
                                                    <img class="active_img" src={vwalls_active_icon} alt="VIDEO WALLS"/>
                                                </div>
                                                <div class="dg_ft_nav_link">
                                                    <h3>{this.tran.T('VIDEO_WALL')}</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li className={`dg_ft_nav_item dg_ft_nav_item5 ft_lights ${(this.state.menu === 'lights') ? 'active' : ''}`}>
                                            <a href="#" onClick={() => this.setMenu('lights')} data-fromDir="right">
                                                <div class="dg_ft_nav_img">
                                                    <img src={lights_icon} alt="LIGHTS"/>
                                                </div>
                                                <div class="dg_ft_nav_link">
                                                    <h3>{this.tran.T('LIGHTS')}</h3>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        );
    }
}

export default Footer;
