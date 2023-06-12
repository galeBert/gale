import { useState } from "react";
import Navigation from "./component/navigation";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import Poster from "./pages/Poster";
import Work from "./pages/Work";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="max-w-[1280px] mx-auto h-[5000px]">
      <Nav isNavOpen={isNavOpen} />

      <Navigation setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />

      <div className="pb-60">
        <Home />
      </div>
      <Poster />
      <Work />
    </div>
  );
}

export default App;
