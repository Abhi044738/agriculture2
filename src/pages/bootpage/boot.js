import { useState } from "react";
import { bootData } from "../../Assets/Data/botData";
import "./style.css";

export const FAQS = () => {
  const [data, setData] = useState(bootData);
  const [answer, setAnswer] = useState(null);
  function handleClick(id) {
    const newData = data.find((item) => item.id === id).data;
    if (newData != undefined) {
      setData(newData);
    }
    console.log(newData);
  }

  return (
    <div className="bot-containor">
      <h2>
        Welcome to Krishi kalyan bot will tell you about some common crops and
        some FQAs related to farming.
      </h2>
      <section className="options options-content">
        {data.map((item) => (
          <div
            className="options-item"
            // key={item.id}
            onClick={() => handleClick(item.id)}
          >
            <h5 style={{ margin: "auto" }}>{item.name}</h5>
            {item.answer != undefined ? (
              <button
                type="button"
                class="btn btn-outline-success"
                onClick={() => setAnswer(item.answer)}
              >
                view more
              </button>
            ) : null}
          </div>
        ))}
      </section>
      <button
        type="button"
        class="btn btn-outline-primary"
        onClick={() => {
          setData(bootData);
          setAnswer(null);
        }}
      >
        To main
      </button>
      <section>
        <p1>{answer}</p1>
      </section>
    </div>
  );
};
