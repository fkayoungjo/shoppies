import React from 'react';
import shopify from './shopify.png';

function Header() {
  return (
    <div className = 'banner'>

          <img src={shopify} alt="shopify" width="200" height="200"/>

          <h1 className="display-3">The Shoppies</h1>
          <p className="lead">Movie awards for entrepreneurs</p>
    </div>
  );
}

export default Header;
