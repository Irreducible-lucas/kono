import styles from "../styles";
import { Newsletters } from "../constants";
import NewsletterCard from "./NewsLetterCard";

const LatestNews = () => {
  return (
    <section className="mx-5 lg:mx-0 py-[40px] px-[40px] lg:px-[20px] lg:py-[40px] border-[1px]  border-lightgrey my-10 ">
      <h2 className={`${styles.heading3} py-1 px-2 bg-black text-white`}>
        Latest News
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-1 md:gap-x-10 mt-3">
        {Newsletters.slice(0, 6).map((newsletter) => (
          <NewsletterCard
            key={newsletter.id}
            title={newsletter.title}
            image={newsletter.image}
            url={newsletter.url}
            date={newsletter.date}
            desc={newsletter.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
