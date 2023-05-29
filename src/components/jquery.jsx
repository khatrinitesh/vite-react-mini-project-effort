import React, { Component } from 'react';
import $ from 'jquery';


export default class JQueryCode extends Component {

    jQueryCode = () => {
        $('.btn').click(function(){
            $('p').css('color','red')
        });

        $('#btnToggle').click(function(){
            $('#paragraph').slideToggle();
        });
    }

    componentDidMount(){
        this.jQueryCode();
    }
  render() {
    return (
      <div>
        <p>Aliqua id laboris deserunt mollit sunt veniam labore aute. Eu occaecat amet veniam excepteur mollit proident reprehenderit. Ex magna mollit dolore aliqua elit ea. Magna incididunt voluptate commodo consequat. Fugiat officia reprehenderit officia incididunt nulla veniam incididunt.</p>
        <button className='btn'>Click here</button>

        <button id="btnToggle">Click toggle</button>
        <p id="paragraph" style={{display:'none'}}>Lorem ipsum</p>


        <div className="box1">
            <h2 class="header">heading title 1</h2>
        </div>
        <div className="box2">
            <h2 class="header">heading title 2</h2>
        </div>


      </div>
    )
  }
}
