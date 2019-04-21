import React from 'react';
import SvgLogo from "./../../../public/img/network.svg";

function About() {
    return (
      
      <div className="row">

        <div className="col s12 l6">
          <div className="col s12 valign-wrappe">
            <h2>Why ChatUp?</h2>
          </div>
          <div className="col s12 valign-wrappe">
            <p>ChatUp was created in 2019 by DevSigns Team, withe the only goals of giving privacity to our team, and the end, it turned into a big chatting and social platform mainly focussed in the user privacity, We don't sell your information, we don't share your information,  we dont even know what is written between you and your partner, due we encrypt the information in a way that only you and your partner can have access  to it. And the best of all, It's totally free!</p> 
          </div>
        </div>

        <div className="col s12 l6 valign-wrappe">
            <SvgLogo  style={{"width":"100%","height":"auto"}}/>
        </div>

      </div>
    );
  }

export default About;