import { Router, RouterProvider } from "react-router-dom";
import { router } from "./routes";
import Footer from "./componentes/Footer/Footer";

export default function App() {
 <>
 
 return (
    <RouterProvider router={router} />
    <Router Footer={Footer} />
  
  )
 </>
  
}