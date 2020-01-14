import PropTypes from 'prop-types';

const pinShape = PropTypes.shape({
  id: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  boardId: PropTypes.string.isRequired,
});

export default { pinShape };
