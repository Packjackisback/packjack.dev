import '../../css/main.css';
import PrimaryContainer from "../../templates/PrimaryContainer";


function Linux() {
  return (
		<>
		<PrimaryContainer>
			<div style={{textAlign: "center", paddingTop: 50, fontSize: 40}}>

				<h1> Linux Setup </h1>
			</div>

			<div style={{textAlign: "center", paddingTop: 50}}>
				<p>
					I dualboot Arch with Cachyos repos, and Windows. <br/>
					I don't use Windows unless I need something for ios modding. <br/>
					<br/>
					On my Arch install, I run bspwm and Sway, but I daily bspwm.
				</p>
			</div>
		</PrimaryContainer>
		</>
	);
}
export default Linux;
