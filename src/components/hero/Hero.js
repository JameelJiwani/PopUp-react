import React, { Component } from 'react'
import { setupScrollReveal } from '../../assets/js/main.js';

import NewsletterForm from '../forms/NewsletterForm';
import {NavLink} from "react-router-dom";

class Hero extends Component {
  componentDidMount() {
    setupScrollReveal();
  }

  render() {
    const { title, content } = this.props;
    const Illustration = this.props.illustration;

    return (
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="container-sm">
                <h1 className="hero-title h2-mobile mt-0 is-revealing">{title}</h1>
                <p className="hero-paragraph is-revealing">{content} <a href={"/brand"} className={"brandsCTA"}>Learn more about selling on PopUp</a></p>
              </div>
              <NewsletterForm className="hero-form" submit="Get early access" />
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
}

export default Hero;
