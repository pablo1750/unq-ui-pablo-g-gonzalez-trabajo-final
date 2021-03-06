import React from 'react';
import { Link } from 'react-router-dom';

export const Intro = (props) => {
  return (
    <>
      <div className="container d-flex justify-content-center fixed-top mt-5">
        <div className="intro-spinner" >
          <Link to="/game" className="btn btn-primary btn-lg intro-spinner start">Start</Link>
          <div className="intro-spinner-hand scissors">
            <img src="assets/intro_scissors.png" alt="scissors-hand"/>
          </div>
          <div className="intro-spinner-hand lizard">
            <img src="assets/intro_lizard.png" alt="lizard-hand"/>
          </div>
          <div className="intro-spinner-hand spock">
            <img src="assets/intro_spock.png" alt="spock-hand"/>
          </div>
          <div className="intro-spinner-hand paper">
            <img src="assets/intro_paper.png" alt="paper-hand"/>
          </div>
          <div className="intro-spinner-hand rock">
            <img src="assets/intro_rock.png" alt="rock-hand"/>
          </div>
        </div>
      </div>
    </>
  )
}
