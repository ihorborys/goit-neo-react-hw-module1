import userData from "./userData.json";
import Profile from "./components/Profile/Profile.jsx";
import friends from "./friends.json";
import FriendList from "./components/FriendList/FriendList.jsx"


const App = () => {
    console.log(userData)
    return (
        <>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
            <FriendList friends={friends}/>
        </>
    );
};

export default App
