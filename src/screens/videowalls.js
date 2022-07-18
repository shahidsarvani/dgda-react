import '../bootstrap.min.css';
import '../mystyle.css';
import Videoplayicon from '../images/video-controls/video-play-control-icon.svg';
import Videopauseicon from '../images/video-controls/video-pause-control-icon.svg';
import Videostopicon from '../images/video-controls/video-stop-control-icon.svg';
import Videolowvolicon from '../images/video-controls/video-low-volum-icon.svg';
import Videohighvolicon from '../images/video-controls/video-full-volum-icon.svg';
import Videomutevolicon from '../images/video-controls/video-mute-icon.svg';
import fast_rewind from '../images/video-controls/fast-rewind.svg';
import fast_forward from '../images/video-controls/fast-forward.svg';
import move_vwalls_right from '../move-vwalls-right';
import { useState, useEffect } from 'react';


import axios from 'axios';
import '../axios';
import React, { Component } from 'react';

class Videowalls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zones: [],
            room_id: '',
        }
    }
    async componentDidMount() {}
    async componentDidUpdate(prevProps, prevState) {
        if((this.props.roomId !== '') && (prevProps.roomId != this.props.roomId) || (prevProps.lang !== this.props.lang)) {
            let roomid = this.props.roomId;
            if (typeof roomid === 'undefined')
                return;
                
            if(!roomid)
                return;
            
            let lang = this.props.lang;
            let res = await axios.get('room/'+roomid+'/zones/'+lang);
            this.setState({
                zones: res.data.response
            })
            this.setState({
                room_id: roomid,
            })
            console.log(res.data.response);
        }
        
    }
    async runZonePlaySceneApi(zoneid) {
        let res = await axios.post('zone/'+zoneid+'/play_scene');;
        console.log(res);
    }
    render() {
        return (
            <div className="video_walls_screen_wrap">

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
                                        <span className="sm_video_start_timer">1:45</span>
                                        <span className="sm_video_end_timer">-0.30</span>
                                    </div>
                                </div>
                                <div className="sm_video_controls">
                                    <ul className="sm_vc_list">
                                        <li className="sm_vc_item sm_vc_fastrewind_item">
                                            <a href="#">
                                                <img src={fast_rewind} alt="sm-video-fastrewind"/>
                                            </a>
                                        </li>
                                        <li className="sm_vc_item sm_vc_play_item tahir">
                                            <a href="#">
                                                <img src={Videoplayicon} alt="sm-video-play" />
                                            </a>
                                        </li>
                                        <li className="sm_vc_item sm_vc_pause_item">
                                            <a href="#">
                                                <img src={Videopauseicon} alt="sm-video-play" />
                                            </a>
                                        </li>
                                        <li className="sm_vc_item sm_vc_stop_item">
                                            <a href="#">
                                                <img src={Videostopicon} alt="sm-video-play" />
                                            </a>
                                        </li>
                                        <li className="sm_vc_item sm_vc_fastforward_item">
                                            <a href="#">
                                                <img src={fast_forward} alt="sm-video-fastforward"/>
                                            </a>
                                        </li>
                                        <li className="sm_vc_item sm_vc_lowvol_item">
                                            <a href="#">
                                                <img src={Videolowvolicon} alt="sm-video-play" />
                                            </a>
                                        </li>
                                        <li className="sm_vc_item sm_vc_heighvol_item">
                                            <a href="#">
                                                <img src={Videohighvolicon} alt="sm-video-play" />
                                            </a>
                                        </li>
                                        <li className="sm_vc_item sm_vc_mute_item">
                                            <a href="#">
                                                <img src={Videomutevolicon} alt="sm-video-play" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dg_media_list_wrap">
                                    <h2>MEDIA</h2>
                                    <ul className="dg_media_list">
                                    {
                                            this.state.zones.map((zone,index) => {
                                                return (
                                                    <li className="dg_media_item" key={zone.id}>
                                                        <a href="#" onClick={() => this.runZonePlaySceneApi(zone.id)}>
                                                            <h3>{`${index+1}. ${zone.name}`}</h3>
                                                        </a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Videowalls;
