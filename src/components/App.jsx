import './App.css'
import Profile from './Profile'
import FriendList from './FriendList'
import userData from '../userData.json';
import friends from "../friends.json";

const App = () => {
  return (
    <>
      <p>Завдання 1. Профіль соціальної мережі</p>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <p>Завдання 2. Список друзів</p>
      <FriendList friends={friends} />
    </>
  );
};

export default App
