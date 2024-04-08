import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
const BreakingNewspage = () => {
  // // const [loading, setLoading] = useState(false)
  // // const [error, setError] = useState("")
  const [data, setData] = useState([]);

  const Url =
    "https://newsapi.org/v2/top-headlines?q=law&apiKey=164d13f57808465192e65a3d27f04f35";
    // "https://newsapi.org/v2/everything?q=nigerian&apiKey=164d13f57808465192e65a3d27f04f35";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(Url);
        const newData = response.data.articles;
        // console.log(response.data);
        setData(newData.filter((newsData) => newsData.urlToImage !== null));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const getRandomNew = (array, count) => {
    const shuttleNew = array.sort(() => Math.random() - 0.5);
    return shuttleNew.slice(0, count);
  };


  const randomArray = getRandomNew(data, 10);
  return (
    <section className="">
      <h1 className="text-2xl font-semibold sticky z-0 top-0 ">
        Breaking News
      </h1>
      {/* {data && ( */}
      <div className=" overflow-x-auto whitespace-nowrap scrollbar-hide ">
        {randomArray.map((News) => (
          <div key={News.id} className="w-[300px] inline-block p-2">
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
                  ? News.description.substring(0, 100) + "..."
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
