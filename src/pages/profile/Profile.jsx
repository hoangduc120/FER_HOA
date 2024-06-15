// src/Profile.jsx
import React from 'react';
import './scss/styles.scss';
import profilePic from './path_to_profile_picture.jpg'; // Thay bằng đường dẫn thực tế đến ảnh của bạn

const Profile = () => {
  return (
    <div className="container">
      <header>
        <h1>About Me</h1>
      </header>
      <div className="profile">
        <img src={profilePic} alt="Profile" />
        <h2>Your Name</h2>
        <p>
          Hello! I am a web developer with a passion for creating beautiful and functional websites.
          I enjoy working with the latest web technologies and continuously improving my skills.
        </p>
      </div>
    </div>
  );
};

export default Profile;
