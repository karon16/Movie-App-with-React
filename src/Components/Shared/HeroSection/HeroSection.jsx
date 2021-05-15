import { useState, useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { trendingMedia } from "../../ApiLinks/ApiLinks";
import TrendingMediaList from "./TrendingMediaList";

const HeroSection = () => {
  const [trendingMedias, setTrendingMedias] = useState([]);

  const getTrendingMedia = () => {
    return fetch(trendingMedia)
      .then((response) => response.json())
      .then(({ results }) => {
        setTrendingMedias(results.slice(0, 5));
      });
  };

  useEffect(() => {
    getTrendingMedia();
  }, []);

  return (
    <>
        <TrendingMediaList trendingMedias={trendingMedias} />
    </>
  );
};

export default HeroSection;
