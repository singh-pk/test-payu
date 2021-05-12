import { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BackgroundSvg from '../../components/BackgroundSvg/BackgroundSvg';
import CustomButton from '../../components/CustomButton/CustomButton';
import Spinner from '../../components/Spinner/Spinner';

import { createUser } from '../../services/services';

import { toggleErr } from '../../redux/courseActions';

import './ScanNPay.scss';

const ScanNPay = ({
  name,
  referredBy,
  phone,
  email,
  country,
  org,
  course,
  price,
  updatedPrice,
  history,
  dispatch,
}) => {
  let [loading, setLoading] = useState(false);

  let handleRegisteredClick = async () => {
    setLoading(true);
    try {
      let res = await createUser({
        name,
        referredBy,
        phone,
        email,
        country,
        org,
        amount: updatedPrice ? updatedPrice : price,
        course,
      });
      console.log(res);
      history.push('/checkout-status');
    } catch (err) {
      console.table(err);
      dispatch(toggleErr(true));
      history.push('/checkout-status');
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <section className='scan-n-pay'>
      <span>Scan and Pay</span>

      <div className='qr-code'>
        <BackgroundSvg
          name='qr-code'
          token='17b97712-2131-443b-9dde-aeeef0e1e6e8'
          cardSvg
        />
      </div>

      <div className='pay-course-desc'>
        <span>{course}</span> -{' '}
        <span>Rs {updatedPrice ? updatedPrice : price} /-</span>
      </div>

      <div className='scan-n-pay-details'>
        Our payment gateway is down, so you can confirm your booking by scanning
        the QR code above and paying the said amount. You can convert the INR
        into the currency you are comfortable with and pay.
        <br /> If you want to pay using any other mode of payment, fill up the
        Google form by click on the button below, and we will get back to you.
      </div>

      <div>
        <CustomButton onClick={handleRegisteredClick}>
          Paid using QR
        </CustomButton>
        <a href='https://forms.gle/Zdn5sjeLyUto5KG88' rel='noreferrer'>
          <CustomButton>Want to fill the google form</CustomButton>
        </a>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  name: state.course.name,
  referredBy: state.course.referrecBy,
  phone: state.course.phone,
  email: state.course.email,
  country: state.course.country,
  org: state.course.org,
  course: state.course.course,
  price: state.course.price,
  updatedPrice: state.course.updatedPrice,
});

export default connect(mapStateToProps)(withRouter(ScanNPay));
