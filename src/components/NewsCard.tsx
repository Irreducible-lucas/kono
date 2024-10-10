import { Link } from "react-router-dom";
import styles from "../styles";
import { News } from "../types";

const NewsCard = ({ image, title, url, desc, date }: News) => {
  return (
    <div className="w-full relative mt-5 shadow-2xl rounded-lg overflow-hidden">
      <div className="bg-primary w-full h-[300px] lg:h-[350px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center rounded-t-lg"
        />
      </div>
      <div className="bg-white p-4 h-45 rounded-b-lg">
        <Link to={url} target="_blank">
          <h2
            className={`${styles.paragraph} text-center lg:text-left text-black font-bold uppercase`}
          >
            {title}
          </h2>
        </Link>
        <p className="my-5 text-slate-400">{desc}</p>
      </div>
    </div>
  );
};

export default NewsCard;
