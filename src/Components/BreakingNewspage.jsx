import { useEffect } from "react";
import { News } from "../contants";
import { Link } from "react-router-dom";
import Read from "./Read";
import { useNewsContext } from "../context/NewsContext";
const BreakingNewspage = () => {
  const { stateNews } = useNewsContext();

  useEffect(() => {
    stateNews;
  }, [stateNews]);

  const getRandomNew = (array, count) => {
    const shuttleNew = array.sort(() => Math.random() - 0.5);
    return shuttleNew.slice(0, count);
  };

  const randomArray = getRandomNew(stateNews, 10);

  return (
    <section className="">
      <Read content="Breaking News" />
      <div className=" overflow-x-auto whitespace-nowrap scrollbar-hide ">
        {randomArray.map((News, index) => (
          <div key={index} className="w-[300px] inline-block p-2">
            <div className="bg-white p-4  rounded-xl  ">
              {News.urlToImage && (
                <img className="" src={News.urlToImage} alt="New image " />
              )}
              <div className="pt-2">
                <h1 className=" font-bold text-xl truncate">{News.author}</h1>
              </div>
              <div className="">
                <h2 className="text-wrap font-semibold text-lg py-1">
                  {News.title}
                </h2>
              </div>
              <p className="text-wrap font-extralight">
                {typeof News.description === "string"
                  ? News.description.substring(0, 50) + "..."
                  : News.description}
              </p>
              <div className=" my-2">
                <Link
                  to={News.url}
                  className=" px-2 rounded-sm  text-white bg-blue-600 "
                >
                  Read more
                </Link>
              </div>
              <p className="font-extralight">{News.publishedAt}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="py-3">
        <h1 className="text-xl font-semibold">Top Story</h1>
      </div>
    </section>
  );
};

export default BreakingNewspage;
