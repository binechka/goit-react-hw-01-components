import PropTypes from "prop-types"
import css from "./FriendListItem.module.css"


const FriendListItem = ({ isOnline, avatar, name }) => {
  return <>
    { isOnline  ?  <span className={css.isOnlineGreen}>{isOnline}</span> :  <span className={css.isOnlineRed}>{isOnline}</span>}
   
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{ name}</p>
</>
}

FriendListItem.propTypes = {
  friends:PropTypes.array(PropTypes.shape({isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,}))
  
}
export default FriendListItem