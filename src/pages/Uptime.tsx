import React from 'react';
import UptimeList from '../templates/Monitor';

export default function Uptime() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{textAlign: "center"}}>Uptime Status</h1>
      <div style={{textAlign: "center", margin: "auto", width: "30%"}}>
				<UptimeList />
			</div>
    </div>
  );
}

