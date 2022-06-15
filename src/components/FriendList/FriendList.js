import PropTypes from "prop-types";
import s from "./FriendList.module.css";
import FriendListItem from 'components/FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
    return (
        <div className={s.friendList}>
        <ul key={friends.id}>
            {friends.map(({id,avatar,name, isOnline}) =>(
                <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                />
            ))}
        </ul>
     </div>
    );
}

FriendList.propTypes={
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
};