import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/me/About";
import Uptime from "./pages/tech/Status";
import Blank from "./pages/Blank";
import Carry from "./pages/me/Carry";
import Linux from "./pages/tech/Linux";

import "./css/main.css";
import PageViewCounter from "./templates/PageViewCounter";
import ViewerCounter from "./templates/ViewerCounter";
import TreeNav from "./templates/TreeNav";

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

				<Route path="/me/about" element={<About/>}/>
				<Route path="/me/carry" element={<Carry/>}/>

				<Route path="/tech/status" element={<Uptime/>}/>
				<Route path="/tech/linux" element={<Linux/>}/>
				<Route path="/blank" element={<Blank/>}/>
      </Routes>
			<footer>
			<p>No copyright, do what you want! (This site has <PageViewCounter/>)</p>
		</footer>
		<TreeNav/>
    </BrowserRouter>
  );
}

export default App;
