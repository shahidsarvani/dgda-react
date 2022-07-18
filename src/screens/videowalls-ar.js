import '../bootstrap.min.css';
import '../bootstrap.rtl.min.css';
import '../mystyle.css';
import '../css/rtl.css';
import Videoplay from '../images/video-controls/video-play-control-icon.svg';
import Videopause from '../images/video-controls/video-pause-control-icon.svg';
import Videostop from '../images/video-controls/video-stop-control-icon.svg';
import Videolowvol from '../images/video-controls/video-low-volum-icon.svg';
import Videohighvol from '../images/video-controls/video-full-volum-icon.svg';
import Videomute from '../images/video-controls/video-mute-icon.svg';
import move_vwalls_right from '../move-vwalls-right';
import fast_rewind from '../images/video-controls/fast-rewind.svg';
import fast_forward from '../images/video-controls/fast-forward.svg';

function Videowallsar() {
  return (
    <div className="video_walls_screen_wrap_ar">

        <section id="dg_vwalls_screen" className="dg_vwalls_screen">
            <div className="container dg_vwalls_container">
                <div className="row dg_vwalls_row">
                    <div className="dg_sm_video_wrap">
                        <div className="sm_video">
                            
                        </div>
                        <div className="sm_video_track_wrap">
                            <div className="sm_video_track">
                                <div className="sm_video_unplayed_track"></div>
                                <div className="sm_video_played_track"></div>
                            </div>
                            <div className="sm_video_timers">
                                <span className="sm_video_start_timer">١:٤٥</span>
                                <span className="sm_video_end_timer">-٠:٣١</span>
                            </div>
                        </div>
                        <div className="sm_video_controls">
                            <ul className="sm_vc_list">
                                <li className="sm_vc_item sm_vc_fastrewind_item">
                                    <a href="#">
                                        <img src={fast_rewind} alt="sm-video-fastrewind"/>
                                    </a>
                                </li>
                                <li className="sm_vc_item sm_vc_play_item">
                                    <a href="#">
                                        <img src={Videoplay} alt="sm-video-play"/>
                                    </a>
                                </li>
                                <li className="sm_vc_item sm_vc_pause_item">
                                    <a href="#">
                                        <img src={Videopause} alt="sm-video-pause"/>
                                    </a>
                                </li>
                                <li className="sm_vc_item sm_vc_stop_item">
                                    <a href="#">
                                        <img src={Videostop} alt="sm-video-stop"/>
                                    </a>
                                </li>
                                <li className="sm_vc_item sm_vc_fastforward_item">
                                    <a href="#">
                                        <img src={fast_forward} alt="sm-video-fastforward"/>
                                    </a>
                                </li>
                                <li className="sm_vc_item sm_vc_lowvol_item">
                                    <a href="#">
                                        <img src={Videolowvol} alt="sm-video-lowvol"/>
                                    </a>
                                </li>
                                <li className="sm_vc_item sm_vc_heighvol_item">
                                    <a href="#">
                                        <img src={Videohighvol} alt="sm-video-highvol"/>
                                    </a>
                                </li>
                                <li className="sm_vc_item sm_vc_mute_item">
                                    <a href="#">
                                        <img src={Videomute} alt="sm-video-mute"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="dg_media_list_wrap">
                            <h2>الفيديوهات</h2>
                            <ul className="dg_media_list">
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>١. المنطقة ١</h3>
                                    </a>
                                </li>
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>١. المنطقة ١</h3>
                                    </a>
                                </li>
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>١. المنطقة ١</h3>
                                    </a>
                                </li>
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>١. المنطقة ١</h3>
                                    </a>
                                </li>
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>١. المنطقة ١</h3>
                                    </a>
                                </li>
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>١. المنطقة ١</h3>
                                    </a>
                                </li>
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>١. المنطقة ١</h3>
                                    </a>
                                </li>
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>١. المنطقة ١</h3>
                                    </a>
                                </li>
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>١. المنطقة ١</h3>
                                    </a>
                                </li>
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>١. المنطقة ١</h3>
                                    </a>
                                </li>
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>١. المنطقة ١</h3>
                                    </a>
                                </li>
                                <li className="dg_media_item">
                                    <a href="#">
                                        <h3>١. المنطقة ١</h3>
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

export default Videowallsar;
