import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function StatsContainer() {
  return (
    <section className="w-full h-80 bg-center">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        className="h-80"
      >
        <div>
          <img src="/Screenshot 2024-11-05 160304.png" alt="Slide 1" className="w-full h-80 object-cover" />
        </div>
        <div>
          <img src="https://quickinsure.s3.ap-south-1.amazonaws.com/uploads/static_page/9ed6c27c-7890-44fa-99d0-eee4c554dc72/AVERAGE-COST-OF-CAR-INSURANCE-IN-INDIA-FOR-2024.png" alt="Slide 2" className="w-full h-80 object-cover" />
        </div>
        <div>
          <img src="https://st4.depositphotos.com/13194036/21064/i/450/depositphotos_210649718-stock-photo-smiling-client-shaking-hands-doctor.jpg" alt="Slide 3" className="w-full h-80 object-cover" />
        </div>
      </Carousel>
    </section>
  );
}

export default StatsContainer;

