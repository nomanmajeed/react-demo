import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="site-footer ">
        <div class="container navbar fixed-bottom">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12 mt-auto">
              <p class="copyright-text">
                Copyright &copy; 2020 All Rights Reserved by{" "}
                <NavLink to="/">Noman Majeed </NavLink>.
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-10">
              <ul class="social-icons">
                <li>
                  <a class="facebook" href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a class="twitter" href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a class="dribbble" href="#">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li>
                  <a class="linkedin" href="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
