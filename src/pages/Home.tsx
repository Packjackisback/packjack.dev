import '../css/main.css';

import { NavLink} from "react-router-dom";
import PrimaryContainer from "../templates/PrimaryContainer";
import TreeNav from "../templates/TreeNav";

function Home() {
  return (
    <div className="main">
			<PrimaryContainer>
				<h1>Welcome!</h1>

				<p>I'm jackson, and this is my website!</p>

				<p>If you want to know more about me, you can check <NavLink to="/about">/about</NavLink> :D</p>

				

				<p>Thanks for visitng :D</p>


			</PrimaryContainer>

				<TreeNav/>

    </div>
  )
}

export default Home;
