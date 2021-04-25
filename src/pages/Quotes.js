import React, { useEffect, useState } from "react";
import "../App.css";

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
    <div className="main">
      <button
        className="animeButton"
        onClick={() => {
          setloading(!loading);
        }}
      >
        More
      </button>
      <div className="grid-container mainCard">
        <div className="name">{data.anime}</div>
        <div className="content">{data.quote}</div>
        <div className="by">-{data.character}</div>
      </div>
    </div>
  );
}

export default Quotes;
