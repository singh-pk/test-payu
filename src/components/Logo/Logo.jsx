import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import BackgroundSvg from '../BackgroundSvg/BackgroundSvg';

import { setCourseToNull } from '../../redux/courseActions';

import './Logo.scss';

const Logo = ({ history, dispatch }) => {
  let handleClick = () => {
    dispatch(setCourseToNull());
    return history.push('/');
  };

  return (
    <div className='logo' onClick={handleClick}>
      <BackgroundSvg
        name='logo'
        token='84dda2b5-7c1b-4bc5-a93d-b5cdfd894743'
        logo
      />

      <div>
        <span>Code</span>
        <span>Bae</span>
      </div>
    </div>
  );
};

export default connect()(withRouter(Logo));
