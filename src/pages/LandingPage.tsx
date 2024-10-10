import {
  ContactUs,
  FeaturedNews,
  Footer,
  Header,
  HeroSection,
  News,
  Testimonial,
  Welcome,
} from "../components";
import LandMarkImages from "../components/LandMarkImages";

const LandingPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <HeroSection />
      <LandMarkImages />
      <Welcome />
      <FeaturedNews />
      <News />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
