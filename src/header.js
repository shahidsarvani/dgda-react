import './bootstrap.min.css';
import './mystyle.css';
import logo from './images/dgda_logo.svg';
import move_left_en from './move-left-en';
import move_left_ar from './move-left-ar';
import logo_ar from './images/diriyah-ar-logo.svg';
import diriyah_icon from './images/icons/diriyah-icon.svg';
import wadi_icon from './images/icons/wadi-safar-icon.svg';
import move_main_left from './move-main-left';
import move_wadi_left_en from './move-wadi-left-en';
import videowallsactive from './move-videowallsactive';
import './customjqjs';
import './customfun';
import React, { Component } from 'react';
import Translator from './translator';
import axios from 'axios';
import './axios';
import {addHistory} from './history';

class Header extends Component {
    constructor(props) {
        super(props);
        this.tran = new Translator(this.props.lang);
        this.state = {
            rooms: [],
            lang: '',
        }
    }
    componentWillUpdate(nextProps, nextState) {
        this.tran = new Translator(nextProps.lang);
    }
    async componentDidMount() {
        console.log(this.state.lang);
        try {
            let res = await axios.get('rooms');
            this.setState({
                rooms: res.data.response
            })
            //this.rooms = res.data.response;
        } catch (err) {
            console.log(err);
        }
        
    }
    setLang(lang) {
        if(this.state.lang == 'ar') {
            this.setState({
                lang: '',
            })
            document.documentElement.lang = 'en';
            move_left_en();
            this.props.onSetLang('');
        } else  {
            this.setState({
                lang: 'ar',
            });
            document.documentElement.lang = 'ar';
            move_left_ar();
            this.props.onSetLang('ar');
            addHistory('move_left_ar', 'dg_afrs_screen');
        }
    }
    openRoomDetails(roomid) {
        let room = this.state.rooms.filter(room => room.id == roomid)[0];
        this.props.onSetRoomID(room);

        let default_play = axios.post('play_default', {
            lang: this.props.lang,
        });
        
        move_left_en();
        if(roomid == process.env.REACT_APP_HIDE_MODEL_ROOM_ID) 
            videowallsactive('videowallsactive');
    }
    render() {
        return (
            // <div className={`header-wrap  ${(this.state.lang == 'ar') ? 'header_ar' : 'header_en'} ${(this.state.lang == 'en') ? 'header_en' : ''}`}>
            <div className={`header-wrap  ${(this.state.lang == 'ar') ? 'header_ar' : 'header_en'}`}>

            <header className='header-app'>
                    <div className="container diri_header_cont">
                        <div className="header_inner">
                            <div className="row diri_header_row">
                                <div className="col-31 logo_col_1">
                                    <div className="load_log_col">
                                        <div className="logo_diriyah">
                                            <a href="#">
                                            {(this.state.lang == 'ar' && this.state.lang != 'nill') ? (<img className="ar_logo" src={logo_ar} alt="logo" />) : (<img className="eng_logo" src={logo} alt="logo" />)}
                                           
                                            </a>
                                        </div>

                                        <div className="lang-switcher">
                                            <div className="lang_items">
                                                <a className="lang_ar_item" href="#" onClick={() => this.setLang()}>
                                                {(this.state.lang == 'ar') ? 'ENGLISH' : 'عربي'}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-menu-elements" onClick={move_left_en}>
                                    <div className="col-61 head_separator_col">
                                        <div className="head_separator"></div>
                                    </div>
                                    <div className="col-31 nav_col_1">
                                        <nav className="navbar navbar-expand-sm navbar_dir bg-transparent">
                                            <div className="nav_cp_dp collapse navbar-collapse btn-10" id="collapsibleNavbar">
                                            <ul className="navbar-nav">
                                                {
                                                    this.state.rooms.map( (room) => {
                                                        return (
                                                        <li className="nav-item nav-item-en1">
                                                            <a className={`nav-link nav-link-en1 ${(this.props.roomId == room.id) ? 'active' : ''}`} href="#" onClick={() => this.openRoomDetails(room.id)}>
                                                                {
                                                                    (this.state.lang === 'ar') ? <img src={room.icon_ar} alt="diriyah"/> : <img src={room.icon} alt="diriyah"/>
                                                                }
                                                                
                                                                { (this.state.lang === '') && (
                                                                        <span>{room.name}</span>
                                                                    )
                                                                }
                                                                { (this.state.lang === 'ar') && (
                                                                        <span>{room.name_ar}</span>
                                                                    )
                                                                }
                                                            </a>
                                                        </li>
                                                        )
                                                    })
                                                }
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

            </div>
        );
    }
}










// function Header() {
//   return (
//     <div className="header-wrap">

//       <header className='header-app'>
//             <div className="container diri_header_cont">
//                 <div className="header_inner">
//                     <div className="row diri_header_row">
//                         <div className="col-31 logo_col_1">
//                             <div className="load_log_col">
//                                 <div className="logo_diriyah">
//                                     <a href="#">
//                                         <img className="ar_logo" src={logo_ar} alt="logo" />
//                                         <img src={logo} alt="logo" />
//                                     </a>
//                                 </div>
//                                 <div className="lang-switcher">
//                                     <div className="lang_items">
//                                         <a className="lang_ar_item" href="#" onClick={move_main_left}>عربي</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="header-menu-elements" onClick={move_left_en}>
//                             <div className="col-61 head_separator_col">
//                                 <div className="head_separator"></div>
//                             </div>
//                             <div className="col-31 nav_col_1">
//                                 <nav className="navbar navbar-expand-sm navbar_dir bg-transparent">
//                                     <div className="nav_cp_dp collapse navbar-collapse btn-10" id="collapsibleNavbar">
//                                     <ul className="navbar-nav">
//                                             <li className="nav-item nav-item-en1">
//                                                 <a className="nav-link nav-link-en1 active" href="#">
//                                                     <img src={diriyah_icon} alt="diriyah"/>
//                                                     <span>DIRIYAH</span>
//                                                 </a>
//                                             </li>
//                                             <li className="nav-item nav-item-en2">
//                                                 <a className="nav-link nav-link-en2" href="#">
//                                                     <img src={wadi_icon} alt="wadi-safar"/>
//                                                     <span>WADI SAFAR</span>
//                                                 </a>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </nav>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>

//     </div>
//   );
// }

export default Header;
