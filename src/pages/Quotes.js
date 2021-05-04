import React, { useEffect, useState } from "react";
import Breadcrumbs from "../component/Breadcrumbs";
import tile from "../style/quote.module.css";

function Quotes() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const fun = async () => {
    await fetch("https://animechan.vercel.app/api/random")
      .then((response) => response.json())
      .then((quote) => setdata(quote));
  };
  useEffect(() => {
    fun();
  }, [loading]);
  return (
    <div className={tile.main}>
      <Breadcrumbs />
      <button
        className={tile.animeButton}
        onClick={() => {
          setloading(!loading);
        }}
      >
        More
      </button>
      <div className={tile.gridcontainermainCard}>
        <div className={tile.name}>{data.anime}</div>
        <div className={tile.content}>{data.quote}</div>
        <div className={tile.by}>-{data.character}</div>
      </div>
    </div>
  );
}

export default Quotes;
