import { useEffect } from 'react';
import { connect } from 'react-redux';

import BackgroundSvg from '../../components/BackgroundSvg/BackgroundSvg';

import { setCourseToNull } from '../../redux/courseActions';

import './ConfirmationPage.scss';

const ConfirmationPage = ({ failed, dispatch }) => {
  useEffect(() => {
    return () => {
      dispatch(setCourseToNull());
    };
  }, [dispatch]);

  return (
    <div className='confirmation-page'>
      <div>
        {failed ? (
          <BackgroundSvg
            name='failed'
            token='7fab24bb-f09c-4874-bfc4-5fb6a109022f'
            cardSvg
          />
        ) : (
          <BackgroundSvg
            name='successful'
            token='24639729-0bf0-4358-8c01-747636853fb0'
            cardSvg
          />
        )}
      </div>

      <div>
        {failed
          ? 'Something went wrong. Please contact us or try agian'
          : 'Successfully registered for the bootcamp'}
      </div>

      {!failed && (
        <div>
          You successfully took your first step towards a better career, Cheers!
          🎉🎉
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  failed: state.course.err,
});

export default connect(mapStateToProps)(ConfirmationPage);
