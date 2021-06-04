import React from 'react';

import Nav from './Nav';
import Header from './Header';

const Layout = ({ children, title }) => {
  return (
    <React.Fragment>
      <div className="bg-gray-100 min-h-screen">
        <div className="bg-gray-800 pb-32">
          <Nav />
          <Header title={title} />
        </div>

        <main className="-mt-32">{children}</main>
      </div>
    </React.Fragment>
  );
};

export default Layout;
