import { Switch, Route } from 'react-router-dom'

import React from 'react';
import Root from './components/Root';
import NavBar from './components/NavBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContactFormModal from './components/ContactFormModal';
import ShareAppModal from './components/ShareAppModal';
import Disclaimer from './components/Disclaimer';
import Terms from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';
import WelcomeUser from './components/WelcomeUser/WelcomeUser';

function App() {

  return (
    <div className="App">
      <div className="container-app">
        {/* <NavBar /> */}

        <Switch>
          <Route path='/privacy'>
            <Header />
            <PrivacyPolicy />
          </Route>
          <Route path='/terms'>
            <Header />
            <Terms />
          </Route>
          <Route path='/disclaimer'>
            <Header />
            <Disclaimer />
          </Route>
          <Route path='/' exact>
            <Header />
            <Root />
            <Route path='/contact'>
              <ContactFormModal />
            </Route>
            <Route path='/share'>
              <ShareAppModal />
            </Route>
          </Route>
          <Route path="/welcome">
            <WelcomeUser />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
