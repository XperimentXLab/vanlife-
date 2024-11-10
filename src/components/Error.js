import React from 'react';
import { useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <pre>{error.statusText || error.message}</pre>
    </div>
  );
}

export default Error;
