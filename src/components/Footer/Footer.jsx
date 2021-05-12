import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import BackgroundSvg from '../BackgroundSvg/BackgroundSvg';

import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <Logo />

      <div className='footer-copyright'>
        <div>
          <Link to='/terms-and-conditions'>Terms & Conditions</Link>
        </div>
        <div>&copy; 2021 CodeBae. All rights reserved</div>
      </div>

      <a href='https://discord.gg/kHZcFWYEJx' target='_blank' rel='noreferrer'>
        <BackgroundSvg
          name='discord'
          token='4f4d1ce8-b637-4d7b-af31-cec3378b6a48'
          icon
        />
        <span>Join our community!</span>
      </a>
    </div>
  );
};

export default Footer;
