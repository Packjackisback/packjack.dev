import '../../css/main.css';
import Age from "../../templates/CurrentAge";
import RotatingText from "../../templates/RotatingText";
import PrimaryContainer from "../../templates/PrimaryContainer";

import {NavLink} from "react-router-dom";

function Carry() {
  return (
		<>
		<PrimaryContainer>
			<div style={{textAlign: "center", paddingTop: 50, fontSize: 40}}>

				<h1> Daily Carry </h1>
			</div>

			<div style={{textAlign: "center", paddingTop: 50}}>
				<h2>For school:</h2>	
				<NavLink to="/tech/linux">Dell Lattitude 5420</NavLink>
				<p>Kindle Paperwhite (modded, using koreader)</p>
				<p>Iphone 17</p>
			</div>
		</PrimaryContainer>
		</>
	);
}
export default Carry;
