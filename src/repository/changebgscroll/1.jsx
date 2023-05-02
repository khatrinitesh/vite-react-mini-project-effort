import React, { useState, useEffect, useRef } from 'react';

export default function ChangeBgScrollExample() {
  return (
    <>
       <Example/>
    </>
  )
}



class Example extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        scrolled: 0,
        scrolledbar: 0,
      };
      this.onScrollPage = this.onScrollPage.bind(this);
    }
    componentDidMount(){
      window.addEventListener("scroll", this.onScrollPage);
    }
    
    componentWillUnmount(){
      window.removeEventLister("scroll", this.onScrollPage);
    }
    onScrollPage(){
          const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolledPercentage = `${this.state.scrolled / winHeightPx * 100}%`;
      this.setState({
         scrolledbar: scrolledPercentage,
      })
      console.log(document.documentElement.scrollTop);
      this.setState({
         scrolled: document.documentElement.scrollTop,
      });
      if(this.state.scrolled >= 2000){
      var element = document.getElementById('bg');
  element.style.background = '#FF00AA';
    } else {
      var element = document.getElementById('bg');
  element.style.background = 'black';
    }
    }
    render(){
       const progressContainerStyle = {
        background: "#f8bbd0",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
        height: "5px",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        zIndex: 99
      };
  
      const progressBarStyle = {
        height: "5px",
        background: "#e91e63",
        width: this.state.scrolledbar
      };
  
      return (
      <div id="bg" style={{height: 4000+'px',}}>
          <div className="progress-container" style={progressContainerStyle}>
            <div className="progress-bar" style={progressBarStyle} />
          </div>
          <h1 style={{color: 'orange', position: 'fixed', top: 50+'%', left:50+'%'}} className="text">{this.state.scrolled}</h1>
          <h2 style={{color: 'white', position: 'fixed',top: 50+'%', left:50+'%', marginTop: 50+'px',}} className="text" >Please scroll down to see the changes on background color, and progress bar :)</h2>
        </div>
      );
    }
  }

