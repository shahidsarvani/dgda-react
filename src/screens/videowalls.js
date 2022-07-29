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
            zoneid: '',
            room_id: '',
            video_length: 0,
            countdown: 0,
            time_spend: 0,
            status:'',
            mystyle: {
                width: "0%",
                display: "block",
                height: "4.3628px",
                backgroundColor: "#003741",
                borderRadius: "50px",
                position: "absolute",
                top: "0",
                left: "0",
            }
        }
    }
    tick() {
        const current = this.state.countdown;
        if (current <= 0) {
            this.setState({
                status: 'stop'
            })
            this.transition();

        } else {
          this.setState({ countdown: current - 1 , time_spend: this.state.time_spend + 1, status: 'start'}); 
        }
        let percent = (this.state.time_spend/this.state.video_length)*100;
        this.setState(prevState => ({
            mystyle: {                   
                ...prevState.mystyle,
                width: percent+"%",
            }
        }))
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
    async runPlayApi(zoneid) {
        if(this.state.status === 'start') {
            return;
        }
        if(this.state.status === 'stop') {
            let res = await axios.get('play_wall_video/'+this.state.zoneid);

            // let res = await axios.post('zone/'+this.state.zoneid+'/play_scene');
            this.startAgain();
            this.startTimer();
        }
        if(this.state.status === 'pause')
        {
            let res = await axios.get('room/'+this.state.room_id+'/video/resume');
            this.startTimer();
        }
    }
    async runPauseApi() {
        if(this.state.status !== 'pause') {
            let res = await axios.get('room/'+this.state.room_id+'/video/pause');
            this.setState({
                status: 'pause',
            })
            this.transition();
        }
        
    }
    async runStopApi() {
        if(this.state.status != 'stop') {
            let res = await axios.post('room/' + this.state.room_id + '/video/stop');
            this.setState({
                countdown: this.state.video_length,
                time_spend: 0,
                status: 'stop',
            })
            this.transition();
            this.setState(prevState => ({
                mystyle: {                   
                    ...prevState.mystyle,
                    width: "0%",
                }
            }))
        }
    }
    async runVolUpApi() {
        let res = await axios.get('room/' + this.state.room_id + '/volume/increase');
        // console.log(res);
    }
    async runVolDownApi() {
        let res = await axios.get('room/' + this.state.room_id + '/volume/decrease');
        // console.log(res);
    }
    async runVolMuteApi() {
        let res = await axios.get('room/' + this.state.room_id + '/volume/mute');
        // console.log(res);
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
            //let res = await axios.get('room/'+roomid+'/zones/'+lang); 
            let res = await axios.get('room/'+roomid+'/get_play_wall_video/'+lang);
            this.setState({
                zones: res.data.response
            })
            this.setState({
                room_id: roomid,
            })
        }
    }
    async runZonePlaySceneApi(zoneid) {
        //let res = await axios.post('zone/'+zoneid+'/play_scene');
        let res = await axios.get('play_wall_video/'+zoneid);
        let length = res.data.response;
        this.setState({
            video_length: length,
            zoneid: zoneid,
        })

        const current = length;
        this.setState({ countdown: current - 1 , time_spend: 0, status: 'start'});
        this.transition();
        this.timer = null;
        this.timer = setInterval(() => this.tick(), 1000);
    }
    async runForwarAPI() {
        let timeforward = this.state.time_spend + 10;
        if(timeforward > this.state.video_length)
            return;

        let res = await axios.get('room/'+this.state.room_id+'/video/forward');
        this.state.time_spend = this.state.time_spend + 10;
        this.state.countdown = this.state.countdown - 10;
    }
    async runBackwardAPI() {
        let timebackward = this.state.time_spend - 10;
        if(timebackward <= 0)
            return;

        let res = await axios.get('room/'+this.state.room_id+'/video/back');
        this.state.time_spend = this.state.time_spend - 10;
        this.state.countdown = this.state.countdown + 10;
    }
    startTimer() {
        this.timer = null;
        this.timer = setInterval(() => this.tick(), 1000);
    }
    startAgain() {
        const current = this.state.video_length;
        this.setState({ countdown: current - 1 , time_spend: 0, status: 'start'});
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
                                        <div className={this.state.mystyle}></div>
                                    </div>
                                    <div className="sm_video_timers">
                                        <span className="sm_video_start_timer">{this.fancyTimeFormat(this.state.time_spend)}</span>
                                        <span className="sm_video_end_timer">{this.fancyTimeFormat(this.state.countdown)}</span>
                                    </div>
                                </div>
                                <div className="sm_video_controls">
                                    <ul className="sm_vc_list">
                                        <li className="sm_vc_item sm_vc_fastrewind_item">
                                            <a href="#" onClick={() => this.runBackwardAPI()}> 
                                                <img src={fast_rewind} alt="sm-video-fastrewind"/>
                                            </a>
                                        </li>
                                        <li className="sm_vc_item sm_vc_play_item tahir">
                                            <a href="#" onClick={() => this.runPlayApi()}>
                                                <img src={Videoplayicon} alt="sm-video-play" />
                                            </a>
                                        </li>
                                        <li className="sm_vc_item sm_vc_pause_item">
                                            <a href="#" onClick={() => this.runPauseApi()}>
                                                <img src={Videopauseicon} alt="sm-video-play" />
                                            </a>
                                        </li>
                                        <li className="sm_vc_item sm_vc_stop_item">
                                            <a href="#"  onClick={() => this.runStopApi()}>
                                                <img src={Videostopicon} alt="sm-video-play" />
                                            </a>
                                        </li>
                                        <li className="sm_vc_item sm_vc_fastforward_item">
                                            <a href="#" onClick={() => this.runForwarAPI()}>
                                                <img src={fast_forward} alt="sm-video-fastforward"/>
                                            </a>
                                        </li>
                                        <li className="sm_vc_item sm_vc_lowvol_item">
                                            <a href="#"  onClick={() => this.runVolDownApi()}>
                                                <img src={Videolowvolicon} alt="sm-video-play" />
                                            </a>
                                        </li>
                                        <li className="sm_vc_item sm_vc_heighvol_item">
                                            <a href="#" onClick={() => this.runVolUpApi()}>
                                                <img src={Videohighvolicon} alt="sm-video-play" />
                                            </a>
                                        </li>
                                        <li className="sm_vc_item sm_vc_mute_item">
                                            <a href="#"  onClick={() => this.runVolMuteApi()}>
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
                                                            <h3>{`${index+1}. ${zone.title}`}</h3>
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
