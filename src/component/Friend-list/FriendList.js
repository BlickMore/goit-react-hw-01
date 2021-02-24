import React from 'react'
import PropTypes from 'prop-types'
import FriendItem from './FriendItem'
import css from './FriendList.module.css'


const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(elem=><FriendItem key={elem.id} friends={elem}/>)}
</ul>
    );
};

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool
        })
    )
}