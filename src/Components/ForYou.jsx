import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

const ForYou = () => {
  const [currentNews, setCurrentNews] = useState([]);

  const apiUrl =
    // "https://newsapi.org/v2/everything?country=ng&apiKey=164d13f57808465192e65a3d27f04f35";
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=164d13f57808465192e65a3d27f04f35";

  useEffect(() => {
    const getNews = async () => {
      try {
        const apiData = await axios.get(apiUrl);
        console.log(apiData.data.articles);
        const displayCurrentNews = apiData.data.articles;
        setCurrentNews(
          displayCurrentNews.filter(
            (displayCurrentNews) => displayCurrentNews.urlToImage !== null
          )
        );
      } catch (error) {
        console.log(error);
      }
    };
    getNews();
  }, []);

  const randomApiData = (arr) => {
    const getRandDate = arr.sort(() => Math.random() - 0.5);
    return getRandDate;
  };
  const newsData = randomApiData(currentNews);

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
                <Link to={Api.url} className="ring-1">
                  Read more
                </Link>
              </div>
              <p>{Api.publishedAt}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ForYou;
