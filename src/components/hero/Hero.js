import React, { useEffect } from 'react'
import { setupScrollReveal } from '../../assets/js/main.js';

import NewsletterForm from '../forms/NewsletterForm';
import {NavLink} from "react-router-dom";

const Hero = (props) => {
  useEffect(() => {
    setupScrollReveal();
  });

  function redirectToTypeform(e) {
    e.preventDefault();
    window.location.href='https://form.typeform.com/to/LlfaVy';
  }


  const { title, content } = props;
  const Illustration = props.illustration;

  return (

      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="container-sm">
                <h1 className="hero-title h2-mobile mt-0 is-revealing">{title}</h1>
                <p className="hero-paragraph is-revealing">{content} <a href={"/brand"} className={"brandsCTA"}>Learn more about selling on PopUp</a></p>
              </div>
              <button className="button button-primary button-block button-shadow"  onClick={redirectToTypeform} type="button">{"Get early access"}</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="hero-illustration">
            <Illustration />
          </div>
        </div>
      </section>
  )
}

export default Hero;
