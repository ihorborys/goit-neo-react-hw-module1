import styles from './Profile.module.css';
import PropTypes from 'prop-types';

console.log(styles)

const Profile = ({name, tag, location, image, stats}) => {
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

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    }).isRequired,
};

export default Profile