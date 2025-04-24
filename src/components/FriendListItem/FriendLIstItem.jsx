import PropTypes from 'prop-types';
import styles from "../FriendListItem/FriendListItem.module.css";


const FriendListItem = ({avatar, name, isOnline}) => {
    return <div className={styles.container}>
        <img src={avatar} alt="Avatar" width="48"/>
        <p className={styles.name}>{name}</p>
        <p className={isOnline ? styles.isOnline : styles.isOffline}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem
