import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import ReactGa from 'react-ga';

import HomePage from './pages/HomePage/HomePage';
import FullStackDevelopment from './pages/FullStackDevelopment/FullStackDevelopment';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import ConfirmationPage from './pages/ConfirmationPage/ConfirmationPage';
import ML from './pages/ML/ML';
import Unity from './pages/Unity/Unity';
import ScanNPay from './pages/ScanNPay/ScanNPay';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import NotFoundPage from './pages/404Page/404Page';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';

import './App.scss';

const App = ({ location, course }) => {
  useEffect(() => {
    ReactGa.initialize('UA-190309038-1');

    ReactGa.pageview(window.location.pathname);
  }, []);

  let isModal = location.state && location.state.modal;

  return (
    <>
      <Header />
      <Switch location={isModal || location}>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/contact' component={Modal} />
        <Route
          exact
          path='/fullStackDevelopment'
          component={FullStackDevelopment}
        />
        <Route exact path='/ml' component={ML} />
        <Route exact path='/unity' component={Unity} />
        <Route
          exact
          path='/checkout'
          render={() => (course ? <PaymentPage /> : <Redirect to='/' />)}
        />
        <Route
          exact
          path='/confirmBooking'
          render={() => (course ? <ScanNPay /> : <Redirect to='/' />)}
        />
        <Route
          exact
          path='/checkout-status'
          render={() => (course ? <ConfirmationPage /> : <Redirect to='/' />)}
        />
        <Route
          exact
          path='/terms-and-conditions'
          component={TermsAndConditions}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />

      {isModal && <Route exact path='/contact' component={Modal} />}
    </>
  );
};

const mapStateToProps = state => ({
  course: state.course.course,
});

export default connect(mapStateToProps)(withRouter(App));
