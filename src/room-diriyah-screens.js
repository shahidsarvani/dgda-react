import Afterroomselection from './screens/after-room-selection';
import Modelshow from './screens/model-show';
import Modellights from './screens/model-lights-screen';
import Basementfloors from './screens/basement-floors';
import Videowalls from './screens/videowalls';
import Lightsscreen from './screens/lightsscreen';
import Showcontrols from './screens/show-controls-screen';
import './customjqjs';
import React, { Component } from 'react';


class Diriyahroomwrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomid: this.props.roomId,
      hasmodal: (this.props.hasModal) ? this.props.hasModal: 0,
      lang: (this.props.lang) ? this.props.lang : '',
      video: '',
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
  setVideo = (video) => {
    this.setState({video: video});
  }

  render() {
    return (
      <div className="diriyah_room_page">
        <Afterroomselection hasModal={this.state.hasmodal} roomId={this.state.roomid} lang={this.state.lang}/>
        <Modelshow roomId={this.state.roomid} lang={this.state.lang} video={this.state.video}/>
        <Showcontrols roomId={this.state.roomid} lang={this.state.lang} onSetVideo={this.setVideo}/>
        <Modellights roomId={this.state.roomid} lang={this.state.lang}/>
        <Basementfloors roomId={this.state.roomid} lang={this.state.lang}/>
        <Videowalls roomId={this.state.roomid} lang={this.state.lang}/>
        <Lightsscreen roomId={this.state.roomid} lang={this.state.lang}/>
      </div>
    );
  }
}

export default Diriyahroomwrap;