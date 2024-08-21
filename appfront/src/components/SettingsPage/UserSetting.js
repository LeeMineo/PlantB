import React from 'react';
import { FiUser } from 'react-icons/fi'; // 유저 아이콘 임포트
import './UserSetting.css';

const UserSetting = ({ userName, userLevel, onClick }) => {
    return (
        <div id="usersetting-container" onClick={onClick}>
            <FiUser id="usersetting-profile-icon" />  {/* 프로필 아이콘 추가 */}
            <div id="usersetting-text-container">
                <p id="usersetting-user-name">{userName} 님</p>
                <p id="usersetting-user-level">{userLevel}</p>
            </div>
        </div>
    );
};

export default UserSetting;
