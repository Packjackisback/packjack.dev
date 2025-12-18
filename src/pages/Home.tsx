import '../css/main.css';

import { NavLink} from "react-router-dom";
import PrimaryContainer from "../templates/PrimaryContainer";

function Home() {
  return (
    <div className="main">
			<PrimaryContainer>
				<h1>Welcome!</h1>

				<p>I'm jackson, and this is my website!</p>

				<p>If you want to know more about me, you can check <NavLink to="/me/about">/about</NavLink></p>
				
				<p>My photos and incoherent ramblings can be found in the navtree below and to the right</p>

				<p>Thanks for visitng :D</p>


			</PrimaryContainer>

    </div>
  )
}

export default Home;
