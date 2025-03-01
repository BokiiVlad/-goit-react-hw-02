import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [clicks, setClicks] = useState(() => {
    const localFeedback = localStorage.getItem("feedback");
    if (localFeedback) {
      return JSON.parse(localFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };

  const removeFeedback = () => {
    setClicks({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(clicks));
  }, [clicks]);

  return (
    <>
      <Description />
      <Options
        removeFeedback={removeFeedback}
        totalFeedback={totalFeedback}
        handleClick={updateFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          value={clicks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
