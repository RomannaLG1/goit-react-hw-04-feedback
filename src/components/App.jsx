import { useState } from 'react';
import Box from './Box';
import { FeedbackForm } from './FeedbackForm';
import { FeedbackOptions } from './FeedbackOptions';
import { FeedbackStatistics } from './FeedbackStatistics';
import { Notification } from './Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'bad', 'neutral'];
  const total = good + neutral + bad;

  const feedbackIncrement = event => {
    const { textContent } = event.currentTarget;
    const nameBtn = textContent.toLowerCase();
    if (nameBtn) {
      switch (nameBtn) {
        case 'good':
          setGood(pS => pS + 1);
          break;
        case 'neutral':
          setNeutral(pS => pS + 1);
          break;
        case 'bad':
          setBad(pS => pS + 1);
          break;
        default:
          console.log('unexpected value');
      }
    }
  };

  const countPositiveFeedbackPercentage = total => {
    return !total ? 0 : ~~((good / total) * 100);
  };

  return (
    <Box display="grid" justifyItems="center" as="main" p={5}>
      <FeedbackForm title="Please, leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={feedbackIncrement}
        />
      </FeedbackForm>

      <FeedbackForm title="Statistics">
        {total > 0 ? (
          <FeedbackStatistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage(total)}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </FeedbackForm>
    </Box>
  );
}
