import React from 'react';
import HeroSection from '../components/HeroSection';
import PropertyGrid from '../components/PropertyGrid';
import ViewAllButton from '../components/ViewAllButton';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <PropertyGrid sliceValue={6}/>
      <ViewAllButton />
    </>
  );
};

export default HomePage;
