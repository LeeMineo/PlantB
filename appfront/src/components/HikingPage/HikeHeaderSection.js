import React from 'react';
import Header from '../../components/Header';  // Header component
import TrailSlider from './TrailSlider';  // Import the slider

const HikeHeaderSection = () => {
  return (
    <Header height="50vw"> {/* Adjusted height */}
      <TrailSlider /> {/* Add the TrailSlider as children */}
    </Header>
  );
};

export default HikeHeaderSection;
