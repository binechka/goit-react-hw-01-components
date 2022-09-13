
import FriendListItem from "components/FriendListItem/FriendListItem"

const FriendList = (props) => {
    return <ul class="friend-list">
        {props.friends.map(friend => {
            return <li class="item" key={friend.id}>
         <FriendListItem avatar={friend.avatar}
        name={friend.name}
        isOnline={ friend.isOnline} />
</li>
 })}
</ul>
}

export default FriendList