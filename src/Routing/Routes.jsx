import { createBrowserRouter } from "react-router-dom";

import Wallet from "./Wallet";
import App from "../App";
import Admin from "../components/Cryp/admin";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/wallet", element: <Wallet /> },
  { path: "/admin", element: <Admin /> },
]);

export default router;
