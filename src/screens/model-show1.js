import '../bootstrap.min.css';
import '../mystyle.css';
import video from '../videos/dgdA_UI_Intro-10secs.mp4';
import Playicon from '../images/video-controls/video-play-control-icon.svg';
import Pauseicon from '../images/video-controls/video-pause-control-icon.svg';
import Stopicon from '../images/video-controls/video-stop-control-icon.svg';
import Lowvolicon from '../images/video-controls/video-low-volum-icon.svg';
import Fullvolicon from '../images/video-controls/video-full-volum-icon.svg';
import Muteicon from '../images/video-controls/video-mute-icon.svg';
//import Videothumb from '../images/play-video-thumb.png';
import move_startshow_right from '../move-startshow-right';
import '../customjqjs';

import axios from 'axios';
import '../axios';
import React, { Component } from 'react';

class Modelshow extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            roomid: '',
            video_length: 0,
            countdown: 0,
            showcountdown: '',
            time_spend: 0,
            show_time_spend: '',
        }
    }
    tick() {
        const current = this.state.countdown;
        if (current === 0) {
          this.transition();
        } else {
          this.setState({ countdown: current - 1 , time_spend: this.state.time_spend + 1}); 
        } 
      }
      stop() {
        this.setState({
            countdown: this.state.video_length,
            time_spend: 0,
        })
      }
      startAgain() {
        this.timer = setInterval(() => this.tick(), 1000);
      }
      transition() {
        clearInterval(this.timer);
        // do something else here, presumably.
      }
      fancyTimeFormat(duration)
        {   
            // Hours, minutes and seconds
            var hrs = ~~(duration / 3600);
            var mins = ~~((duration % 3600) / 60);
            var secs = ~~duration % 60;

            // Output like "1:01" or "4:03:59" or "123:03:59"
            var ret = "";

            if (hrs > 0) {
                ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
            }

            ret += "" + mins + ":" + (secs < 10 ? "0" : "");
            ret += "" + secs;
            return ret;
        }
    async componentDidUpdate(prevProps, prevState) {
        if((this.props.roomId !== '') && (prevProps.roomId !== this.props.roomId) ) {
            this.setState({
                roomid: this.props.roomId
            })
        }
        if(this.props.video !== '' && (prevProps.video !== this.props.video)) {
            this.setState({
                video_length: this.props.video,
                countdown: this.props.video,
            })
            this.timer = setInterval(() => this.tick(), 1000);
        }
        
    }
    async runPlayApi() {
        let res = await axios.get('room/'+this.state.roomid+'/video/resume');
        this.startAgain();
    }
    async runPauseApi() {
        let res = await axios.get('room/'+this.state.roomid+'/video/pause');
        this.transition();
    }
    async runStopApi() {
        let res = await axios.post('room/'+this.state.roomid+'/video/stop');
        this.stop();
        this.transition();
    }
    async runVolUpApi() {
        let res = await axios.get('volume/increase');
        console.log(res);
    }
    async runVolDownApi() {
        let res = await axios.get('volume/decrease');
        console.log(res);
    }
    async runVolMuteApi() {
        let res = await axios.get('volume/mute');
        console.log(res);
    }
    render() {
        return (
            <div className="modelshow_screen">

                <section id="dg_sm_screen" className="dg_sm_screen">
                    <div className="container dg_sm_screen_cont">
                        <div className="row dg_sm_row">
                            <div className="dg_sm_video_wrap">
                                <div className="sm_video">
                                    {/* <img src={Videothumb} alt="video thumb"/> */}
                                    <video id="sm_main_video" width="100%" height="756" loop={true} controls={false} autoPlay="autoplay">
                                        <source src={video} type="video/mp4"/>
                                        <source src="movie.ogg" type="video/ogg"/>
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="sm_video_track_wrap">
                                    <div className="sm_video_track">
                                        <div className="sm_video_unplayed_track"></div>
                                        <div className="sm_video_played_track"></div>
                                    </div>
                                    <div className="sm_video_timers">
                                        <span className="sm_video_start_timer">{this.fancyTimeFormat(this.state.time_spend)}</span>
                                        <span className="sm_video_end_timer">{this.fancyTimeFormat(this.state.countdown)}</span>
                                    </div>
                                </div>
                                <div className="sm_video_controls">
                                    <ul className="sm_vc_list">
                                        <li className="sm_vc_item sm_vc_play_item">
                                            <a href="#" onClick={() => this.runPlayApi()}>
                                                <img src={Playicon} alt="sm-video-play"/>
                                            </a>
                                        </li>
                                        <li className="sm_vc_item sm_vc_pause_item gggggg">
                                            <a href="#" onClick={() => this.runPauseApi()}>
                                                <img src={Pauseicon} alt="sm-video-play"/>
                                            </a>
                                        </li>
                                        <li className="sm_vc_item sm_vc_stop_item">
                                            <a href="#" onClick={() => this.runStopApi()}>
                                                <img src={Stopicon} alt="sm-video-play"/>
                                            </a>
                                        </li>
                                        <li className="sm_vc_item sm_vc_lowvol_item">
                                            <a href="#" onClick={() => this.runVolDownApi()}>
                                                <img src={Lowvolicon} alt="sm-video-play"/>
                                            </a>
                                        </li>
                                        <li className="sm_vc_item sm_vc_heighvol_item">
                                            <a href="#" onClick={() => this.runVolUpApi()}>
                                                <img src={Fullvolicon} alt="sm-video-play"/>
                                            </a>
                                        </li>
                                        <li className="sm_vc_item sm_vc_mute_item">
                                            <a href="#"  onClick={() => this.runVolMuteApi()}>
                                                <img src={Muteicon} alt="sm-video-play"/>
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
}

export default Modelshow;
