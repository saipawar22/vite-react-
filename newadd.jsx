import React, { useState, lazy, Suspense } from 'react';


// \Standard import (loads immediately with the main bundle)
 import Users from './username'; 

// Lazy Load import (loads only when called)
const User = lazy(() => import('./Username'));

function Newadd() {
  const [load, setLoad] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Lazy Loading Tutorial</h1>
      
      <button onClick={() => setLoad(true)}>Load User Component</button>
      
      <hr />

      {/* Suspense is required for lazy-loaded components. 
          The 'fallback' prop defines what to show while the component is loading.
      */}
      {load ? (
        <Suspense fallback={<h3>Loading...</h3>}>
          <User />
        </Suspense>
      ) : null}
    </div>
  );
}

export default Newadd;