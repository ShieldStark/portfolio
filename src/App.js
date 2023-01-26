import './App.css';
import Home from './component/home/Home.js';
import About from './component/about/About.js';
import RootLayout from './component/root';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

const router=createBrowserRouter([
  { path:'/',
    element:<RootLayout/>,
    children:[
      { path:'/',element:<Home/>},
      { path:'/about',element:<About/>},
      { path:'/contact',element:<Home></Home>},
      { path:'/education',element:<Home></Home>}
    ]
  },
  
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
