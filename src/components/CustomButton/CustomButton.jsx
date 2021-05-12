import './CustomButton.scss';

const CustomButton = ({
  enrollButton,
  children,
  notAvailable,
  ...otherProps
}) => (
  <button
    className={`${enrollButton && 'enroll-button'} ${
      notAvailable && 'not-available'
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
