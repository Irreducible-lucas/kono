import {
  ContactUs,
  FeaturedNews,
  Footer,
  HeroSection,
  News,
  Testimonial,
  Welcome,
} from "../components";
import Nav from "../components/Nav";

const LandingPage = () => {
  return (
    <div className="relative bg-yellow-100 bg-cover bg-center bg-fixed  bg-[url('/path/to/your/background-image.jpg')] lg:px-10">
      <div className="lg:px-10 bg-white">
        <Nav />
        {/* <NavBar /> */}
        <HeroSection />
        <Welcome />
        <FeaturedNews />
        <News />
        <Testimonial />
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
