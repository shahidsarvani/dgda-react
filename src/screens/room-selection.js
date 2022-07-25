import '../bootstrap.min.css';
import '../mystyle.css';
import diriyahRoom from '../images/room-diriyah.png';
import wadiSafRoom from '../images/room-wadi-safar.png';
import move_left_en from '../move-left-en';
import move_wadi_left_en from '../move-wadi-left-en';
import { useState, useEffect } from 'react';
import '../customjqjs';
import axios from 'axios';
import '../axios';
import React, { Component } from 'react';
import {addHistory} from '../history';
class Roomselection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            lang: '',
        }
    }
    async componentDidMount() {
        try {
            let res = await axios.get('rooms');
            console.log(res);
            this.setState({
                rooms: res.data.response
            })
            //this.rooms = res.data.response;
            this.state.lang = this.props.lang;
        } catch (err) {
            console.log(err);
        }
    }
    async componentDidUpdate(prevProps, prevState) {
        if(prevProps.lang === this.props.lang) {
            this.setState({
                lang: this.props.lang
            })
        }
    }
    openRoomDetails(roomid) {

        let room = this.state.rooms.filter(room => room.id == roomid)[0];
        this.props.onSetRoomID(room);
        //addHistory('move_left_en');
        move_left_en();
    }
    render() {
        return (
            <div className="room_selection_screen">

                <section id="dg_rs_screen" className="dg_rs_screen">
                    <div className="overlay_sc"></div>
                    <div className="container dg_rs_container">
                        <div className="row dg_rs_row">
                        {
                        this.state.rooms.map( (room) => {
                            return (
                                <div className="col-6 dg_rs_col" key={room.id}>
                                    <a href="#" onClick={() => this.openRoomDetails(room.id)}>
                                        <div id={`${room.name}-room`} className="dg_rs_wrap">
                                            {
                                                (this.state.lang === 'ar') ? <img className="dg_rs_img" src={room.image_ar} alt="diriyah"/> : <img className="dg_rs_img" src={room.image} alt="diriyah"/>
                                            }
                                            <h3 className="rs_ar_heading">{room.name_ar}</h3>
                                            <h3>{room.name}</h3>
                                        </div>
                                    </a>
                                </div>
                                )
                            
                            })
                        }
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Roomselection;
