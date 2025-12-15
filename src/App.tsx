import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Uptime from "./pages/Uptime";

import "./css/main.css";
import PageViewCounter from "./templates/PageViewCounter";
import BracketNav from "./templates/BracketNav";
import ViewerCounter from "./templates/ViewerCounter";

function App() {
  return (
    <BrowserRouter>
			<div className="topper">
				<h3 style={{textAlign: "center"}}>packjack.dev</h3>
			</div>
			
			<div style={{ position: 'fixed', top: 10, right: 10 }}>
  			<ViewerCounter style={{ fontSize: '14px' }} />
			</div>
      <Routes>
        <Route path="/" element={<Home />}/>
				<Route path="/about" element={<About/>}/>
				<Route path="/uptime" element={<Uptime/>}/>
      </Routes>
			<footer>
			<BracketNav/>
			<p>No copyright, do what you want! (This site has <PageViewCounter/>)</p>
		</footer>
    </BrowserRouter>
		
  );
}

export default App;

