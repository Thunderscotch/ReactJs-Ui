import styles from '../../assets/Card.module.css';

export const Card = ({ title, desctription, dark }) => {
    return (
        <div className={`${styles.card} ${dark ? styles.cardDark : styles.cardLight} `}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className= {styles.cardDescription}>{desctription}</p>
        </div>
    )
}