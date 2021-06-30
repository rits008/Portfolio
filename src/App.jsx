import Topbar from "./components/topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Contact from "./components/contact/Contact";

import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";

function App() {
 const[menuOpen,setmenuOpen] = useState(false);

  return (
    <div className="App">
      <Topbar menuOpen= {menuOpen} setmenuOpen={setmenuOpen} />
      <Menu menuOpen= {menuOpen} setmenuOpen={setmenuOpen} />
      <Menu/>
      <div className="sections">
        <Intro/>
        
        <Contact/>
      </div>
    </div>
  );
}

export default App;
