import { useState, useEffect } from "react";
import MCQ from "./MCQ";
import CR from "./CR";

function Survey() {
  const [data, setData] = useState(require("../_assets/sample.json"));

  const handleSubmit = e => {
    e.preventDefault();
    alert(data.thankyou);
  }

  return (
    <>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <p>{data.instructions}</p>
      <form onSubmit={handleSubmit}>
        {data.questions.map((question, idx) => {
          if (question.type === "mcq") {
            return <MCQ question={question} key={idx} idx={idx} />;
          } else {
            return <CR question={question} key={idx} />;
          }
        })}
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Survey;
