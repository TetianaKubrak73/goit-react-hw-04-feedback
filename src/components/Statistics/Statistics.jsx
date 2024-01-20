import style from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={style.good}>Good: {good}</p>
      <p className={style.neutral}>Neutral: {neutral}</p>
      <p className={style.bad}>Bad: {bad}</p>
      <p className={style.total}>Total: {total}</p>
      <p className={style.percentage}>
        Positive feedback: {positivePercentage} %
      </p>
    </>
  );
};

export default Statistics;
