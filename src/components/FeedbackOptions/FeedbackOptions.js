import PropTypes from 'prop-types';
import {
  BsFillEmojiSunglassesFill,
  BsFillEmojiExpressionlessFill,
  BsFillEmojiAngryFill,
} from 'react-icons/bs';
import { Button } from './FeedbackOptionsBtn';

const iconArray = [
  <BsFillEmojiSunglassesFill />,
  <BsFillEmojiExpressionlessFill />,
  <BsFillEmojiAngryFill />,
];

export const FeedbackOptions = ({ options, onLeaveFeedback }) =>

  options.map((option, idx) => {
    
     return (
      <Button
        key={option}
        name={option}
        onClickHandle={onLeaveFeedback}
        icon={iconArray[idx]}
      >
        {option}
      </Button>
    );
  });

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
