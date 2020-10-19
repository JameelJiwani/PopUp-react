import React, { useEffect } from 'react'
import { setupScrollReveal } from '../../assets/js/main.js';

import BrandIllustration from '../../components/brand/BrandIllustration';

const Brand = () => {
  useEffect(() => {
    setupScrollReveal();
  });

  return (

      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="container-sm">
                <header className="entry-header">
                  <h1 className="entry-title">Evaluate your shops metrics and convert customer browsing into sales using PopUp</h1>
                </header>

                <div className="entry-body">
                    <ul>
                      <li className={"list-item"}>Order Requests</li>
                      <li className={"list-item"}>Daily Sales</li>
                      <li className={"list-item"}>Number of Customers putting your products in their carts</li>
                      <li className={"list-item"}>More than 3+ other metrics</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="hero-illustration">
            <BrandIllustration />
          </div>
        </div>
      </section>
  )
}

export default Brand;
