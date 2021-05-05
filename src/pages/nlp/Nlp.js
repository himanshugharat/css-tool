import React, { useEffect, useState } from "react";
import axios from "axios";
import tile from "../../style/nlp.module.css";
function Nlp() {
  const [data, setdata] = useState({});
  const [input, setinput] = useState("Your text here");
  const [loading, setloading] = useState(false);
  const mainFun = async (date) => {
    const article = { text: date };
    const headers = { "Content-Type": "application/json" };
    await axios
      .post("https://sentim-api.herokuapp.com/api/v1/", article, { headers })
      .then((re) => {
        setdata(re);
        console.log(data);
        setloading(true);
      });
  };
  useEffect(() => {}, []);

  return (
    <div>
      <div className={tile.gridcontainer}>
        <div className={tile.input}>
          <div>
            <label htmlFor="">
              <h3>Enter your data here</h3>
            </label>
            <div>
              <textarea
                rows="10"
                cols="50"
                type="text"
                onChange={(e) => {
                  setinput(e.target.value);
                }}
              />
              <div>
                <button className={tile.button} onClick={() => mainFun(input)}>
                  check
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={tile.output}>
          {loading && (
            <>
              {" "}
              <div>
                <h4>
                  Overall rating: <mark>{data.data.result.type}</mark>
                </h4>
              </div>
              <hr />
              <div>
                <h4> Rating based on sentences</h4>
                <ul>
                  {data.data.sentences.map((re) => {
                    return (
                      <div>
                        <li>
                          {" "}
                          {re.sentence}: <mark>{re.sentiment.type}</mark>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nlp;
