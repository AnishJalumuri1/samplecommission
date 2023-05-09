import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const Dashboard = React.lazy(() => import('./components/Dashboard'));
const Main = React.lazy(() => import('./components/Main'));
const Products = React.lazy(() => import('./components/Products/Products'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/"
            element={
              <React.Suspense fallback={<>...</>}>
                <Main />
              </React.Suspense>
            }
          >
          </Route>
          <Route path="/dashboard"
            element={
              <React.Suspense fallback={<>...</>}>
                <Dashboard />
              </React.Suspense>
            }
          ></Route>
          <Route path="/products"
            element={
              <React.Suspense fallback={<>...</>}>
                <Products />
              </React.Suspense>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}




export default App;
