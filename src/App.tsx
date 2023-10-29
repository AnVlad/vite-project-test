import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainPage from './Pages/MainPage/MainPage';
import { setupStore } from './redux/store.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
]);

function App() {
  const store = setupStore();

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
