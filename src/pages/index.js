import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';

const IndexPage = () => {
  return (
    <Layout>
      <Hero
        title="PopUp makes online shopping fun, unique and social."
        content="With PopUp buying your next outfit is as easy as swiping right. Take the friction out of shopping with curated and personalized recommendations and always stay in the know about when your friends are buying and shopping for new outfits."
        illustration={HeroIllustration}
      />
    </Layout>
  )
}

export default IndexPage;
