import { RouterProvider } from "react-router-dom";

import { router } from "./routes";
import StyleGlobal from "./assets/styleGlobal";

export default function App() {

  return (
    <>
      <StyleGlobal />
      <RouterProvider router={router} />
    </>
  )
}

