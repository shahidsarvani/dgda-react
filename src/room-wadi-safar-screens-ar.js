import Wsafterroomselectionar from './screens/ws-after-room-selection-ar';
import Modelshowar from './screens/model-show-ar';
import Modellightsar from './screens/model-lights-screen-ar';
import Basementfloorsar from './screens/basement-floors-ar';
import Wsvideowallsar from './screens/ws-videowalls-ar';
import Lightsscreenar from './screens/lightsscreen-ar';
import Showcontrolsar from './screens/show-controls-screen-ar';
import './customjqjs';
import React, { Component } from 'react';


class Wadisaferroomwrapar extends Component {
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
        <Wsafterroomselectionar hasModal={this.state.hasmodal} />
        <Modelshowar roomId={this.state.roomid} lang={this.state.lang}/>
        <Showcontrolsar roomId={this.state.roomid} lang={this.state.lang}/>
        <Modellightsar roomId={this.state.roomid} lang={this.state.lang}/>
        <Basementfloorsar roomId={this.state.roomid} lang={this.state.lang}/>
        <Wsvideowallsar roomId={this.state.roomid} lang={this.state.lang}/>
        <Lightsscreenar roomId={this.state.roomid} lang={this.state.lang}/>
      </div>
    );
  }
}

export default Wadisaferroomwrapar;