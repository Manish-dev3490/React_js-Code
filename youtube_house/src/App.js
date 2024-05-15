import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Login from './Components/Login';
import Homepage from './Components/Homepage';

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

  ])

  return (
    <div className="App">
      <RouterProvider router={ApplicationRouter}/>
    </div>
  );
}

export default App;
