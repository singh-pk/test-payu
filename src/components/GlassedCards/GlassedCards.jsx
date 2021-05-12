import './GlassedCards.scss';

const GlassedCards = ({ head, body, color }) => {
  return (
    <div
      className={`${
        color === 'purple'
          ? 'purple'
          : color === 'green'
          ? 'green'
          : color === 'yellow'
          ? 'yellow'
          : color === 'orange'
          ? 'orange'
          : ''
      } glassed-cards`}>
      <div>{head}</div>
      <div>{body}</div>
    </div>
  );
};

export default GlassedCards;
