import NewsletterCard from "./NewsLetterCard";
import { Newsletter } from "../types";
import { useEffect, useState } from "react";
import { getNewsLetters } from "../data";
const NewsLetterList = () => {
  const [newsletters, setNewsletters] = useState<Newsletter[] | null>(null);

  useEffect(() => {
    fetchNewsletters();
  }, []);

  const fetchNewsletters = async () => {
    const data = await getNewsLetters();
    setNewsletters(data);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-10 mt-8">
      {newsletters?.map((newsletter: Newsletter) => (
        <NewsletterCard
          key={newsletter.id}
          id={newsletter.id}
          title={newsletter.title}
          image={newsletter.image}
          url={newsletter.url}
        />
      ))}
    </div>
  );
};

export default NewsLetterList;
