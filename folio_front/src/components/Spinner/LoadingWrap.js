import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

const LoadingWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return loading ? <Spinner /> : children;
};

export default LoadingWrapper;