import BackgroundSvg from '../BackgroundSvg/BackgroundSvg';
import CustomButton from '../CustomButton/CustomButton';

import './Cards.scss';

const Cards = ({
  name,
  oldPrice,
  newPrice,
  discount,
  handleDetailsClick,
  handleEnrollClick,
  svgName,
  token,
}) => {
  return (
    <div className='cards'>
      <div>
        <BackgroundSvg name={svgName} token={token} cardSvg />
      </div>

      <div>
        <div>{name}</div>

        <div>
          ₹<span>{oldPrice}</span> <span>{newPrice}</span>{' '}
          <span>({discount}% off)</span>
        </div>

        <div>
          {name === 'Full Stack Development' ? (
            <CustomButton
              enrollButton
              notAvailable
              onMouseEnter={event => (event.target.innerHTML = 'Not available')}
              onMouseLeave={event => (event.target.innerHTML = 'Enroll Now')}
            >
              Enroll Now
            </CustomButton>
          ) : (
            <CustomButton enrollButton onClick={handleEnrollClick}>
              Enroll Now
            </CustomButton>
          )}
          <span onClick={handleDetailsClick}>See Details</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
