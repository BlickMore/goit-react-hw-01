import React from 'react';
import PropTypes from 'prop-types';
import css from "./profile.module.css"

const Profile = ({user}) => {
    const {name,tag,location,avatar,stats}=user;
return(
    <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="user avatar"
      className={css.avatar}
    />
    <p className={css.name}>{name}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
    <span className={css.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
);}

export default Profile;

Profile.propTypes = {
  user: PropTypes.exact({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.object
  })
};