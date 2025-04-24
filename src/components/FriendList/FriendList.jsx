import FriendListItem from "../FriendListItem/FriendLIstItem.jsx";
import styles from "./FriendList.module.css";
import PropTypes from "prop-types";


const FriendList = ({friends}) => {
    return (<ul className={styles.list}>
            {friends.map((friend) =>
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
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default FriendList
