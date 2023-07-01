import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';

function Loader({ visible = true, gap = '0px' }) {
  return (
    <ThreeDots
      height="34"
      width="100"
      radius="9"
      color="rgb(0,96,255)"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        justifyContent: 'center',
        margin: `${gap}`,
      }}
      visible={visible}
    />
  );
}

export default Loader;

Loader.propTypes = {
  visible: PropTypes.bool,
  gap: PropTypes.string,
};
