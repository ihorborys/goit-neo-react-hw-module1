import FriendListItem from "../FriendListItem/FriendLIstItem.jsx";
import styles from "./FriendList.module.css";
import PropTypes from "prop-types";


const FriendList = (friends) => {
    return (<ul className={styles.list}>
            {friends.friends.map((friend) =>
                <li key={friend.id}
                    className={styles.listItem}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>)}
        </ul>
    )
}

FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendList
