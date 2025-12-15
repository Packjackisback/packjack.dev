'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

interface Monitor {
  id: number;
  name: string;
  status: number;
}

export default function UptimeList() {
  const [monitors, setMonitors] = useState<Monitor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMonitors = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.packjack.dev/api/uptime/uptime-status');
        setMonitors(response.data.monitors || []);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch uptime data');
        setLoading(false);
      }
    };

    fetchMonitors();
    const interval = setInterval(fetchMonitors, 10000); // refresh every 10s
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p>Loading uptime data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul style={{ fontFamily: 'monospace', paddingLeft: 20 }}>
      {monitors.map((m) => (
        <li key={m.id}>
          {m.name} [{m.status === 1 ? 'UP' : 'DOWN'}]
        </li>
      ))}
    </ul>
  );
}
