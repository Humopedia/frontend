import React, { useState, useEffect,Image }  from 'react';
import './Banner.css'; // Import the custom CSS file
import image1 from '../../src/assets/images/Banner1.jpg';
import image2 from '../../src/assets/images/Banner2.jpg';
import image3 from '../../src/assets/images/Banner3.jpg';
import image4 from '../../src/assets/images/Banner4.png';
import image5 from '../../src/assets/images/Banner5.jpeg';
const images = [
  image1,
  image2,
  image3,
  image4,
  image5

];

const Banner = () => {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPreviousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-center mt-10">        
        {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className={`absolute  w-128 h-128 rounded-xl transition-opacity duration-1000 ${
            currentImage === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
        />
      ))}
        
      </div>
  </div>
  );
};

export default Banner;




