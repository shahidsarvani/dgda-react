import './App.css';
import './bootstrap.min.css';
import './mystyle.css';
import './css/rtl.css';
import './customjqjs';
import Headeren from './header';
import Headerar from './headerar';
import Footeren from './footer';
import Footerar from './footer-ar';
import Mainenglish from './main-en';
import Mainarabic from './main-ar';
import Welcomesection from './screens/welcome-video-screen';

import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      roomid: '',
      hasmodal: '',
      lang: '',
    }
  }

  setRoom = (room) => {
    this.setState({roomid: room.id});
    this.setState({hasmodal: room.has_model});
  }

  setLang = (lang) => {
    console.log('language set', lang);
    this.setState({lang: lang});
  }

  render() {
    return (
      <div className="App">
        <Headeren  onSetRoomID={this.setRoom} roomId={this.state.roomid} onSetLang={this.setLang}/>
        <Headerar/>
        <Welcomesection />
        <Mainenglish  roomId={this.state.roomid} hasModal={this.state.hasmodal} onSetRoomID={this.setRoom} lang={this.state.lang}/>
        <Mainarabic/>
        <Footeren  lang={this.state.lang}/>
      </div>
    );
  }
}

export default App;
