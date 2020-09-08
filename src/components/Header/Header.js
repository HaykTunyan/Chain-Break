import React from 'react';
import { connect } from "react-redux";
import { withRouter, Link } from 'react-router-dom';
import actions from '../../store/actions/index';
import headerLogo from '../../resources/link_logo.svg';
import Logotrial from '../../resources/Trial_logo.svg';
import { USER_COVID_STATES } from '../../store/constants'
import Covidmin from '../../resources/covid-small.svg';
import Covidmedium from '../../resources/covid-medium.svg';
import Covidlarge from '../../resources/covid-large.svg';


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class Header extends React.Component {
  componentWillMount() {
    this.props.dispatch(actions.getJHCovidData())
  }

  renderLoggedOut() {
    return (
      <React.Fragment>
        <div className="header-container container py-5">
          <div className="d-md-none text-center">
            <h1>Coronavirus<br /> Warning System</h1>
          </div>
          <div className="d-none d-md-inline">
            <div className="row">
              <div className="col-md-4 d-flex">
                <div className="d-flex">
                  {/* <img src={headerLogo} alt="ELLISOE_CHAI_LOGO" /> */}
                  <Link to="/welcome-user">
                    <img src={Logotrial} alt="TRIAL_LOGO" />
                  </Link>
                </div>
                {/* <div className="logo-title ml-2">
                  <span className="">ChaiBreak</span>
                </div> */}
              </div>
              <div className="col-md-4">
                <h1 className="header-title text-center">Stop Covid-19 Together</h1>
              </div>
            </div>
          </div>
          <div className="col-12 mt-5">
            <div className="row">
              <div className="col-4 text-center ">
                <div className="card dead">
                  <div className="d-inline d-md-none">
                    <h4>{numberWithCommas(this.props.totalDead)}</h4>
                    <h5>Dead</h5>
                  </div>
                  <div className="d-none d-md-inline">
                    <h2>{numberWithCommas(this.props.totalDead)}</h2>
                    <h3>Dead</h3>
                  </div>
                  <img src={Covidlarge} alt="COVID-LARGE" className="large-covid d-none d-xl-block" />
                </div>
              </div>
              <div className="col-4 text-center ">
                <div className="card confirmed">
                  <div className="d-inline d-md-none">
                    <h4>{numberWithCommas(this.props.totalConfirmed)}</h4>
                    <h5>Confirmed</h5>
                  </div>
                  <div className="d-none d-md-inline">
                    <h2>{numberWithCommas(this.props.totalConfirmed)}</h2>
                    <h3>Confirmed</h3>
                  </div>
                </div>
              </div>
              <div className="col-4 text-center">
                <div className=" card recovered">
                  <img src={Covidmin} alt="COVID-MIN" className="min-covid d-none d-xl-block" />
                  <div className="d-inline d-md-none">
                    <h4>{numberWithCommas(this.props.totalRecovered)}</h4>
                    <h5>Recovered</h5>
                  </div>
                  <div className="d-none d-md-inline">
                    <h2>{numberWithCommas(this.props.totalRecovered)}</h2>
                    <h3>Recovered</h3>
                  </div>
                  <img src={Covidmedium} alt="COVID-MEDIUM" className="medium-covid d-none d-xl-block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

  getStatusButtonClass() {
    const prefix = "btn btn-"
    switch (this.props.user.currentStatus) {
      case USER_COVID_STATES.TESTED_POSITIVE: return (prefix + 'danger');
      case USER_COVID_STATES.HAVE_SYMPTOMS: return (prefix + 'warning');
      case USER_COVID_STATES.RECOVERED_CLEAR: return (prefix + 'success');
      default: return ('UNKNOWN STATUS');
    }
  }

  getStatusButtonText() {
    switch (this.props.user.currentStatus) {
      case USER_COVID_STATES.TESTED_POSITIVE: return ('TESTED POSITIVE');
      case USER_COVID_STATES.HAVE_SYMPTOMS: return ('SHOWING SYMPTOMS');
      case USER_COVID_STATES.RECOVERED_CLEAR: return ('RECOVERED / CLEAR');
      default: return ('UNKNOWN STATUS');
    }
  }

  renderLoggedIn() {
    return (
      <React.Fragment>
        <div className="d-md-none text-center">
          <h1>Coronavirus<br /> Warning System</h1>
        </div>
        <div className="d-none d-md-inline text-center">
          <h1 className="superBig">Coronavirus Warning System</h1>
        </div>
      </React.Fragment>
    )
  }

  render() {
    return (
      <div className="section header headerLogin banner">
        {this.props.userAuthenticated && this.renderLoggedIn()}
        {!this.props.userAuthenticated && this.renderLoggedOut()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userAuthenticated: state.user.authenticated,
    user: state.user.profile,
    totalDead: state.jhCovidData.worldTotal.totalDead,
    totalConfirmed: state.jhCovidData.worldTotal.totalConfirmed,
    totalRecovered: state.jhCovidData.worldTotal.totalRecovered
  }
}

export default connect(mapStateToProps)(withRouter(Header));
