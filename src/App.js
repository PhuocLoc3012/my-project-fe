
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Page404 from './pages/Page404';
import routes from './routes';

function App() {
  const router  =  createBrowserRouter([
    {
      element: <Layout/>,
      children: routes, //render theo outlet
      errorElement: <Page404/>,

    }
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
