import React from 'react';
import { FiBell, FiEdit2, FiInfo, FiExternalLink } from 'react-icons/fi';  // 아이콘 임포트
import Header from '../components/Header';
import SettingsOption from '../components/SettingsPage/SettingsOption';
import UserSetting from '../components/SettingsPage/UserSetting';
import '../css/pages/SettingsPage.css';

const SettingsPage = () => {
    const userName = "익명";
    const userLevel = "유저 정보";

    return (
        <div id="settingspage-container">
            {/* Header 컴포넌트 사용 */}
            <Header title="Settings" height="30vw">
              {/* 사용자 정보 */}
              <UserSetting 
                  userName={userName}
                  userLevel={userLevel}
                  onClick={() => window.location.href = '/preparing'} // 사용자 정보 페이지 경로
              />
            </Header>
            {/* Divider */}
            <div className="settings-divider"></div>

            {/* 설정 옵션들 */}
            <SettingsOption
                title="데이터 이용 정보 저작권 안내"
                icon={<FiInfo />}  // 아이콘 추가
                onClick={() => window.location.href = '/data-copyright'} // 예시 경로
            />
            <SettingsOption
                title="플랜트비 출시 알림 받기"
                icon={<FiBell />}  // 아이콘 추가
                onClick={() => window.open('https://forms.gle/C5ABbg4cSRYZLzua6')} // 구글 폼 URL
            />
            <SettingsOption
                title="피드백 남기기"
                icon={<FiEdit2 />}  // 아이콘 추가
                onClick={() => window.open('https://forms.gle/DcWPv43CN43nR2Yc7')} // 구글 폼 URL
            />
            <SettingsOption
                title="플랜트비에 관하여"
                icon={<FiInfo />}  // 아이콘 추가
                onClick={() => window.location.href = '/about-plantb'} // 예시 경로
            />
            <SettingsOption
                title="플랜트비 소개 웹사이트로 이동하기"
                icon={<FiExternalLink />}  // 아이콘 추가
                onClick={() => window.open('https://plant-b.vercel.app/')} // 플랜트비 웹사이트 URL
            />
        </div>
    );
};

export default SettingsPage;
