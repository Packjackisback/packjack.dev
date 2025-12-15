import '../css/main.css';

import ScrambleText from "../templates/ScrambleText";
import CurrentTime from "../templates/CurrentTime";
import NowPlaying from "../templates/NowPlaying";
import CodingTime from "../templates/CodingTime";

function Home() {
  return (
    <div className="page">
				<header className="name-wrapper">
					<h1>
						<ScrambleText/>
					</h1>
					<p style={{textAlign: "center"}}>Systems management and software dev</p>
			</header>
			
    
			<main>
				<p>
					The current time for me is	<CurrentTime/>, and I am currently listening to <NowPlaying/>.
					<br/>
					<br/>
					Today, I have coded for <CodingTime/> seconds! 
				</p>
			</main>
    </div>
  )
}

export default Home;
