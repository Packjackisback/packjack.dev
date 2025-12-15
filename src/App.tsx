import './App.css';

import ScrambleText from "./templates/ScrambleText";
import CurrentTime from "./templates/CurrentTime";
import ViewerCounter from "./templates/ViewerCounter";
import PageViewCounter from "./templates/PageViewCounter";
import NowPlaying from "./templates/NowPlaying";
import CodingTime from "./templates/CodingTime";

function App() {
  return (
    <div className="page">
			<div className="topper">
				<h3 style={{textAlign: "center"}}>packjack.dev</h3>
			</div>
			
			<div style={{ position: 'fixed', top: 10, right: 10 }}>
  			<ViewerCounter style={{ fontSize: '14px' }} />
			</div>

			<header className="name-wrapper">
				<h1>
					<ScrambleText/>
				</h1>
				<p>Systems management and software dev</p>
			</header>
    
			<main>
				<p>
					The current time for me is	<CurrentTime/>, and I am currently listening to <NowPlaying/>.
					<br/>
					<br/>
					Today, I have coded for <CodingTime/> seconds! 
				</p>
			</main>

			<footer>
				<p>No copyright, do what you want! (This page has <PageViewCounter/>)</p>
			</footer>

    </div>
  )
}

export default App
