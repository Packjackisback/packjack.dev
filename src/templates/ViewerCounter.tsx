import { useState, useEffect, useRef } from 'react';

export default function ViewerCounter({ 
  apiUrl = 'http://localhost:3031',
  className = "", 
  style = {} 
}) {
  const [viewerCount, setViewerCount] = useState(1);
  const sessionId = useRef(`viewer_${Date.now()}_${Math.random()}`);
	const heartbeatInterval = useRef<number | null>(null);



  useEffect(() => {
    const sendHeartbeat = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/viewers/heartbeat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId: sessionId.current })
        });
        const data = await response.json();
        setViewerCount(data.count);
      } catch (error) {
        console.error('Heartbeat failed:', error);
      }
    };

    const disconnect = async () => {
      try {
        await fetch(`${apiUrl}/api/viewers/disconnect`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId: sessionId.current })
        });
      } catch (error) {
        console.error('Disconnect failed:', error);
      }
    };

    sendHeartbeat();

    heartbeatInterval.current = window.setInterval(sendHeartbeat, 3000);

    return () => {
      if (heartbeatInterval.current) {
        clearInterval(heartbeatInterval.current);
      }
      disconnect();
    };
  }, [apiUrl]);

  return (
    <span className={className} style={style}>
      {viewerCount} viewer{viewerCount !== 1 ? 's' : ''} online
    </span>
  );
}
