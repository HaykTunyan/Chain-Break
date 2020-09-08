import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck, faUserPlus, faBell, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import BELL from '../../resources/howtowork/bell.png';
import CONTACT from '../../resources/howtowork/contact.png';
import HEALTHY from '../../resources/howtowork/healthy.png';
import Reactangle from '../../resources/howtowork/Rectangle.png';


const Howitworks = () => {
    return (
        <div className="howitworks-cotainer container">
            <div className="content-one">
                {/* How it works */}
                <h3 className="text-center how-title mt-5">How it works</h3>
                <div className="ml-auto w-50 mr-auto mt-5">
                    <div className="text-center">
                        <p className="how-subtitle">
                            Update your coronavirus status below to sign-in securely,
                            then use Chain Break to share your status privately with anybody you choose so you can both:
                        </p>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-md-around mt-5">
                    <div className="d-flex m-3">
                        <div className="mr-3">
                            <img src={BELL} alt="BELL" className="" />
                        </div>
                        <div className="image-text">
                            Protect each other - see if and when you should start and stop isolating to break your chains
                        </div>
                    </div>
                    <div className="d-flex m-3">
                        <div className="mr-3">
                            <img src={CONTACT} alt="CONTACT" className="" />
                        </div>
                        <div className="image-text">
                            Be notified if your contacts become suspected or confirmed cases - they may need help
                        </div>
                    </div>
                    <div className="d-flex m-3">
                        <div className="mr-3">
                            <img src={HEALTHY} alt="HEALTHY" className="" />
                        </div>
                        <div className="image-text">
                            Be part of the global fight against Covid-19 and help get your life back to as normal as possible
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-two">
                {/* Sharing is Caring! */}
                <h3 className="text-center mt-5 content-title">Sharing is Caring!</h3>
                <div className="row ">
                    <div className="col-12 col-md-6 mt-5">
                        <div className="">
                            <img src={Reactangle} alt="REACTANGLE" className="w-100" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-5">
                        <div className="content-text">
                            The more people you share your status with, the more protected you become.
                            Better still, as your friends protect their friends and so on,
                            more and more chains get broken reducing the spread of the virus globally.
                            The more people that take part the better for everybody.
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Howitworks