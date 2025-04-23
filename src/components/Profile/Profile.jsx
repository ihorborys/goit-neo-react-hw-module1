import styles from './Profile.module.css'

const Profile = ({name, tag, location, image, stats}) => {
    console.log({stats})
    return <div className={styles.container}>
        <div className={styles.imageContainer}>
            <img
                className={styles.image}
                src={image}
                alt="User avatar"
            />
            <p className={styles.name}>{name}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.statisticsList}>
            <li className={styles.statisticsItem}>
                <span className={styles.statisticsItemName}>Followers</span>
                <span className={styles.statisticsItemValue}>{stats.followers}</span>
            </li>
            <li className={styles.statisticsItem}>
                <span className={styles.statisticsItemName}>Views</span>
                <span className={styles.statisticsItemValue}>{stats.views}</span>
            </li>
            <li className={styles.statisticsItem}>
                <span className={styles.statisticsItemName}>Likes</span>
                <span className={styles.statisticsItemValue}>{stats.likes}</span>
            </li>
        </ul>
    </div>
}

export default Profile