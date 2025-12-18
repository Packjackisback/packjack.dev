import '../../css/main.css';
import PrimaryContainer from "../../templates/PrimaryContainer";


function Colophon() {
  return (
		<>
		<PrimaryContainer>
			<div style={{textAlign: "center", paddingTop: 50, fontSize: 40}}>

				<h1> How was this site made? </h1>
			</div>

			<div style={{textAlign: "center", paddingTop: 50}}>
				<p>
					This site was made with React (typescript) and vite. The routing is done through react-router-dom, and the generation of html from md is done with react-markdown. The server this site runs on is an old laptop, running in a docker image. Because pushing and building docker images is so annoying, I've made it so all content updates (blogs, images) just require pushing to github, and are fetched on load.	
				</p>
			</div>
		</PrimaryContainer>
		</>
	);
}
export default Colophon;
