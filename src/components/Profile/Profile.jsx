import PropTypes from "prop-types"
import css from "./Profile.module.css"

const Profile = ({avatar,username, tag, location, stats}) => {
    return <div className={css.block}>
  <div className={css.descr}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
            <p className={css.username}> { username}</p>
            <p className={css.tag}>{ tag}</p>
            <p className={css.location}>{ location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.item}>
          <span className={css.label}>Followers</span>
                <span className={css.quantity}> { stats.followers}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{ stats.views}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{ stats.likes}</span>
    </li>
  </ul>
</div>
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: {
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,

},
}

export default Profile