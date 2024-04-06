import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
const NewToDisplay = () => {
  const [currentNews, setCurrentNews] = useState([]);

  const apiUrl =
    "https://newsapi.org/v2/top-headlines?q=sex&apiKey=164d13f57808465192e65a3d27f04f35";

  useEffect(() => {
    const getNews = async () => {
      try {
        const apiData = await axios.get(apiUrl);
        console.log(apiData.data.articles);
        setCurrentNews(apiData.data.articles);
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
            className=" p-4 shadow-2xl rounded-xl bg-[#F5F5F5] max-sm:flex  max-sm:flex-row-reverse max-sm:shadow-2xl "
          >
            <img
              src={Api.urlToImage}
              alt="News image"
              className=" w-[100%] rounded-xl max-sm:w-[40%]"
            />
            <div className=" ">
              <div className="flex">
                <br />
                <p className="text-xl font-bold">{Api.author}</p>
              </div>

              <h1 className="font-semibold mb-2  ">
                {typeof Api.title === "string"
                  ? Api.title.substring(0, 40) + "..."
                  : Api.title}
              </h1>
              <p className="max-sm:text-sm max-sm:leading-5 font-medium">
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

export default NewToDisplay;
