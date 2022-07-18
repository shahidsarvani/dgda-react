import '../bootstrap.min.css';
import '../mystyle.css';
import { useState, useEffect } from 'react';
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
import React, { Component } from 'react';
import axios from 'axios';
import '../axios';

class Lightsscreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lightScenes: []
        }
    }
    async componentDidMount() {}
    async componentDidUpdate(prevProps, prevState) {
        if((prevProps.roomId !== this.props.roomId) || (prevProps.lang !== this.props.lang)) {
            let roomid = this.props.roomId;
            if (typeof roomid === 'undefined')
                return;

            if(!roomid)
                return;
            let lang = this.props.lang;   
            let res = await axios.get('room/'+roomid+'/light_scenes/'+lang);
            this.setState({
                lightScenes: res.data.response
            })
        }
        
    }
    async openRoomDetails(lightid) {    
        if(!lightid)
            return;

        let res = await axios.get('light_scene_command/'+lightid);
        console.log(res);

    }
    render() {
        return (
            <div className="lights_screen_wrap">

                <section id="dg_lights_screen" className="dg_lights_screen">
                    <div className="container dg_lights_container">
                    <div className="row dg_lights_main_row">
                            <div className="col-12">
                                <div className="row dg_lights_row">
                                {
                                    this.state.lightScenes.map((scene, index) => {
                                        return (
                                            <div className="col-6 dg_lights_col">
                                                <div className="dg_lights_content_wrap dg_lights_20">
                                                    <a href="#"  onClick={() => this.openRoomDetails(scene.id)}>
                                                        <h3>{scene.name}</h3>
                                                        <img src={scene.image} alt={scene.name}/>
                                                    </a>
                                                </div>
                                            </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Lightsscreen;
