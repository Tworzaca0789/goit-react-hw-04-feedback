import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <>
    <ul className={styles.statisticsList}>
        <li className={styles.goodItem}>
            Good: {good}
        </li>
        <li className={styles.neutralItem}>
            Neutral: {neutral}
        </li>
        <li className={styles.badItem}>
            Bad: {bad}
        </li>
        <li className={styles.totalItem}>
            Total: {total}
        </li>
        <li className={styles.positivePercentage}>
            Positive feedback: {positivePercentage}%
        </li>
    </ul>
    </>
);
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
}

export default Statistics;