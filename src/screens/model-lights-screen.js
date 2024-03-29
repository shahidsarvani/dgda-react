import '../bootstrap.min.css';
import '../mystyle.css';
import DG1 from '../images/model-lights/dg1.png';
import DG2 from '../images/model-lights/dg1.png';
import DG3 from '../images/model-lights/dg1.png';
import move_start_modellights_right from '../move-start-modellights-right';
import { useState, useEffect } from 'react';
import '../customjqjs';


import axios from 'axios';
import '../axios';

import React, { Component } from 'react';

class Modellights extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phases: []
        }
    }
    async componentDidMount() {
        // try {
            
        //     let res = await axios.get('room/'+roomid+'/phases_with_zones');
        //     console.log(res.data);
        //     this.setState({
        //         phases: res.data.response
        //     })
        //     this.phases= res.data.response;
        //     //setPhases(res.data.response)
        // } catch (err) {
        //     console.log(err);
        // }
    }
    async componentDidUpdate(prevProps, prevState) {
        if((prevProps.roomId != this.props.roomId) || (prevProps.lang !== this.props.lang)) {
            let roomid = this.props.roomId;
            let lang = this.props.lang;
            if (typeof roomid === 'undefined')
                return;

            if(!roomid)
                return;

            let res = await axios.get('room/'+roomid+'/phases_with_zones/'+lang);
            this.setState({
                phases: res.data.response
            })
            console.log(res.data.response);
        }
        
    }
    async runZoneApi(zoneid) {
        if(!zoneid)
            return;

        let lang = this.props.lang;
        let res = await axios.post('zone/'+zoneid+'/play_scene',
                        {
                        "lang": lang,
                        }
                    );
        console.log(res);
    }
    render() {
        return (
            <div className="model_lights_screen">

                <section id="ml_lights_screen" className="ml_lights_screen">
                    <div className="container ml_lights_container">
                        <div className="row ml_lights_row">
                            {/* <div className='col-4 mdistricts_col1'>
                                <ul className='mdistricts_list'>
                                    <li className='mdistricts_list_item'><a className='active' href="#">HISTORICAL BOUNDARIES</a></li>
                                    <li className='mdistricts_list_item'><a href="#">DIRIYAH PHASE 1</a></li>
                                    <li className='mdistricts_list_item'><a href="#">WADI HANIFAH</a></li>
                                    <li className='mdistricts_list_item'><a href="#">DIRIYAH PHASE 2</a></li>
                                    <li className='mdistricts_list_item'><a href="#">DIRIYAH PHASE 3</a></li>
                                </ul>
                            </div>
                            <div className='col-4 mdistricts_col1'>
                                <ul className='mdistricts_list'>
                                    <li className='mdistricts_list_item'><a href="#">RETAIL</a></li>
                                    <li className='mdistricts_list_item'><a href="#">HOSPITALITY</a></li>
                                    <li className='mdistricts_list_item'><a href="#">OFFICES</a></li>
                                    <li className='mdistricts_list_item'><a href="#">RESIDENTIAL</a></li>
                                    <li className='mdistricts_list_item'><a href="#">CULTURE & EDUCATION</a></li>
                                </ul>
                            </div>
                            <div className='col-4 mdistricts_col1'>
                                <ul className='mdistricts_list'>
                                    <li className='mdistricts_list_item'><a href="#">WALKABILITY & OPEN SPACES</a></li>
                                    <li className='mdistricts_list_item'><a href="#">CONNECTIVITY & INFRASTRUCTURE</a></li>
                                </ul>
                            </div> */}
                            <div className="col_12 ml_content_col">
                            {
                                this.state.phases.map((phase) => {
                                    return (
                                    <div className="ml_content_container ml_content_container1 active" key={phase.name}>
                                        <div className="ml_image_wrap ml_dg_anchor1_wrap active">
                                            <img src={phase.image} alt="{phase.name}"/>
                                            <h3>{phase.name}</h3>
                                        </div>
                                        <div className="ml_list_wrap ml_dg_antag1_wrap active">
                                            <ul className="ml_dg_list ml_dg1_list">
                                                {
                                                    phase.zones.map((zone) => {
                                                        return (
                                                            <li className="ml_dg_list_item" key={zone.id}>
                                                                <a href="#" onClick={() => this.runZoneApi(zone.id)}>
                                                                    {zone.name}
                                                                </a>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Modellights;
