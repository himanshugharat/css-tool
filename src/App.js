import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(async () => {
    await fetch("https://animechan.vercel.app/api/random")
      .then((response) => response.json())
      .then((quote) => setdata(quote));
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
      <div class="grid-container mainCard">
        <div class="name">{data.anime}</div>
        <div class="content">{data.quote}</div>
        <div class="by">-{data.character}</div>
      </div>
    </div>
  );
}

export default App;
