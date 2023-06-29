import { FiArrowLeft } from 'react-icons/fi';
import PropTypes from 'prop-types';

const ArrowLeft = () => <FiArrowLeft size={16} style={{ marginRight: 8 }} />;

FiArrowLeft.propTypes = {
  size: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default ArrowLeft;
