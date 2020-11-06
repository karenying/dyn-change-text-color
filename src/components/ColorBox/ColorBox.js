import './ColorBox.css';

const ColorBox = ({ backgroundHex }) => {
  return (
    <div
      className='colorbox-container'
      style={{ backgroundColor: '#' + backgroundHex }}
    >
      {'#' + backgroundHex}
    </div>
  );
};

export default ColorBox;
