import React from 'react';
import Articles from '../../components/home/articales/Articles';
import Banner from '../../components/home/banner/Banner';
import FeaturedJob from '../../components/home/featuredJob/FeaturedJob';
import JobCategories from '../../components/home/JobCategory/JobCategory';
import Testimonials from '../../components/home/testimonials/Testimonials';
import Footer from '../../components/reuseable/Footer';

const Home = () => {
  return (
    <>
      <Banner />
      <JobCategories />
      <FeaturedJob />
      <Testimonials />
      <Articles />
      <Footer />
    </>
  );
};

export default Home;
