import backgroundImage from "../assets/images/breaking-news-background-breaking-news-background-tv-channel-news-screensaver-vector-106024145.webp";

const AdditionalPage = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <div
        className="  h-screen rounded-r-2xl max-sm:rounded-b-[4rem] max-sm:h-[20rem] "
        style={containerStyle}
      ></div>
    </>
  );
};

export default AdditionalPage;
