import { Link } from "react-router-dom";
import styles from "../styles";
import { FeaturedsDevelopment } from "../types";

const FeaturedDevelopmentCard = ({
  title,
  image,
  url,
}: FeaturedsDevelopment) => {
  return (
    <div className={`w-full relative bg-white`}>
      <div className="p-2">
        <img
          src={image}
          className="object-contain object-center w-full rounded-md mb-3"
        />
        <Link to={url} target="_blank">
          <h2
            className={`${styles.paragraph} text-center lg:text-left text-black font-bold uppercase`}
          >
            {title}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedDevelopmentCard;
