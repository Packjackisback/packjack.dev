import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blank from "./pages/Blank";
import Sitemap from "./pages/Sitemap";
import Images from "./pages/Images";
import Links from "./pages/Links";

import Carry from "./pages/me/Carry";
import About from "./pages/me/About";
import Contact from "./pages/me/Contact";
import Ideas from "./pages/me/Ideas";
import Now from "./pages/me/Now";
import Soapbox from "./pages/me/Soapbox";

import Ai from "./pages/tech/Ai";
import Colophon from "./pages/tech/Colophon";
import Defaults from "./pages/tech/Defaults";
import Uptime from "./pages/tech/Status";
import Linux from "./pages/tech/Linux";

import Clouds from "./pages/world/Clouds";
import Music from "./pages/world/Music";

import "./css/main.css";
import PageViewCounter from "./templates/PageViewCounter";
import ViewerCounter from "./templates/ViewerCounter";
import TreeNav from "./templates/TreeNav";
import DraggableWindow from "./templates/DraggableWindow";
import Webring from "./templates/Webring";

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
				<Route path="/me/contact" element={<Contact/>}/>
				<Route path="/me/now" element={<Now/>}/>
				<Route path="/me/soapbox" element={<Soapbox/>}/>
				<Route path="/me/ideas" element={<Ideas/>}/>


				<Route path="/tech/ai" element={<Ai/>}/>
				<Route path="/tech/colophon" element={<Colophon/>}/>
				<Route path="/tech/defaults" element={<Defaults/>}/>
				<Route path="/tech/status" element={<Uptime/>}/>
				<Route path="/tech/linux" element={<Linux/>}/>

				<Route path="/world/clouds" element={<Clouds/>}/>
				<Route path="/world/music" element={<Music/>}/>
				

				<Route path="/blank" element={<Blank/>}/>
				<Route path="/sitemap" element={<Sitemap/>}/>
				<Route path="/images" element={<Images/>}/>
				<Route path="/links" element={<Links/>}/>

      </Routes>
			<footer>
			<p>No copyright, do what you want! (This site has <PageViewCounter/>)</p>
		</footer>
		<DraggableWindow initialX="22%" initialY="20%" title="Webring">
			<Webring currentSite="https://packjack.dev"/>
		</DraggableWindow>
		<DraggableWindow initialX="73%" initialY="56%" title="Navigation" minWidth="300px">
			<TreeNav/>
		</DraggableWindow>
    </BrowserRouter>
  );
}

export default App;
