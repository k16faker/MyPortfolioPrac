import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import RootPage from './pages/RootPage';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
    }
  ]);


  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  );
}

export default App;
