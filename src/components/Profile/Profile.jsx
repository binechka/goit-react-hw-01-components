
import css from "./Profile.modules.css"
console.log(css);
const Profile = (props) => {
    return <div className="css">
  <div className="css-descr">
    <img
      src={props.avatar}
      alt="User avatar"
      className="css-avatar"
    />
            <p className="css-username"> { props.username}</p>
            <p className="css-tag">{ props.tag}</p>
            <p className="css-location">{ props.location}</p>
  </div>

  <ul className="css-stats">
    <li className="css-item">
      <span className="css-label">Followers</span>
                <span class="css-quantity"> { props.stats.followers}</span>
    </li>
    <li className="css-item">
      <span className="css-label">Views</span>
      <span className="css-quantity">{ props.stats.views}</span>
    </li>
    <li className="css-item">
      <span className="css-label">Likes</span>
      <span className="css-quantity">{ props.stats.likes}</span>
    </li>
  </ul>
</div>
}



export default Profile