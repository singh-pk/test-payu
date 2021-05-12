import './BackgroundSvg.scss';

const BackgroundSvg = ({
  name,
  token,
  characterRight,
  characterLeft,
  cardSvg,
  icon,
  logo,
}) => (
  <img
    type='image/svg+xml'
    src={`https://firebasestorage.googleapis.com/v0/b/codebae-web.appspot.com/o/${name}.svg?alt=media&token=${token}`}
    // data={`https://cdn.jsdelivr.net/gh/codebae21/cdn@latest/svg-new/${name}.svg`}
    className={`${
      characterLeft
        ? 'background-svg-character background-svg-character-left'
        : characterRight
        ? 'background-svg-character background-svg-character-right'
        : cardSvg
        ? 'card-svg'
        : icon
        ? 'icon-svg'
        : logo
        ? 'logo'
        : ''
    } background-svg`}
    aria-label='svg'
  />
);

export default BackgroundSvg;
