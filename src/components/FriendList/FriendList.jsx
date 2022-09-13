import css from "./FriendList.modules.css"
import FriendListItem from "components/FriendListItem/FriendListItem"

const FriendList = (props) => {
    return <ul className="css-friendList">
        {props.friends.map(friend => {
            return <li className="css-FriendItem" key={friend.id}>
         <FriendListItem avatar={friend.avatar}
        name={friend.name}
        isOnline={ friend.isOnline} />
</li>
 })}
</ul>
}

export default FriendList