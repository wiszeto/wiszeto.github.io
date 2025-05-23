import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Images
import myHeadShot from '../media/images.jpg';
import linkedInLogo from '../media/linkedin.png';
import gitHubLogo from '../media/github.png';
import emailLogo from '../media/email.png';
import qcar from '../media/qcar.jpg';
import CH2 from '../media/CH2.jpeg';
import rblx from '../media/rblx_background.png';
import pfp from '../media/pfp.jpg';

// CSS
import '../css/Home.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: qcar,
      alt: 'Self Driving Robotic Car',
      title: 'Self Driving Robotic Car',
      description: 'This project shows how I put model predictive control in a robotic car and design choices I made.',
      link: 'Acc2024',
    },
    // {
    //   image: linkedInLogo,
    //   alt: 'Ultrasonic Distance Sensor',
    //   title: 'Ultrasonic Distance Sensor',
    //   description: 'A short description of Project 2 goes here.',
    //   link: 'Ultrasonic',
    // },
    {
      image: rblx,
      alt: 'Roblox Projects',
      title: 'Roblox Projects',
      description: 'These are a collection of roblox scripts that I have made.',
      link: 'Roblox',
    },
    {
      image: CH2,
      alt: 'Course Hero Bot',
      title: 'Course Hero Bot',
      description: 'A study resource bot used by over 200k+ students around the world.',
      link: 'CHbot',
    },
  ];

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="home-page mx-auto max-w-5xl">
      {/* ========== ABOUT SECTION ========== */}
      <section className="home-about-section">
        {/* LEFT: Short Intro */}
        <div className="home-about-short">
          <h1 className="home-name">Wilson Szeto, EIT</h1>
          <div className="home-avatar-container">
            <img
              className="home-avatar"
              src={myHeadShot}
              alt="Wilson Szeto Avatar"
            />
          </div>
          <p className="home-job-title">Electrical Engineer at NAWCWD</p>
          <div className="home-profile-links">
            <a
              href="https://www.linkedin.com/in/wiszeto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedInLogo} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/wiszeto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitHubLogo} alt="GitHub" />
            </a>
            <a href="mailto:your.wilsonszerto99@gmail.com">
              <img src={emailLogo} alt="Email" />
            </a>
          </div>
        </div>

        {/* RIGHT: About Section */}
        <div className="home-about-long">
          <h2 className="home-about-header">About</h2>
          <p className="home-about-text">
            Hello! I am Wilson Szeto, a new electrical engineer in the Guidance,
            Navagation, and Control branch at NAWCWD. I have a scripting and automation background,
            both on the job and as a hobbyist. Professionally, I have touch a wide range of subjects,
            including cloud computing, REST APIs, and software testing.
            As a hobbyist, I love game dev and creating powerful automation scripts for everyday tasks.
            My current focus is to build my controls skillset, along with learning Matlab and dynamics because I am facinated by the potential in autonomy and robotics.
            Feel free to look around my website, where I showcase my favorite projects!



          </p>
        </div>
      </section>

      {/* ========== PROJECTS CAROUSEL SECTION ========== */}
      <section className="pt-8 pb-8">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>

        <div className="carousel w-full relative">
          {/* Current Slide */}
          <div className="card w-[48rem] bg-base-100 shadow-xl mx-auto">
            <figure className="h-[10rem] w-full overflow-hidden">
              <img
                className="object-cover h-full w-full"
                src={slides[currentSlide].image}
                alt={slides[currentSlide].alt}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{slides[currentSlide].title}</h2>
              <p>{slides[currentSlide].description}</p>

              {/* Badges + "View More" on a single row, bottom-aligned */}
              <div className="flex items-end gap-2 mt-2">
                <span className="badge badge-primary">React</span>
                <span className="badge badge-secondary">Tailwind</span>
                <span className="badge badge-accent">DaisyUI</span>
                <Link
                  to={`/${slides[currentSlide].link}`}
                  className="btn btn-primary ml-auto"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>

          {/* Carousel nav arrows */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button onClick={handlePrev} className="btn btn-circle">
              ❮
            </button>
            <button onClick={handleNext} className="btn btn-circle">
              ❯
            </button>
          </div>
        </div>
      </section>

      <h2 className="text-2xl font-bold mb-6">Skills</h2>

      {/* ========== DAISYUI WINDOW MOCKUPS ROW ========== */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* 1. Hobbyist Skills */}
        <div className="mockup-window border bg-base-300 flex-1">
          <div className="flex flex-col p-4 bg-base-200 h-full">
            <h3 className="text-lg font-bold mb-2">Hobbyist Skills</h3>
            <ul className="list-disc pl-5">
              <li>Python</li>
              <li>Lua</li>
              <li>Git</li>
              <li>React.js</li>
              <li>Selenium</li>
              <li>Postman</li>
              <li>Cheat Engine</li>
              <li>Arduino &amp; Raspberry Pi</li>
            </ul>
          </div>
        </div>

        {/* 2. Professional Skills */}
        <div className="mockup-window border bg-base-300 flex-1">
          <div className="flex flex-col p-4 bg-base-200 h-full">
            <h3 className="text-lg font-bold mb-2">Professional Skills</h3>
            <ul className="list-disc pl-5">
              <li>Matlab & Simulink</li>
              <li>Python</li>
              <li>Git</li>
              <li>Jira</li>
              <li>AWS</li>
              <li>Agile &amp; SCRUM Workflow</li>
            </ul>
          </div>
        </div>

        {/* 3. Academic Skills */}
        <div className="mockup-window border bg-base-300 flex-1">
          <div className="flex flex-col p-4 bg-base-200 h-full">
            <h3 className="text-lg font-bold mb-2">Academic Skills</h3>
            <ul className="list-disc pl-5">
              <li>Matlab</li>
              <li>Embedded C</li>
              <li>Latex</li>

            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Professional Work Timeline</h2>
      {/* TIMELINE SECTION */}
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {/* New Experience - Left */}
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">Feb 2025 - Present</time>
            <div className="text-lg font-black">NAWCWD (Electrical Engineer)</div>
            TBD
          </div>
          <hr />
        </li>

        {/* Office of Student Research - Right */}
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">Feb 2024 - Jul 2024</time>
            <div className="text-lg font-black">
              Office of Student Research (Undergraduate Researcher)
            </div>
            Worked with a team of 5 to build a self driving robotic car. As the only
            electrical engineer on the team, I successfully implemented Model
            Predictive Control using custom cost functions, integrating sensors
            like 2D LiDAR, GPS, IMU, and cameras for object detection, and extensively
            optimized 20+ control parameters using bayesian statistics and 10000+
            trial simulations.
          </div>
          <hr />
        </li>

        {/* Caltrans - Left */}
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">Jan 2024 - Aug 2024</time>
            <div className="text-lg font-black">
              Caltrans (Engineering Student Assistant)
            </div>
            As a engineering student assistant, I developed several python scripts to interface with Bosch AI traffic cameras
            using cv2, REST APIs, and ONVIF protocols for automated camera
            control and data collection.
          </div>
          <hr />
        </li>

        {/* The Boeing Company - Right */}
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">Oct 2023 – May 2024</time>
            <div className="text-lg font-black">
              The Boeing Company (Software Test Engineer)
            </div>
            I was responsible for seeking out software bugs and creating good chaos, while documenting everything in Jira.
            These bugs would eventually turn into automated test cases for regression testing, which boosted our test coverage and reduced manual testing efforts.

          </div>
          <hr />
        </li>

        {/* California Cybersecurity Institute - Left */}
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">March 2022 - June 2024</time>
            <div className="text-lg font-black">
              California Cybersecurity Institute (Software Developer)
            </div>
            Future proofed a legacy internal organization system using python scripts and AWS services.
            Streamlined support for hundreds of tickets and verification of thousands of user.
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Home;
