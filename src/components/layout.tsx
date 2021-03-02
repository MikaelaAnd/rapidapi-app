import React from 'react';
import Header from './header';
import Main from './main';
import ErrorBoundary from './errorBoundary';

function Layout() {
   return (
      <div>
         <ErrorBoundary>
            <Header />
            <Main />
         </ErrorBoundary>
      </div>

   );
}

export default Layout;

