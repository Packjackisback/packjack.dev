import UptimeList from '../../templates/Monitor';

import PrimaryContainer from '../../templates/PrimaryContainer';

import "../../css/main.css";

export default function Uptime() {
  return (
		<PrimaryContainer>
    <div style={{ padding: 20 }}>
      <h1 style={{textAlign: "center"}}>Uptime Status</h1>
      <div style={{textAlign: "center", margin: "auto", width: "30%"}}>
				<UptimeList />
			</div>
    </div>
		</PrimaryContainer>
  );
}

