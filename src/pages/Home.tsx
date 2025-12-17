import '../css/main.css';

import { NavLink, Route, Routes } from "react-router-dom";

import CurrentTime from "../templates/CurrentTime";
import TreeNav from "../templates/TreeNav";

function Home() {
  return (
    <div className="main">
			<div className="primary-container">
				<h1>Welcome!</h1>

				<p>I'm jackson, and this is my website!</p>

				<p>If you want to know more about me, you can check <NavLink to="/about">/about</NavLink> :D</p>

				

				<p>Thanks for visitng :D</p>


			</div>

				<TreeNav/>

    </div>
  )
}

export default Home;
