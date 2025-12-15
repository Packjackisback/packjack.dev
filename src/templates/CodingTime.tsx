import { useState, useEffect } from 'react';


interface Language {
  name: string;
  percent?: number;
}

export default function CodingTime({ 
  apiUrl = 'http://localhost:3001',
  className = "", 
  style = {} 
}) {
  const [codingTime, setCodingTime] = useState<string>('0 hrs 0 mins');
  const [languages, setLanguages] = useState<Language[]>([]);

  useEffect(() => {
    const fetchCodingTime = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/wakatime/today`);
        const data = await response.json();
        
        setCodingTime(data.seconds || '0 hrs 0 mins');
        setLanguages(data.languages || []);
      } catch (error) {
        console.error('Failed to fetch coding time:', error);
      }
    };

    fetchCodingTime();
    const interval = setInterval(fetchCodingTime, 300000);

    return () => clearInterval(interval);
  }, [apiUrl]);

  return (
    <span className={className} style={style}>
      {codingTime}
      {languages.length > 0 && ` (${languages[0].name})`}
    </span>
  );
}

