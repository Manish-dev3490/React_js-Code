import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Login from './Components/Login';
import Homepage from './Components/Homepage';
import { Application_Store } from './Utils/Application_Store';
import {Provider} from "react-redux";
import { WatchPage } from './Components/WatchPage';
import SearchPage from './Components/SearchPage';

function App() {

  const ApplicationRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/homepage",
      element:<Homepage/>
    },
    {
      path:"/watch",
      element:<WatchPage/>
    },
    {
      path:"/SearchPage",
      element:<SearchPage/>
    }

  ])

  return (
    <Provider store={Application_Store}>
    <div className="App">
      <RouterProvider router={ApplicationRouter}/>
    </div>
    </Provider>
  );
}

export default App;
