import { withRouter } from 'react-router-dom';

import BackgroundSvg from '../BackgroundSvg/BackgroundSvg';

import './Modal.scss';

const Modal = ({ history }) => {
  return (
    <div className='modal'>
      <div>
        <span>Contact Us</span>

        <div className='close-btn' onClick={() => history.goBack()}>
          <div></div>
          <div></div>
        </div>

        <div>
          <BackgroundSvg
            name='mail'
            token='7b6fad8f-75b7-4b42-9917-3d8a4ccc304e'
            icon
          />
          <div>
            <a href='mailto:support@codebae.dev'>support@codebae.dev</a>
          </div>
        </div>

        <div>
          <div className='icon-container'>
            <BackgroundSvg
              name='signal'
              token='25713dbb-bf92-4eed-820b-6feb2f57dbd5'
              icon
            />
            <BackgroundSvg
              name='whatsapp'
              token='c7f47dd6-8369-4aed-a2e2-044788786eb8'
              icon
            />
            <BackgroundSvg
              name='telegram'
              token='76e09397-ea44-4f09-81e2-06c0181d2cbe'
              icon
            />
          </div>
          <div>
            <a href='tel:+919123979576'>+919123979576</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Modal);
