import React from 'react';
import WelcomeHeaader from './WelcomeHeader';
import Worning from '../../resources/howtowork/error_1.png';
import QR from '../../resources/howtowork/qr_code.png';

const WelcomeUser = () => {

    return (
        <div className="welcome-container">
            <WelcomeHeaader />
            {/* header banner */}
            <div className="header-banner mt-3 container">
                <h4 className="text-center banner-title">Welcome Jonathan</h4>
                <div className="d-flex justify-content-center justify-content-md-end mt-5">
                    <div className="baner-text px-0 px-lg-5">
                        <p className="m-0">Last positive test for antibodies: DATE A (click to update)</p>
                        <p>Last Contact Tracing Alert: DATE T (click to update)</p>
                    </div>
                </div>
                <div className="welcom-worning px-0 px-lg-5">
                    <div className="worning-content">
                        <h3 className="text-center worning-title">WARNING</h3>
                        <div className="worning-info">
                            <div className="">
                                <img src={Worning} alt="ERROR_1" className="worning-img" />
                            </div>
                            <div className="info-text">
                                <strong className="d-flex flex-column text-center font-weight-bold">
                                    <span>You are currently a SUSPECTED case of Covid-19</span>
                                    <span>You should self-isolate to break chains of transmission</span>
                                </strong>
                                <p className="text-justifay">
                                    For more information click here (This message red for CONFIRMED)
                                </p>
                            </div>
                            <div className="">
                                <img src={Worning} alt="ERROR_1" className="worning-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* welcome-main */}
            <div className="welcome-main container">
                <div className="mt-5 text-center ">
                    <h3 className="main-title">
                        Share your status with contacts to protect them all and break as many chains as possible
                    </h3>
                </div>
                <div className="row">

                    <div className="offset-0 col-12 offset-md-2 col-md-4">
                        <div className="section-one mt-5">
                            <div className="text-center">
                                <span className="section-title">1. Contact scans your QR code</span>
                            </div>
                            <div className="ml-auto w-40 mr-auto mt-4">
                                <div className="card card-body">
                                    <img src={QR} alt="" className="qr-images" />
                                </div>
                            </div>
                        </div>
                        <div className="section-two mt-5">
                            <div className="text-center">
                                <span className="section-title">
                                    2. Invite contacts to share
                                </span>
                            </div>
                            <div className="mt-4 text-center">
                                <button type="" className="btn welcome-btn">
                                    Scan QR Code
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="offset-0 col-12 col-md-4">
                        <div className="section-three mt-5">
                            <div className="text-center">
                                <span className="section-title">3. You scan a QR code</span>
                            </div>
                            <div className="mt-4 text-center">
                                <button type="" className="btn welcome-btn">
                                    Invite Contacts
                                </button>
                            </div>
                        </div>
                        <div className="section-four mt-5">
                            <div className="text-center">
                                <span className="section-title">4. Copy and paste this code</span>
                            </div>
                            <div className="mt-4 d-flex justify-content-center ">
                                <input
                                    class="form-control input-code"
                                    type="text"
                                    placeholder="Code"
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="welcome-bottom my-4">
                    <h3 className="text-center welcome-subtitle">
                        You are sharing with x contacts
                    </h3>
                    <div className="d-flex justify-content-start mt-5 mx-2">
                        <div className="">
                            <p className="m-0">Self-Isolating</p>
                            <p>Confirmed or Suspected Contacts</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mx-2">
                        <div className="">
                            <button type="button" className="btn bottom-btn-one" >
                                Bill Jones  In your bubble (remove from bubble) (delete contact?)IP ends
                            </button>
                        </div>
                        <div className="">
                            <button type="button" className="btn bottom-btn-two">
                                Bill Jones  In your bubble (remove from bubble) (delete contact?)IP ends
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeUser