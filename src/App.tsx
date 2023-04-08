import { Routes, Route } from "@solidjs/router";

import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return <> 
    <Routes>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Routes>
    </>
};