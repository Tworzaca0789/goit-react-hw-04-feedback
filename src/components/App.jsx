import { useState } from "react";
import Section from './Section/Section';
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";


export default function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = ()=> {
    return good + neutral + bad;
  }
  
  const positiveFeedbackPerc = () => {
    return `${Math.floor((good/totalFeedback()) * 100)}` || 0
  };
  
  const onHandleClick = (e) => {
    switch (e){
      case "good":
      setGood(prevState => prevState + 1);
      break;
      case "neutral":
        setNeutral(prevState => prevState + 1);
        break;
        case "bad":
          setBad(prevState=> prevState + 1);
          break;
          default:
            return;
    }
  };

  return (
    <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onHandleClick}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {totalFeedback()  ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback() }
              positivePercentage={positiveFeedbackPerc()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
  );
    
};
