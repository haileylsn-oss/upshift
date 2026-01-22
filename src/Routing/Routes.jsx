import { createHashRouter  } from "react-router-dom";

import Wallet from "./Wallet";
import App from "../App";

const router = createHashRouter([
  { path: "/", element: <App /> },
  { path: "/wallet", element: <Wallet /> },
]);

export default router;
