import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AdvantagesSection from './components/AdvantagesSection';
import SpecificationsSection from './components/SpecificationsSection';
import PhotosAndVideosSection from './components/PhotosAndVideosSection';
import DeliverySection from './components/DeliverySection';
import FAQSection from './components/FAQSection';
import DoubtsSection from './components/DoubtsSection';
import ContactFormSection from './components/ContactFormSection';
import ContactInfoSection from './components/ContactInfoSection';
// import ReviewsSection from './components/ReviewsSection'
import YouTubeSection from './components/YouTubeSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const Landing: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AdvantagesSection />
        <SpecificationsSection />
        <PhotosAndVideosSection />
        <DeliverySection />
        <FAQSection />
        <DoubtsSection />
        <ContactFormSection />
        <ContactInfoSection />
        {/* <ReviewsSection /> */}
        <YouTubeSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

// <main>
//   <TechnicalSpecs />
//   <Gallery />
//   <DeliveryProcess />
//   <FAQ />
//   <Reassurance />
//   <ContactForm />
//   <ContactInfo />
//   <Reviews />
//   <YouTubeSection />
//   <Newsletter />
// </main>
// <Footer />

export default Landing;