import React from 'react';
import ThemeReference from '../components/ThemeReference';
import DaisyUIShowcase from '../components/DaisyUIShowcase';

// Images
import myHeadShot from '../media/images.jpg';
import linkedInLogo from '../media/linkedin.png';
import gitHubLogo from '../media/github.png';
import emailLogo from '../media/email.png';

// CSS
import '../css/Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* ABOUT SECTION */}
      <section className="home-about-section">
        {/* LEFT: Short Intro */}
        <div className="home-about-short">
          <h1 className="home-name">Wilson Szeto, EIT</h1>

          {/* Custom Avatar (no DaisyUI ring) */}
          <div className="home-avatar-container">
            <img
              className="home-avatar"
              src={myHeadShot}
              alt="Wilson Szeto Avatar"
            />
          </div>

          <p className="home-job-title">
            Electrical Engineer at NAWCWD
          </p>

          <div className="home-profile-links">
            <a
              href="https://www.linkedin.com/in/luisgd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedInLogo}
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://github.com/luisdavidgarcia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={gitHubLogo}
                alt="GitHub"
              />
            </a>
            <a href="mailto:your.luisdavidgarcia@protonmail.com">
              <img
                src={emailLogo}
                alt="Email"
              />
            </a>
          </div>
        </div>

        {/* RIGHT: About Section */}
        <div className="home-about-long">
          <h2 className="home-about-header">About</h2>
          <p className="home-about-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Nemo natus, necessitatibus quas dolorum inventore deserunt 
            reiciendis, velit hic ullam fugit officia excepturi, magni 
            beatae labore mollitia at quos. Iste dolor aspernatur, ipsam, 
            eos sint nobis impedit deserunt consectetur expedita consequatur 
            saepe omnis magnam accusantium corrupti odio soluta nesciunt. 
            Expedita porro quasi mollitia quaerat quam ex, qui rerum! 
            Corporis voluptatum enim a itaque accusamus tenetur possimus 
            est expedita ipsum, animi neque ullam, quas error nisi! Labore 
            omnis facere sed voluptates dolor, mollitia esse suscipit sit. 
            Magni, repellendus eveniet natus dolore exercitationem commodi! 
            Suscipit, aperiam labore nihil debitis, quos eligendi magnam 
            deserunt doloribus perferendis ad mollitia similique modi quis 
            praesentium vel saepe dignissimos totam! Ut adipisci, dignissimos 
            repudiandae tempore necessitatibus in quis rerum maiores iste illum 
            quos! Aut quae fugit ullam porro vero modi sapiente quam qui 
            laudantium obcaecati at officiis reiciendis deserunt perferendis 
            adipisci nam aperiam pariatur facere, quas culpa nihil?
          </p>
        </div>
      </section>

      {/* THEME & SHOWCASE SECTION AT THE BOTTOM */}
      <section className="home-bottom-section">
        <ThemeReference />
        <DaisyUIShowcase />
      </section>
    </div>
  );
}

export default Home;
