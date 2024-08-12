import React from 'react';
import '../css/pages/AuthPage.css';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      <h1>PlantB에 오신 것을 환영합니다</h1>
      <div className="auth-buttons">
        <button onClick={() => navigate('/login')}>로그인</button>
        <button onClick={() => navigate('/signup')}>회원가입</button>
        <button onClick={() => navigate('/main')}>익명으로 시작하기</button>
      </div>
    </div>
  );
};

export default AuthPage;
