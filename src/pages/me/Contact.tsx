import '../../css/main.css';
import PrimaryContainer from "../../templates/PrimaryContainer";


function Contact() {
  return (
		<>
		<PrimaryContainer>
			<div style={{textAlign: "center", paddingTop: 50, fontSize: 40}}>

				<h1> Contact </h1>
			</div>

			<div style={{textAlign: "center", paddingTop: 50}}>
				You can contact me at: 
				<ul>
						<li><a href="https://hackclub.enterprise.slack.com/team/U07S56TC82C">Hackclub Slack</a></li>
						<li><a href="mailto:packjackisback@gmail.com">packjackisback (at) gmail.com</a></li>
						<li><a href="https://github.com/packjackisback">github/packjackisback</a></li>
				</ul>
			</div>
		</PrimaryContainer>
		</>
	);
}
export default Contact;
