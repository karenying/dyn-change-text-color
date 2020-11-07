import Color from '../../utils/Color';
import './ColorBox.css';

const ColorBox = ({ backgroundHex }) => {
  const backgroundColor = new Color(backgroundHex);
  const { textColor } = backgroundColor;

  return (
    <div
      className='colorbox-container'
      style={{ backgroundColor: `#${backgroundHex}`, color: `#${textColor}` }}
    >
      {`#${backgroundHex}`}
      <br />
      {`Contrast ratio: ${backgroundColor
        .contrastRatioWith(textColor)
        .toFixed(2)}`}
    </div>
  );
};

export default ColorBox;
