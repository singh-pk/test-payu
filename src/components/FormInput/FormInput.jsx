import './FormInput.scss';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='form'>
      <input id={label} className='form-input' {...otherProps} />
      <label htmlFor={label} className='form-input-label'>
        {label}
      </label>
    </div>
  );
};

export default FormInput;
