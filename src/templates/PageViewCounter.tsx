import { useState, useEffect } from 'react';

export default function PageViewCounter({ 
  apiUrl = 'http://localhost:3001',
  page = 'home',
  trackView = true,
  className = "", 
  style = {} 
}) {
  const [totalViews, setTotalViews] = useState(0);
  const [hasTracked, setHasTracked] = useState(false);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/pageviews`);
        const data = await response.json();
        setTotalViews(data.total);
      } catch (error) {
        console.error('Failed to fetch page views:', error);
      }
    };

    const incrementView = async () => {
      if (trackView && !hasTracked) {
        try {
          const response = await fetch(`${apiUrl}/api/pageviews/increment`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ page })
          });
          const data = await response.json();
          setTotalViews(data.total);
          setHasTracked(true);
        } catch (error) {
          console.error('Failed to increment page view:', error);
        }
      }
    };

    fetchViews();
    incrementView();
  }, [apiUrl, page, trackView, hasTracked]);

  return (
    <span className={className} style={style}>
      {totalViews.toLocaleString()} total views
    </span>
  );
}
