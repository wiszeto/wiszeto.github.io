import React, { useState } from 'react';
// import ThemeReference from '../components/ThemeReference';
// import DaisyUIShowcase from '../components/DaisyUIShowcase';

// Images
import myHeadShot from '../media/images.jpg';
import linkedInLogo from '../media/linkedin.png';
import gitHubLogo from '../media/github.png';
import emailLogo from '../media/email.png';

// CSS
import '../css/Home.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: myHeadShot,
      alt: 'Self Driving Robotic Car',
      title: 'Self Driving Robotic Car',
      description: 'A short description of Project 1 goes here.',
      link: "Acc2024"
    },
    {
      image: linkedInLogo,
      alt: 'Ultrasonic Distance Sensor',
      title: 'Ultrasonic Distance Sensor',
      description: 'A short description of Project 2 goes here.',
      link: "Acc2024"
    },
    {
      image: 'https://placeimg.com/400/225/arch',
      alt: 'Project 3',
      title: 'Project 3',
      description: 'A short description of Project 3 goes here.',
      link: "Acc2024"
    },
    {
      image: 'https://placeimg.com/400/225/nature',
      alt: 'Project 4',
      title: 'Project 4',
      description: 'A short description of Project 4 goes here.',
      link: "Acc2024"
    }
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
            Hello! I am Wilson Szeto, a new electrical engineer in the Guidance, Navagation, and Control department at NAWCWD.
            My current interests include Model Predicitive Control (MPC), Pathplanning, Localization, and other advanced control systems. 
            I primary have a software and simulation background, having built software used by 200k+ users and a developing a few scripts that have made me $10k+.
            
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
                <a href={slides[currentSlide].link} className="btn btn-primary ml-auto">
                  View More
                </a>
              </div>
            </div>
          </div>

          {/* Carousel nav arrows */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button onClick={handlePrev} className="btn btn-circle">❮</button>
            <button onClick={handleNext} className="btn btn-circle">❯</button>
          </div>
        </div>
      </section>

      <h2 className="text-2xl font-bold mb-6">Skills</h2>

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
            <div className="text-lg font-black">
              NAWCWD (Electrical Engineer)
            </div>
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
            Worked with a team of 5 to build a self driving robotic car.
            As the only electrical engineer on the team, I successfully implemented a Model Predictive Control system using custom cost functions,
            intergrating sensors like 2D LiDAR, GPS, IMU, and cameras for object detection,
            and extensively optimized 20+ control parameters using bayesian statistics and 10000+ trial simulations.
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
            Developed python scripts to interface with Bosch AI traffic cameras using cv2, REST APIs, and ONVIF protocols, enabling automated camera
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
            Created detailed test cases and identified bugs to tracked in Jira, along with using TestComplete for automated testing,
            improving test coverage and reducing manual efforts.
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
            Streamlined support for over 100 tickets, using AWS DynamoDB for fast data storage.
            Followed Agile workflows with Trello and Git.
          </div>
        </li>
      </ul>

    </div>
  );
}

export default Home;
