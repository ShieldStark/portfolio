import './App.css';
import Home from './component/Home/Home.js';
import About from './component/about/About.js';
import RootLayout from './component/rootLayout';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Career from './component/career/Career';
import Education from './component/Education/Education';

const router=createBrowserRouter([
  { 
    path:'/portfolio/',
    element:<RootLayout/>,
    children:[
      { path:'/portfolio/',element:<Home/>},
      { path:'/portfolio/about/',element:<About/>},
      { path:'/portfolio/contact/',element:<Education/>},
      { path:'/portfolio/education/',element:<Career></Career>}
    ]
  },
]);

function App() {
  console.log("app.js")
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
