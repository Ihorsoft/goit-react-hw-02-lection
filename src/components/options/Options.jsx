import { useState } from "react";
import s from "./Options.module.css";

const Options = ({ feedbackObj, updateFeedback }) => {
  const { good, neutral, bad, reset } = feedbackObj;

  /* const handleClickGood = (name) => {
    console.log("click Good", { good });

    setFeedbackObj({
      ...feedbackObj,
      good: feedbackObj.good + 1,
      reset: true,
    }); */
  /*  setClickGood((prevState) => prevState + 1);
    setClickReset((prevState) => true);
    feedbackObj.good = clickGood; */
  // };

  /*   const [clickGood, setClickGood] = useState(good);
  const [clickNeutral, setClickNeutral] = useState(neutral);
  const [clickBad, setClickBad] = useState(bad);
  const [clickReset, setClickReset] = useState(false);
  console.log("good first in options", good);
  console.log("click Good first", clickGood);
  
  
  const hendleClickGood = () => {
    console.log("click Good", { clickGood });
    setClickGood((prevState) => prevState + 1);
    setClickReset((prevState) => true);
    feedbackObj.good = clickGood;
  };

  const handleClickNeutral = () => {
    setClickNeutral((prevState) => prevState + 1);
    setClickReset(true);
  };

  const handleClickBad = () => {
    setClickBad(clickBad + 1);
    setClickReset(true);
  };

  const handleClickReset = () => {
    setClickReset(false);
  }; */

  return (
    <div>
      <div className={s.list}>
        <button onClick={() => updateFeedback("good")} className={s.item}>
          Good
        </button>
        <button onClick={() => updateFeedback("neutral")} className={s.item}>
          Neutral
        </button>
        <button onClick={() => updateFeedback("bad")} className={s.item}>
          Bad
        </button>
        {reset ? (
          <button onClick={() => updateFeedback("reset")} className={s.item}>
            Reset
          </button>
        ) : (
          <></>
        )}

        {/*  {clickReset ? (
          <button onClick={() => handleClickReset()}>Reset</button>
        ) : (
          <></>
        )} */}
      </div>
    </div>
  );
};
export default Options;
