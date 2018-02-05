import React from 'react';
import PropTypes from 'prop-types';

function MoviePoster({poster, alt}){
  return (
    <img src={poster} width="300" title={alt} className="Movie__Poster"/>
  )
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default MoviePoster;
