import React from 'react';

import MusicPlayer from "./MusicPlayer.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
}  from "@fortawesome/free-solid-svg-icons";

import $ from "jquery";

export default class ComicNavigator extends React.Component {

  componentDidMount = ()=>{
    document.querySelector('#image').addEventListener('load', this.onLoad);
  }

  pageNavigation = (new_page)=>{
    const {
      setCurrentPage,
    } = this.props;

    $("#content").fadeOut(1000, function(){
      setCurrentPage(new_page, ()=>{
        $(window).scrollTop($("#panel").offset().top);
      })
    });

  };

  onLoad = ()=>{
    $("#content").fadeIn(1000, ()=>{
      if (this.props.page_data.music){
        $("#music-player").fadeIn(1000);
      }
    });
  };

  render(){
    const {
      page_data,
    } = this.props;

    const buttonStyle = {
      color: "#328096",
      cursor: "pointer"
    };

    return (
      <div id="panel" style={{border: "1px solid black", width: "100%", padding: 8, minHeight: "100vh"}}>
        <div id="content">
          <div style={{height: 64, margin: 16, marginTop: 8}}>
            {page_data.music && <MusicPlayer hidden={true} song={page_data.music}/>}
          </div>
          <img id="image" load={this.onLoad} src={page_data.image} class="img-fluid" alt=""/>

          <div style={{display: "flex", flexDirection: "column", padding: 8}}>
            <FontAwesomeIcon
              size="2x"
              style={{...buttonStyle, ...{float: "left"}}}
              icon={faLongArrowAltLeft}
              onClick={()=>{
                this.pageNavigation(page_data.back);
              }}
              />

            <br/>
            <br/>

            <div>{page_data.text}</div>

            <br/>

            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
              {Object.keys(page_data.choices).map((key)=>{
                return (
                  <strong style={{...buttonStyle, ...{display: "flex", alignItems: "center"}}} onClick={()=>{
                      this.pageNavigation(page_data.choices[key].to);
                    }}>
                    {`${page_data.choices[key].text}`}
                    <FontAwesomeIcon
                      size="2x"
                      style={{...buttonStyle, ...{marginLeft: 2}}}
                      icon={faLongArrowAltRight}
                    />
                  </strong>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    );
  }
}
