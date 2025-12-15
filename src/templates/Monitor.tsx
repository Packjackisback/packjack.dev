'use client';

import React, { useEffect, useState } from 'react';
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
        const response = await axios.get('http://localhost:3001/api/uptime/uptime-status');
        setMonitors(response.data.monitors || []);
        setLoading(false);
      } catch (err: any) {
        console.error(err);
        setError('Failed to fetch uptime data');
        setLoading(false);
      }
    };

    fetchMonitors();
    const interval = setInterval(fetchMonitors, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p>Loading uptime data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ whiteSpace: 'pre-line', fontFamily: 'monospace' }}>
      {monitors.map((m) => (
        <div key={m.id}>
          {m.name} [{m.status === 1 ? 'UP' : 'DOWN'}]
        </div>
      ))}
    </div>
  );
}

