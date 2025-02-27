import { useState } from "react";
import "./App.css";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

function App() {
  const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0 });
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };

  return (
    <>
      <Description />
      <Options clicks={clicks} handleClick={updateFeedback} />
      {totalFeedback > 0 ? <Feedback value={clicks} /> : <Notification />}
    </>
  );
}

export default App;
