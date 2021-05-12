import { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BackgroundSvg from '../../components/BackgroundSvg/BackgroundSvg';
import FormInput from '../../components/FormInput/FormInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Spinner from '../../components/Spinner/Spinner';

import {
  checkReferral,
  redirectToPayU,
  createUser,
} from '../../services/services';

import {
  setReferId,
  setUserDetails,
  setUpdatedPrice,
} from '../../redux/courseActions';

import './PaymentPage.scss';

const PaymentPage = ({
  price,
  course,
  svgName,
  token,
  updatedPrice,
  dispatch,
  history,
}) => {
  let [referral, setReferral] = useState('');
  let [name, setName] = useState('');
  let [country, setCountry] = useState('');
  let [org, setOrg] = useState('');
  let [email, setEmail] = useState('');
  let [phone, setPhone] = useState('');
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(false);

  let handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    if (referral.length > 0 && (referral.length < 6 || referral.length > 6)) {
      setError(true);
      setReferral('');
      return setLoading(false);
    } else if (referral.length === 6) {
      try {
        let res = await checkReferral(referral);
        await dispatch(setReferId(res.data));
        if (course === 'Full Stack Development') {
          await dispatch(setUpdatedPrice(2899));
        } else if (course === 'Machine Learning') {
          await dispatch(setUpdatedPrice(1199));
        } else if (course === 'Unity (Game Dev/AR/VR)') {
          await dispatch(setUpdatedPrice(3649));
        }
        await dispatch(setUserDetails({ name, country, org, email, phone }));

        let res1 = await createUser({
          name: name,
          referredBy: res.data,
          phone: phone,
          email: email,
          country: country,
          org: org,
          amount: updatedPrice,
          course: course,
        });

        console.log(res1);

        // await redirectToPayU(updatedPrice, course, firstName, email, phone, lastName, hash )
      } catch (err) {
        setError(true);
        setReferral('');
        return setLoading(false);
      }
    } else {
      await dispatch(setReferId(null));
      await dispatch(setUpdatedPrice(null));
      await dispatch(setUserDetails({ name, country, org, email, phone }));

      let res1 = await createUser({
        name: name,
        referredBy: null,
        phone: phone,
        email: email,
        country: country,
        org: org,
        amount: price,
        course: course,
      });

      console.log(res1);

      let firstName = name.split(' ')[0];
      let lastName = name.split(' ').slice(1, name.length).join(' ');

      let res2 = await redirectToPayU(
        res1.userId,
        price,
        course,
        firstName,
        email,
        phone,
        lastName,
        res1.hash
      );

      console.log(res2);
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <form className='payment-page' onSubmit={handleSubmit}>
      <section>
        <span>Payment Details</span>

        <div className='payment-card'>
          <div>
            <BackgroundSvg name={svgName} token={token} cardSvg />
          </div>

          <div>
            <div>{course}</div>
            <div className='payment-price'>
              Rs{' '}
              <span className='old-price'>{updatedPrice ? price : null}</span>{' '}
              <span className='updated-price'>
                {updatedPrice ? updatedPrice : price}
              </span>
            </div>
          </div>
        </div>

        <FormInput
          onChange={event => setReferral(event.target.value)}
          value={referral}
          filled={referral.length > 0 ? 'true' : 'false'}
          label='Referral code (optional)'
          error={error ? 'true' : 'false'}
        />

        {error && (
          <span className='refer-error'>
            Please enter a valid referral or continue without it
          </span>
        )}
      </section>

      <section>
        <span>Personal Info</span>

        <FormInput
          onChange={event => setName(event.target.value)}
          value={name}
          filled={name.length > 0 ? 'true' : 'false'}
          label='Name'
          type='text'
          required
        />
        <FormInput
          onChange={event => setCountry(event.target.value)}
          value={country}
          filled={country.length > 0 ? 'true' : 'false'}
          label='Country'
          type='text'
          required
        />
        <FormInput
          onChange={event => setOrg(event.target.value)}
          value={org}
          filled={org.length > 0 ? 'true' : 'false'}
          label='School / College / Company'
          type='text'
          required
        />
        <FormInput
          onChange={event => setEmail(event.target.value)}
          value={email}
          filled={email.length > 0 ? 'true' : 'false'}
          label='Email id'
          type='email'
          required
        />
        <FormInput
          onChange={event => setPhone(event.target.value)}
          value={phone}
          filled={phone.length > 0 ? 'true' : 'false'}
          label='Telegram number'
          type='number'
          required
        />

        <CustomButton
          type='submit'
          disabled={
            (name.length &&
              country.length &&
              org.length &&
              email.length &&
              phone.length) === 0
              ? true
              : false
          }
        >
          Pay now
        </CustomButton>
      </section>
    </form>
  );
};

const mapStateToProps = state => ({
  price: state.course.price,
  updatedPrice: state.course.updatedPrice,
  course: state.course.course,
  svgName: state.course.svgName,
  token: state.course.token,
});

export default connect(mapStateToProps)(withRouter(PaymentPage));
