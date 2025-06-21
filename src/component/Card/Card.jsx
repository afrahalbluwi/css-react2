import styles from './Card.module.css';
import Button from '../Button/button';
import iconReaction from '../../assets/icon-reaction.svg';
import iconMemory from '../../assets/icon-memory.svg';
import iconVerbal from '../../assets/icon-verbal.svg';
import iconVisual from '../../assets/icon-visual.svg';




const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <h1>Your Result</h1>
        <h2>Great</h2>
        <p>Your performance exceed 65% of the people conducting the test here!</p>
      </div>
      <div className={styles.right}>
        <h1>Summary</h1>

        <div className={`${styles.resultItem} ${styles.reaction}`}>
          <div className={styles.label}>
            <img src={iconReaction} alt="Reaction Icon" />
            <span>Reaction</span>
          </div>
          <span className={styles.score}><strong>80</strong> / 100</span>
        </div>
<div className={`${styles.resultItem} ${styles.memory}`}>
            <div className={styles.label}>
                <img src={iconMemory} alt="Memory Icon" />
                <span>Memory</span>
            </div>
            <span className={styles.score}><strong>92</strong> / 100</span>
            </div>
<div className={`${styles.resultItem} ${styles.verbal}`}>
            <div className={styles.label}>
                <img src={iconVerbal} alt="Verbal Icon" />
                <span>Verbal</span>
            </div>
            <span className={styles.score}><strong>61</strong> / 100</span>
</div>
<div className={`${styles.resultItem} ${styles.visual}`}> 
            <div className={styles.label}>
                <img src={iconVisual} alt="Visual Icon" /> 
                <span>Visual</span>
            </div>
            <span className={styles.score}><strong>72</strong> / 100</span> 
</div>


        <Button text="Continue" /> 

        
      </div>
    </div>
  );
}
export default Card;


