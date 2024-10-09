import { HeroImage, Lillian, hero2, hero3 } from "../assets";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "../styles";

const HeroSection = () => {
  return (
    <section className=" p-5  w-full mt-10 ">
      <div className="flex flex-col md:flex-row items-center justify-between  mb-20">
        <div className="">
          <h1
            className={`${styles.heading1} lg:text-8xl mb-10 lg:max-w-md hidden lg:flex`}
          >
            Kono Official Website
          </h1>
          <p className={`${styles.paragraph}`}>
            Working Together for a Stronger, Brighter Future for Kono
          </p>
        </div>
        <img src={Lillian} width={340} height={180} className="rounded-full" />
      </div>
      <div className="bg-yellow-200">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop
          interval={3000}
          showArrows={true}
          showStatus={false}
        >
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-[500px]"
            src={HeroImage}
            alt="Good Governance and Equality"
          />

          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-[500px]"
            src={hero2}
            alt="Good Governance and Equality"
          />

          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-[500px]"
            src={hero3}
            alt="Good Governance and Equality"
          />
        </Carousel>
      </div>
    </section>
  );
};
export default HeroSection;
