// import app from './App';
import About from "./components/About";
import App from "./App";
import List from "./components/List";
import ContactUs from "./components/ContactUs";
// import BotData from "./botData";

// import Transaction from "./components/Transaction";




const routes = [
   {
    path: '/',
    element: <App/>,
    errorElement: <h1> An Error coccured</h1>
   }
   
   ,{
        path: "/about",
        element: <About/>
      },{
        path: "/list",
        element: <List/>
      },{
        path: "/contact",
        element: <ContactUs/>
      }
    ]

export default routes