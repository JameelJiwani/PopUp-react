import React from 'react';
import Layout from '../layouts/index';
import fyScreen from '../assets/images/forYouScreen.png'

const BrandPage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
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
            <div className="entry-media">
              <img src={fyScreen} alt="app preview" width="300" height="300"/>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BrandPage;
