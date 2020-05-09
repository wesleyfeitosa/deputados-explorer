import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Details = ({ match }) => {
  const { id } = match.params;

  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <>
      <h1>Details</h1>
    </>
  );
};

export default Details;

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
