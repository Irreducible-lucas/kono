import styles from "../styles";
import { Newsletters } from "../constants";

import NewCard from "./NewCard";

const News = () => {
  return (
    <section className="mx-5 lg:mx-0 py-[40px] px-[40px] lg:px-[20px] lg:py-[40px] border-[1px] border-lightgrey my-10">
      <h2 className={`${styles.heading3}  py-1  px-2 bg-black text-white`}>
        News
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-10 mt-8">
        {Newsletters.slice(0, 6).map((news) => (
          <NewCard
            key={news.id}
            title={news.title}
            image={news.image}
            url={news.url}
            date={news.date}
            desc={news.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default News;
