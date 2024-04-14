import { Link } from "react-router-dom";
import { useNewsContext } from "../context/NewsContext";

const ForYou = () => {
  const { stateNews } = useNewsContext();
  // console.log(stateNews.pub);
  // const { articles } = stateNews();
  // console.log(articles)

  const randomApiData = (arr) => {
    const getRandDate = arr.sort(() => Math.random() - 0.5);
    return getRandDate;
  };
  const newsData = randomApiData(stateNews);

  return (
    <main>
      <div className="grid xl:grid-cols-4 gap-5 md:grid-cols-3 sm:grid-cols-2 sm:gap-6 max-sm:gap-8 max-sm:grid-cols-1">
        {newsData.map((Api, index) => (
          <div
            key={index}
            className="w-[100%] p-4 shadow-2xl rounded-xl bg-[#F5F5F5] max-sm:flex  max-sm:flex-row-reverse max-sm:shadow-2xl "
          >
            <img
              src={Api.urlToImage}
              alt="News image"
              className=" w-[100%] rounded-xl max-sm:w-[40%]"
            />
            <div className=" ">
              <div className="flex">
                <br />
                <p className=" text-wrap text-xl font-bold">
                  {typeof Api.author === "string"
                    ? Api.author.substring(0, 13) + "..."
                    : Api.author}
                </p>
              </div>

              <h1 className=" text-wrap font-semibold mb-2  ">{Api.title}</h1>
              <p className="max-sm:text-sm max-sm:leading-5 font-medium mr-5">
                {typeof Api.content === "string"
                  ? Api.content.substring(0, 100) + "..."
                  : Api.content}
              </p>
              <div className=" my-2">
                <Link
                  to={Api.url}
                  className="px-2 rounded-sm  text-white bg-blue-600 "
                >
                  Read more
                </Link>
              </div>
              <p className="font-extralight">{Api.publishedAt}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ForYou;
