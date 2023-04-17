import { Routes, Route } from "@solidjs/router";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgotten from "./pages/Forgotten";
import Home from "./pages/Home";

export default function App() {
  return <> 
    <Routes>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forgotten_password" component={Forgotten} />
      <Route path="/" component={Home} />
    </Routes>
    </>
};