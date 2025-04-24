import userData from "./userData.json";
import Profile from "./components/Profile/Profile.jsx";


const App = () => {
    return (
        <>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />

        </>
    );
};

export default App


