import Profile from "./Profile/Profile";
import user from '../user.json' 
import Statistics from "./Statistics/Statistics";
import data from '../data.json'
import friends from '../friends.json'
import FriendList from "./FriendList/FriendList";

import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from '../transactions.json'
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        gap:"40px",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: "#F8A8EA"
        // alightItmes: "space-between",
        //flexDirection:"column"
      }}
    >
      <Profile username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="Upload stats" statistics={data} />
      <FriendList friends={friends} />
   
      <TransactionHistory items={transactions} />
    </div>
  );
};
