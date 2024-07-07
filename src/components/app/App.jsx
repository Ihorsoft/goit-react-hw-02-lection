import { useEffect, useState } from "react";

import "./App.css";
import Description from "../description/Description";
import Feedback from "../feedback/Feedback.jsx";
import Options from "../options/Options";
import ColorPicker from "../colorpicker/ColorPicker";
import TodoList from "../todolist/TodoList.jsx";

function App() {
  const updateFeedback = (feedbackType) => {
    switch (feedbackType) {
      case "good":
        setFeedbackObj((feedbackObj) => ({
          ...feedbackObj,
          good: feedbackObj.good + 1,
          reset: true,
        }));

        break;

      case "neutral":
        setFeedbackObj({
          ...feedbackObj,
          neutral: feedbackObj.neutral + 1,
          reset: true,
        });
        break;

      case "bad":
        setFeedbackObj({
          ...feedbackObj,
          bad: feedbackObj.bad + 1,
          reset: true,
        });
        break;

      case "reset":
        setFeedbackObj({
          ...feedbackObj,
          good: 0,
          neutral: 0,
          bad: 0,
          reset: false,
        });
        break;
    }
  };

  const fObj = {
    good: 0,
    neutral: 0,
    bad: 0,
    reset: false,
  };

  const [feedbackObj, setFeedbackObj] = useState(() => {
    const saveData = JSON.parse(localStorage.getItem("feedback"));
    if (saveData) {
      return saveData;
    } else {
      return fObj;
    }
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedbackObj));
  }, [feedbackObj]);

  let totalFeedback = feedbackObj.good + feedbackObj.neutral + feedbackObj.bad;
  let positiveFeedback = Math.round((feedbackObj.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options feedbackObj={feedbackObj} updateFeedback={updateFeedback} />
      <Feedback
        feedbackObj={feedbackObj}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
      />
      {/*  <ColorPicker />
      <TodoList /> */}
    </>
  );
}

export default App;
