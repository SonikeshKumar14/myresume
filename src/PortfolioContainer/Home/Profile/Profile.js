import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="cols-icon">
              <a href="https://github.com/SonikeshKumar14">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.instagram.com/sonikesh/?hl=en">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://twitter.com/SanikehK">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://www.linkedin.com/in/sonikesh-kumar-7101b621b">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {' '}
              Hello, I'M{' '}
              <span className="highlighted-text">Sonikesh</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {' '}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    'Enthusiastic 😎',
                    1000,
                    'Full Stack Developer 💻',
                    1000,
                    'Reactjs Dev 🖥️',
                    1000,
                    'MERN Stack Dev 🔴',
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="./msadeqsirjani.pdf" download="msadeqsirjani.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  )
}
