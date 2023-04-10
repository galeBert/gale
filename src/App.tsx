
import Navigation from "./component/navigation";
import Home from "./pages/Home";
// import Proto from "./pages/Proto";

function App() {  

  return (
     <div className="max-w-[1280px] relative mx-auto h-[5000px]">
      <Navigation />
      <Home />
      <div className="w-11 h-11 bg-cyan-400 sticky top-0" />

     </div>
  );
}

export default App;
