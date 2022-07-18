import './bootstrap.min.css';
import './mystyle.css';
import move_homeactive_ar from './move-homeactive-ar';
import move_showmodelactive from './move-showmodelactive';
import move_videowallsactive from './move-videowallsactive';
import move_lightsactive from './move-lightsactive';
import lights_icon from './images/icons/ftr-lights-icon.svg';
import vwalls_nonactive_icon from './images/icons/ftr-vwalls-icon.svg';
import vwalls_active_icon from './images/icons/ftr-vwalls-icon.svg';
import model_icon from './images/icons/ftr-model-icon.svg';
import home_nonactive_icon from './images/icons/ftr-home-icon.svg';
import home_active_icon from './images/icons/home-selected-icon.svg';
import back_icon from './images/icons/backward-light-icon.svg';
import './customjqjs';
import move_step_back from './move-step-back';
import Translator from './translator';
import React, { Component } from 'react';


class Footerar extends Component {
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
                move_homeactive_ar();
              break;
            case 'model':
                move_showmodelactive();
              break;
            case 'video_wall':
                move_videowallsactive();
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
            <div className="dgda-footer">

        <div id="footer_ar" className="container dg_ft_cont_ar">
            <div className="row dg_ft_row">
                <div className="col-12 dg_ft_col">
                    <div className="dg_ft_nav">
                        <div className="dg_ft_nav_titles">
                            <div className="dg_ft_navtitle_link">
                                <h3 className="page_title title_show_control">لوحة التحكم بالعرض</h3>
                                <h3 className="page_title title_night_scene">مناطق المجسم</h3>
                                <h3 className="page_title title_basement_floors">الطوابق السفلية</h3>
                                <h3 className="page_title title_lights">الإضاءة</h3>
                                <h3 className="page_title title_vwalls">الشاشات</h3>
                            </div>
                        </div>
                        <ul className="dg_ft_nav_list">
                            <li className={`dg_ft_nav_item dg_ft_nav_item1 dg_ft_ar_back_item dg_ft_nav_item1 ${(this.state.menu === 'back') ? 'active' : ''}`}>
                                <a href="#" id="bring_it_back_ar" onClick={() => this.setMenu('back')} data-fromDir="left">
                                    <div className="dg_ft_nav_img">
                                        <img src={back_icon} alt="back"/>
                                    </div>
                                    <div className="dg_ft_nav_link">
                                        <h3>الرجوع</h3>
                                    </div>
                                </a>
                            </li>
                            <li className={`dg_ft_nav_item dg_ft_nav_item2 ft_main_page ${(this.state.menu === 'main_page') ? 'active' : ''}`}>
                                <a id="main_home_ar_to" href="#" onClick={() => this.setMenu('main_page')} data-fromDir="right">
                                    <div className="dg_ft_nav_img">
                                        <img className="non_active_img" src={home_nonactive_icon} alt="main-page"/>
                                        <img className="active_img" src={home_active_icon} alt="main-page"/>
                                    </div>
                                    <div className="dg_ft_nav_link">
                                        <h3>الصفحة الرئيسية</h3>
                                    </div>
                                </a>
                            </li>
                            <li className={`dg_ft_nav_item dg_ft_nav_item3 active new_home_ar ${(this.state.menu === 'model') ? 'active' : ''}`}>
                                <a href="#" onClick={() => this.setMenu('model')} data-fromDir="left">
                                    <div className="dg_ft_nav_img">
                                        <img src={model_icon} alt="Model"/>
                                    </div>
                                    <div className="dg_ft_nav_link">
                                        <h3>المجسم</h3>
                                    </div>
                                </a>
                            </li>
                            <li className={`dg_ft_nav_item dg_ft_nav_item4 ft_videowalls ${(this.state.menu === 'video_wall') ? 'active' : ''}`}>
                                <a id="dg_ft_shahaat" href="#" onClick={() => this.setMenu('video_wall')} data-fromDir="right">
                                    <div className="dg_ft_nav_img">
                                        <img className="non_active_img" src={vwalls_nonactive_icon} alt="VIDEO WALLS"/>
                                        <img className="active_img" src={vwalls_active_icon} alt="VIDEO WALLS"/>
                                    </div>
                                    <div className="dg_ft_nav_link">
                                        <h3>الشاشات</h3>
                                    </div>
                                </a>
                            </li>
                            <li className={`dg_ft_nav_item dg_ft_nav_item5 ft_lights ${(this.state.menu === 'lights') ? 'active' : ''}`}>
                                <a id="click_ar_alzia" href="#" onClick={() => this.setMenu('lights')} data-fromDir="right">
                                    <div className="dg_ft_nav_img">
                                        <img src={lights_icon} alt="LIGHTS"/>
                                    </div>
                                    <div className="dg_ft_nav_link">
                                        <h3>الإضاءة</h3>
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

// function Footerar() {
//   return (
    
//   );
// }

export default Footerar;
