import '../bootstrap.min.css';
import '../mystyle.css';
import move_start_basementfloors_right from '../move-start-basementfloors-right';
import bf_up_icon from '../images/icons/bf-up-icon.svg';
import bf_down_icon from '../images/icons/bf-down-icon.svg';
import '../customjqjs';
import React, { Component } from 'react';
import axios from 'axios';
import '../axios';
import Translator from '../translator';

class Basementfloors extends Component {
    constructor(props) {
        super(props);
        this.tran = new Translator(this.props.lang);
        this.state = {
            lightScenes: []
        }
    }
    componentWillUpdate(nextProps, nextState) {
        this.tran = new Translator(nextProps.lang);
    }
    async callBaseFloor(pos) {
        let res = {}
        if(pos === 'up') {
            res = await axios.get('model/up');
        }
        if(pos === 'down') {
            res = await axios.get('model/down');
        }
        console.log(res.data.response);
    }
    render() {
        return (
            <div className="basementfloors_screen">

                <section id="dg_bf_screen" className="dg_bf_screen">
                    <div className="container dg_bf_container">
                        <div className="row dg_bfc_row">
                            <div className="col-12 dg_bf_col">
                                <div className="dg_bf_list_wrap">
                                    <ul className="dg_bf_list">
                                        <li className="dg_bf_list_item">
                                            <a href="#" onClick={() => this.callBaseFloor('up')}>
                                                <img src={bf_up_icon} alt="basementfloors-up"/>
                                                <span>{this.tran.T('UP')}</span>
                                            </a>
                                        </li>
                                        <li className="dg_bf_list_item">
                                            <a href="#"  onClick={() => this.callBaseFloor('down')}>
                                                <img src={bf_down_icon} alt="basementfloors-doen"/>
                                                <span>{this.tran.T('DOWN')}</span>
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

export default Basementfloors;
