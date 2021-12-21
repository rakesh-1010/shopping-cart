import React from 'react';
import Cart from './containers/cart';

function App() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className="text-3xl font-bold mt-10" >
          Pizza Cart
        </h1>
        <div className="flex justify-center mt-10">
          <Cart />
        </div>
    </div>
  );
}

export default App;
