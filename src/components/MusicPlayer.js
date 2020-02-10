import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPlay,
  faPause,
  faPlus,
  faMinus,
}  from "@fortawesome/free-solid-svg-icons";

export default class MusicPlayer extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      playing: false
    };
  }

  togglePlayButton = ()=>{
    const { playing } = this.state;

    if (playing){
      document.getElementById('player').pause();
    } else {
      document.getElementById('player').play();
    }

    this.setState({
      playing: !playing
    });
  };

  lowerVolume = ()=>{
    document.getElementById('player').volume -= 0.1
  };

  raiseVolume = ()=>{
    document.getElementById('player').volume += 0.1
  };

  initProgressBar = ()=>{
    var player = document.getElementById('player');
    var length = player.duration;
    var current_time = player.currentTime;

    // calculate total length of value
    var totalLength = (length && this.calculateTotalValue(length)) || "00:00";
    document.getElementById("end-time").innerHTML = totalLength;

    // calculate current value time
    var currentTime = this.calculateCurrentValue(current_time);
    document.getElementById("start-time").innerHTML = currentTime;

    var progressbar = document.getElementById('seek-obj');
    progressbar.value = (player.currentTime / player.duration) || 0;
    progressbar.addEventListener("click", seek);

    if (player.currentTime === player.duration){
      document.getElementById('play-btn').className = "";
    }

    function seek(event) {
      var percent = event.offsetX / this.offsetWidth;
      player.currentTime = percent * player.duration;
      progressbar.value = percent / 100;
    }
  };

  calculateTotalValue = (length)=>{
    const minutes = Math.floor(length / 60);
    const seconds_int = (length - minutes * 60);
    const seconds_str = seconds_int.toString();
    const seconds = seconds_str.substr(0, 2);
    const time = (minutes || 0) + ':' + (seconds || 0);

    return time;
  }

  calculateCurrentValue = (currentTime)=>{
    var current_hour = parseInt(currentTime / 3600) % 24,
    current_minute = parseInt(currentTime / 60) % 60,
    current_seconds_long = currentTime % 60,
    current_seconds = current_seconds_long.toFixed(),
    current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);

    return current_time;
  }

  render(){
    const { song, show } = this.props;
    const { playing } = this.state;

    const playPause = (playing) ? (faPause) : (faPlay);
    const buttonStyle = {
      color: "#328096",
      cursor: "pointer"
    };

    const musicPlayerStyle = {
      display: "flex",
      backgroundColor: "#343a40",
      color: "white",
      alignItems: "center"
    };

    return (
      <div id="music-player" style={{display: (show) ? ("unset") : ("none")}}>

        <audio id="player" src={song} controls controlsList="nodownload" style={{display: "none"}} onTimeUpdate={()=>{this.initProgressBar()}}>
          <source src={song} type="audio/mpeg"/>
        </audio>

        <div className="row justify-content-center">
          <div className="col-12 p-3" style={musicPlayerStyle}>

            <FontAwesomeIcon size="2x" style={{...buttonStyle, ...{marginRight: 16}}} icon={playPause} onClick={this.togglePlayButton}/>

            <div style={{width: "100%", marginRight: 16, position: "relative", top: 8}}>
              <div style={{width: "100%"}}>
                <span id="seek-obj-container" style={{display: "flex", alignItems: "center", width: "100%"}}>
                  <progress className="bg-info" id="seek-obj" value="0" max="1" style={{width: "100%", height: 10}}></progress>
                </span>
              </div>
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <small id="start-time"></small>
                <small id="end-time"></small>
              </div>
            </div>

            <div style={{display: "flex", alignItems: "center"}}>
              <div style={{marginRight: 16}}>Vol</div>
              <FontAwesomeIcon size="2x" style={{...buttonStyle, ...{marginRight: 16}}} icon={faMinus} onClick={this.lowerVolume}/>
              <FontAwesomeIcon size="2x" style={{...buttonStyle}} icon={faPlus} onClick={this.raiseVolume}/>
            </div>

          </div>
        </div>

      </div>
    );
  }
}
