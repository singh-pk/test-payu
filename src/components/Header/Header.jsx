import { withRouter } from 'react-router-dom';

import Logo from '../Logo/Logo';
import CustomButton from '../CustomButton/CustomButton';

import './Header.scss';

const Header = ({ history, location }) => {
  return (
    <header className='header'>
      <Logo />

      <nav>
        <CustomButton
          onClick={() => history.push('/contact', { modal: location })}>
          Contact Us
        </CustomButton>
      </nav>
    </header>
  );
};

export default withRouter(Header);
