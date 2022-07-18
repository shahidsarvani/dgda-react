import '../bootstrap.min.css';
import '../mystyle.css';
import move_backto_startshow from '../move-backto-startshow';

import React, { Component } from 'react';
import Translator from '../translator';
import axios from 'axios';
import '../axios';

class Showcontrols extends Component {
    constructor(props) {
        super(props);
        this.tran = new Translator(this.props.lang);
        this.state = {
            room_id: '',
        }
    }
    componentWillUpdate(nextProps, nextState) {
        this.tran = new Translator(nextProps.lang);
    }
    async componentDidMount() {}
    componentWillUpdate(nextProps, nextState) {
        this.tran = new Translator(nextProps.lang);
    }
    async componentDidUpdate(prevProps, prevState) {
        if((this.props.roomId !== '') && (prevProps.roomId !== this.props.roomId)) {
            this.setState({
                room_id: this.props.roomId
            })
        }
        
    }

    async runRoomPlaySceneApi(roomid, lang = 'en') {
        let res = await axios.post('room/'+roomid+'/play_scene', {
            'lang':lang,
        });
        move_backto_startshow();
        if(res.data.response){
            this.props.onSetVideo(res.data.response+0.001);
        }       
    }
    render() {
        return (
            <div className="show_controls_screen">

                <section id="dg_sc_screen" className="dg_sc_screen english">
                    <div className="container dg_sc_container">
                        <div className="row dg_sc_row">
                            <div className="col-2"></div>
                            <div className="col-4 dg_sc_col">
                                <div className="optn_language">
                                    <a onClick={() => this.runRoomPlaySceneApi(this.state.room_id, 'en')} href="#">
                                        <h3>{this.tran.T('ENGLISH')}</h3>
                                        </a>
                                </div>
                            </div>
                            <div className="col-4 dg_sc_col">
                                <div className="optn_language">
                                    <a onClick={() => this.runRoomPlaySceneApi(this.state.room_id, 'ar')} href="#">
                                        <h3>{this.tran.T('ARABIC')}</h3>
                                    </a>
                                </div>
                            </div>
                            <div className="col-2"></div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Showcontrols;
