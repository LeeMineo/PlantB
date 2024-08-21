import React from 'react';
import './SettingsOption.css';

const SettingsOption = ({ title, onClick, icon }) => {
    return (
        <div id="settingsoption-container" onClick={onClick}>
            {icon && <span id="settingsoption-icon">{icon}</span>} {/* 아이콘 추가 */}
            <span id="settingsoption-title">{title}</span>
        </div>
    );
};

export default SettingsOption;
