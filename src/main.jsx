import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import RentCar from './pages/RentCar.jsx';
import Order from './pages/Order.jsx';
import './index.css';
import { FirebaseProvider } from './providers/FirebaseProvider.jsx';

const Layout = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<RentCar />} />
        <Route path="car/:id" element={<Order />} /> 
      </Route>
    )
  );
  return <RouterProvider router={router} />
} 



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseProvider>
    <Layout />
    </FirebaseProvider>
  </StrictMode>
);
