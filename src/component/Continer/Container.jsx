import styles from './Container.module.css';

const Container = () => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <h1>Your Result</h1>
        <h2>Great</h2>
        <p>Your performance exceed 65% of the people conducting the test here!</p>
      </div>

      <div className={styles.right}>
        <h1>Summary</h1>
        <ul className={styles.summaryList}>
          <li>Reaction</li>
          <li>Memory</li>
          <li>Verbal</li>
          <li>Visual</li>
        </ul>
      </div>
    </div>
  );
};

export default Container;
