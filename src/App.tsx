import { Routes, Route, A } from "@solidjs/router";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Login from "./pages/Login";

export default function App() {
  return <> 
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/create" component={Create} />
    </Routes>
    </>
};
