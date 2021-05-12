import BackgroundSvg from '../../components/BackgroundSvg/BackgroundSvg';

import './404Page.scss';

const NotFoundPage = () => {
  return (
    <div className='not-found-page'>
      <div>404 Page not found!😥</div>

      <div>
        <BackgroundSvg
          name='404'
          token='abd56cda-cd4a-4c7f-b5af-f6f29d13a5e9'
          cardSvg
        />
      </div>
    </div>
  );
};

export default NotFoundPage;
