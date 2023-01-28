import './App.css';
import Home from './component/Home/Home.js';
import About from './component/about/About.js';
import RootLayout from './component/root';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Career from './component/career/Career';
import Education from './component/Education/Education';

const router=createBrowserRouter([
  { path:'/',
    element:<RootLayout/>,
    children:[
      { path:'/',element:<Home/>},
      { path:'/about',element:<About/>},
      { path:'/contact',element:<Education/>},
      { path:'/education',element:<Career></Career>}
    ]
  },
  
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
