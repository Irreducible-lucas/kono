import styles from "../styles";
import { FeaturedWriteUp } from "../constants";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <section className="mx-5 lg:mx-0 py-[40px] px-[40px] lg:px-[20px] lg:py-[40px] border-[1px]  border-lightgrey my-10 ">
      <h2 className={`${styles.heading3} py-1 px-2 bg-black text-white`}>
        Featured Development Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2  md:gap-x-3 mt-3">
        {FeaturedWriteUp.slice(0, 2).map((feature) => (
          <FeaturedCard
            key={feature.id}
            title={feature.title}
            image={feature.image}
            url={feature.url}
            date={feature.date}
            desc={feature.desc}
          />
        ))}
      </div>
    </section>
  );
};
export default Featured;
