import '../../css/main.css';
import Age from "../../templates/CurrentAge";
import RotatingText from "../../templates/RotatingText";
import PrimaryContainer from "../../templates/PrimaryContainer";


function About() {
  return (
		<>
		<PrimaryContainer>
			<div style={{textAlign: "center", paddingTop: 50, fontSize: 40}}>

				<h1> About Me </h1>
			</div>

			<div style={{textAlign: "center", paddingTop: 50}}>
				Hi! I'm Jackson, a {<Age/>} year old student from Texas! <br/><br/>

				In my free time I enjoy <RotatingText
														texts={["swimming", "running", "working out", "playing baseball", "going down wikipedia rabbit holes", "programming", "daydreaming", "talking with my friends", "hanging out with my amazing girlfriend"]}
														rotationInterval={1200}
														/>
				
			</div>
		</PrimaryContainer>
		</>
	);
}
export default About;
