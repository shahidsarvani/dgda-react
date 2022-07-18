import Wsafterroomselection from './screens/ws-after-room-selection';
import Modelshow from './screens/model-show';
import Modellights from './screens/model-lights-screen';
import Basementfloors from './screens/basement-floors';
import Wsvideowalls from './screens/ws-videowalls';
import Lightsscreen from './screens/lightsscreen';
import Showcontrols from './screens/show-controls-screen';
import './customjqjs';
import React, { Component } from 'react';


class Wadisaferroomwrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomid: this.props.roomId,
      hasmodal: (this.props.hasModal) ? this.props.hasModal: 0,
      lang: (this.props.lang) ? this.props.lang : '',
    }
  }
  async componentDidUpdate(prevProps, prevState) {
    if(prevProps.roomId !== this.props.roomId) {
      this.setState({
        roomid: this.props.roomId,
      })
    }
    
    if(prevProps.hasModal !== this.props.hasModal) {
      this.setState({
        hasmodal: this.props.hasModal,
      })
    }

    if(prevProps.lang !== this.props.lang) {
      this.setState({
        lang: this.props.lang,
      })
    }
    
  }

  setRoom = (room) => {
    console.log(room);
    this.setState({roomid: room.id});
    this.setState({hasmodal: room.has_model});
  }

  render() {
    return (
      <div className="wadi_e_safar_room_page">
        <Wsafterroomselection hasModal={this.state.hasmodal} />
        <Modelshow roomId={this.state.roomid} lang={this.state.lang}/>
        <Showcontrols roomId={this.state.roomid} lang={this.state.lang}/>
        <Modellights roomId={this.state.roomid} lang={this.state.lang}/>
        <Basementfloors roomId={this.state.roomid} lang={this.state.lang}/>
        <Wsvideowalls roomId={this.state.roomid} lang={this.state.lang}/>
        <Lightsscreen roomId={this.state.roomid} lang={this.state.lang}/>
      </div>
    );
  }
}

export default Wadisaferroomwrap;