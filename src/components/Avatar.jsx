import PropTypes from 'prop-types';

import './Avatar.css';

function Avatar({ user, imageSize = 90 }) {
  const styles = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    objectFit: 'cover',
  };

  return (
    <>
      <h2 className="avatar-name">{user.name}</h2>
      <img
        src={user.imageUrl}
        className="avatar"
        style={styles}
        alt={user.name}
      />
    </>
  );
}

Avatar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  imageSize: PropTypes.number,
};

export default Avatar;
