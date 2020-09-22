import React from 'react';
import Layout from '../layouts/index';
import fyScreen from '../assets/images/fy-screen.png'

const BrandPage = () => {
  return (
    <Layout>
      <article className="entry">
        <div className="container">
          <div className="entry-inner">
            <div className="entry-content">
              <div className="container-sm">
                <header className="entry-header">
                  <h1 className="entry-title">Convert customer browsing into Sales Using Pop-Up</h1>
                </header>

                <div className="entry-body">
                  <p>
                    PopUp will save your brand time and money. Reduce your marketing expenses and let customers come to you. With PopUp’s curated and personalized recommendations, shoppers have the ability to buy from you with ease. All this and more all for free.
                </p>
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
