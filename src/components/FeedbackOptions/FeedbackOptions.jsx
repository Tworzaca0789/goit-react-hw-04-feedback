import React from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return(
        <div className={styles.buttons}>
        {options.map(option=> (
                <button
                 key={option}
                type="button"
                className={styles.buttonOption}
                onClick={() =>onLeaveFeedback(option)}>
                        {option}
                </button>
        ))};
                </div>
        );
};
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;