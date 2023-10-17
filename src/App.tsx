import { Outlet } from 'react-router-dom';
import './App.scss';
import NavigationLayout from './Layouts/NavigationLayout';

function App() {
  return (
    <NavigationLayout>
      <Outlet />
    </NavigationLayout>
  );
}

export default App;
