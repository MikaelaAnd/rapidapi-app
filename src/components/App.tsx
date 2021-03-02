import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout';
import ErrorBoundary from './errorBoundary';


function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
