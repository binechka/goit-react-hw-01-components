import PropTypes from "prop-types"

import css from "./FriendList.module.css"
import FriendListItem from "components/FriendListItem/FriendListItem"

const FriendList = ({friends}) => {
    return <ul className={css.friendList}>
        {friends.map(friend => {
            return <li className={css.FriendItem} key={friend.id}>
         <FriendListItem avatar={friend.avatar}
        name={friend.name}
        isOnline={ friend.isOnline} />
</li>
 })}
</ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool,

        })
    )
}

export default FriendList