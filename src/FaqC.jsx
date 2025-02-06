import React from "react";
import { useState } from "react";

function FaqC(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = props.data;
  function handleClick(index) {
    setActiveIndex(activeIndex === index ? null : index);
  }
  const list = data.map((d, index) => (
    <div className="faq-box" key={index}>
      <div className="que" onClick={() => handleClick(index)}>
        <button className={activeIndex === index ? "arrow" : ""}>></button>
        <div>{d.question}</div>
      </div>
      {activeIndex === index && (
        <div className="ans">{activeIndex === index && d.answer}</div>
      )}
    </div>
  ));
  return <>{list}</>;
}

export default FaqC;
