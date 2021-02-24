import React from 'react'
import css from './FriendItem.module.css'


const FriendItem = ({friends}) => {
    return (
    <li className={css.item}>
        <span className={friends.isOnline ? css.act : css.inact}></span>
        <img className={css.avatar} src={friends.avatar} alt="" width="48" />
    <p className={css.name}>{friends.name}</p>
    </li>
    );
};

export default FriendItem;