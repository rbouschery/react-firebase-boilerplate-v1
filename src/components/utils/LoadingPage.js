import React from 'react';

import Spinner from 'react-bootstrap/Spinner'

const LoadingPage = () => (
  <div className="loader">
    <Spinner animation="border" style={{height: '10rem', width:'10rem'}}/>
  </div>
);

export default LoadingPage;