import { Link } from "react-router-dom";
import { FeaturedDevelopments, FeaturedType } from "../constants";
import { styles, layout } from "../styles";
import FeaturedDevelopmentCard from "./FeaturedDevelopmentCard";

const FeaturedDevelopment = () => {
  return (
    <section className={`bg-white py-[40px] ${layout.section}`}>
      <h2 className={`${styles.heading1} text-center pb-3 md:pb-4`}>
        Featured Development Projects
      </h2>

      <div className="lg:flex items-center justify-center hidden lg:gap-x-5 my-10 ">
        {FeaturedType.map((feature) => (
          <Link
            to={feature.url}
            target="_blank"
            key={feature.id}
            className={`${styles.paragraph} text-red-600 hover:black `}
          >
            {feature.title}
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 md:gap-x-1 mt-3 p-3">
        {FeaturedDevelopments.slice(0, 6).map((feature) => (
          <FeaturedDevelopmentCard
            key={feature.id}
            title={feature.title}
            image={feature.image}
            url={feature.url}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedDevelopment;
