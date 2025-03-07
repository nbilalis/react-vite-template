import PropTypes from 'prop-types';

function ProductDetails({ product, showImage = true }) {
  const defaultImageUrl = 'https://placeholder.pics/svg/300x400';

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-4">
      <div className="md:flex">
        {showImage && (
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={product.imageUrl || defaultImageUrl}
              alt={product.name}
            />
          </div>
        )}
        <div className="p-4">
          <h2 className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
            {product.name}
          </h2>
          <p className="mt-2 text-gray-500">
            {product.description
              ? product.description
              : 'No description available'}
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Release Date: {product.releaseDate ?? 'TBD'}
          </p>
        </div>
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    releaseDate: PropTypes.string,
  }).isRequired,
  showImage: PropTypes.bool,
};

export default ProductDetails;
