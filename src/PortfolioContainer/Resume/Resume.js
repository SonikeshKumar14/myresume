import React, { useState, useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './Resume.css'

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({})

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return

    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
    fadeInScreenHandler,
  )

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ''}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + '-' + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ''}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ''}</span>
        </div>
      </div>
    )
  }

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: 'Education', logoSrc: 'education.svg' },
    { label: 'Work History', logoSrc: 'work-history.svg' },
    { label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
    { label: 'Projects', logoSrc: 'projects.svg' },
    { label: 'Interests', logoSrc: 'interests.svg' },
  ]

  //here we have
  const programmingSkillsDetails = [
    { skill: 'Reactjs', ratingPercentage: 65 },
    { skill: 'Redux', ratingPercentage: 50 },
    { skill: 'Git/GitBash', ratingPercentage: 80 },
    { skill: 'Python', ratingPercentage: 60 },
    { skill: 'Django', ratingPercentage: 40 },
    { skill: 'Postman', ratingPercentage: 40 },
    { skill: 'C++', ratingPercentage: 60 },
    { skill: 'Problem Solving', ratingPercentage: 40 },
  ]

  const projectsDetails = [
    {
      title: 'Personal Portfolio Website',
      duration: { fromDate: '2021', toDate: '2022' },
      description:
        'A Personal Portfolio website to showcase all my details and projects at one place.',
      subHeading: 'Technologies Used: React JS, Bootsrap',
    },
    {
      title: 'Cloudbay',
      duration: { fromDate: '2018', toDate: '2020' },
      description:
        'Online ecommerce website for showcasing and selling products onlne with payment system integration',
      subHeading:
        'Technologies Used: Reactjs, Html, Css, Nodejs, Bootstrap.',
    },
  ]

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={'Maharaja Surajmal Institute of Technology, Delhi'}
        subHeading={'Bachelor of Technology - BTECH, Information Technology'}
        fromDate={'2020'}
        toDate={'2024'}
      />

      <ResumeHeading
        heading={'R.P Memorial Sr. Sec Public School'}
        subHeading={'12th passed in 2019'}
        fromDate={'2018'}
        toDate={'2019'}
      />

      <ResumeHeading
         heading={'R.P Memorial Sr. Sec Public School'}
         subHeading={'10th passed in 2017'}
         fromDate={'2016'}
         toDate={'2017'}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={'Upskillz by scholar'}
          // subHeading={'DotNet Developer'}
          fromDate={'2022'}
          toDate={'Present'}
        />
        {/* <div className="experience-description">
          <span className="resume-description-text">
            Currently working as MERN stack web and mobile developer and also an
            online instructor on udemy.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed an ecommerce website for client with the dashboard for
            managing the products, managing reviews, users, payment etc. .
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{' '}
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develope UI as per the given
            designs.
          </span>
          <br />
        </div> */}
        {/* <ResumeHeading
          heading={'UPER'}
          subHeading={'Junior Dotnet Core Developer'}
          fromDate={'2019'}
          toDate={'2020'}
        /> */}
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + '%' }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Music"
        description="Listening Music and Songs of Arijit and many famous singers."
      />
      <ResumeHeading
        heading="Gaming"
        description="I like to play Pubg with my friends and other videos games on old history or adventurous video games."
      />
    </div>,
  ]

  const handleCarousal = (index) => {
    let offsetHeight = 360

    let newCarousalOffset = {
      style: { transform: 'translateY(' + index * offsetHeight * -1 + 'px)' },
    }

    setCarousalOffsetStyle(newCarousalOffset)
    setSelectedBulletIndex(index)
  }

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ))
  }

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    )
  }

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe()
    }
  }, [fadeInSubscription])

  return (
    <div className="resume-container screen-container " id={props.id || ''}>
      <div className="resume-content">
        <ScreenHeading title={'Resume'} subHeading={'My formal Bio Details'} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  )
}

export default Resume
