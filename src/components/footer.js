import React from 'react';
import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <p className="footer__text">Copyright © 2023 
              <a href="wiszeto.com" className="footer__link"> Wilson's Website</a>. All rights reserved.</p>
          </div>
          <div className="col-sm-12 col-md-6">
            <ul className="footer__list">
              <li><a href="#" className="footer__link"></a></li>
              <li><a href="#" className="footer__link"></a></li>
              <li><a href="#" className="footer__link"></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
