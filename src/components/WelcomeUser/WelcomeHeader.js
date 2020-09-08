import React, { Component } from 'react';
import WelcomeUser from './WelcomeUser';
import Logotrial from '../../resources/Trial_logo.svg';

const WelcomeHeaader = () => {
    return (
        <div className="">
            <div className="d-md-none text-center">
                <h1>Coronavirus<br /> Warning System</h1>
            </div>
            <div className="d-none d-md-inline">
                <div className="row">
                    <div className="col-md-4 d-flex">
                        <div className="ml-5 d-flex">
                            <img src={Logotrial} alt="TRIAL_LOGO" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h1 className="header-title">Stop Covid-19 Together</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeHeaader