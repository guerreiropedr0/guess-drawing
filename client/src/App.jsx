import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Game from './pages/Game.jsx';
import ErrorHandler from './pages/ErrorHandler.jsx';

import { SocketProvider } from './context/SocketContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorHandler />,
  },
  {
    path: '/game',
    element: <Game />,
  },
]);

function App() {
  return (
    <SocketProvider>
      <RouterProvider router={router} />
    </SocketProvider>
  );
}

export default App;
