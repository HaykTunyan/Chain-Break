import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';
// import logoandtext from '../resources/logoandtsfwhitetr.png'
import {
  PRIVACY_POLICY_URI,
  DISCLAIMER_URI,
  TERMS_URI,
  COOKIES_URI
} from '../../store/constants';
import Logotrial from '../../resources/Trial_logo.svg';

class Footer extends React.Component {
  render() {
    return (
      <div className="section footer banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className=" col-12 col-md-6">
                  <div className="d-flex flex-column ">
                    <div className="">
                      <img src={Logotrial} alt="TRIAL_LOGO" />
                    </div>
                    <div className="tiny-text mt-5">
                      &#169; 2020 TotalSoFar.com
                  </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="row">
                    <div className="col-4 d-flex flex-column mt-5">
                      <Link to="/contact" className="text-dark footer-link">Contact Us</Link>
                      <Link to={PRIVACY_POLICY_URI} className="text-dark footer-link">Privacy</Link>
                      <Link to={TERMS_URI} className="text-dark footer-link">Terms</Link>
                    </div>
                    <div className="col-4 d-flex flex-column mt-5">
                      <Link to={DISCLAIMER_URI} className="text-dark footer-link">Disclaimer</Link>
                      <Link to={COOKIES_URI} className="text-dark footer-link">Cookies</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Footer;

