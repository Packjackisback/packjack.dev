import { useState, useEffect } from 'react';

interface Site {
  badge: string;
  link: string;
}

const defaultSites: Site[] = [
  { badge: 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/a495eea70094538d_acon-gets-a-button-animated.gif', link: 'https://aconlin.com' },
  { badge: 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/0a2058958dd7e1c5_image.png', link: 'https://vvqb.dev/' },
  { badge: 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/976dbf4ff75c2412_88x31.gif', link: 'https://prpl.wtf' },
  { badge: 'https://gideon.sh/88x31.gif', link: 'https://gideon.sh' },
  { badge: 'https://bomberfish.ca/button.gif', link: 'https://bomberfish.ca' },
  { badge: 'https://codingcorner.dev/buttons/codingcorner.png', link: 'https://codingcorner.dev' },
  { badge: 'https://www.valen.zip/button-bw.gif', link: 'https://valen.zip' },
  { badge: 'https://site.slitrostudio.me/Slitro2.png', link: 'https://os.slitrostudio.me' },
  { badge: "https://dipa-cotton.github.io/personalsite/images/dipa's%20button.png", link: 'https://dipa-cotton.github.io/personalsite/' },
  { badge: 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/53764887c44b32b6_pkiexport.png', link: 'https://pkindustry.org' },
  { badge: 'https://packjack.dev/8831.png', link: 'https://packjack.dev' },
  { badge: 'https://froppii.dev/button.gif', link: 'https://froppii.dev' },
  { badge: 'https://cutiesin.tech/88x31/junya.gif', link: 'https://cutiesin.tech' }
];

export default function Webring({ 
  sites = defaultSites, 
  currentSite = '',
  prevButton = null,
  nextButton = null,
  className = '',
  style = {}
}: {
  sites?: Site[];
  currentSite?: string;
  prevButton?: any;
  nextButton?: any;
  className?: string;
  style?: any;
}) {
  const otherSites = sites.filter(site => site.link !== currentSite);

  const getInitialIndex = () => {
  	if (!currentSite) return 0;
  	const currentIndex = sites.findIndex(site => site.link === currentSite);
  	if (currentIndex === -1) return 0;
  	const nextIndex = (currentIndex + 1) % sites.length;
  	return otherSites.findIndex(site => site.link === sites[nextIndex].link);
	};

const [currentIndex, setCurrentIndex] = useState(getInitialIndex);

	useEffect(() => {
    otherSites.forEach(site => {
      const img = new Image();
      img.src = site.badge;
    });
  }, [otherSites]);

  if (otherSites.length === 0) return null;

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + otherSites.length) % otherSites.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % otherSites.length);
  };

  const currentSiteInfo = otherSites[currentIndex];

  return (
    <div 
      className={className}
      style={{ display: 'flex', alignItems: 'center', gap: '8px', ...style }}
    >
      <button onClick={goToPrev}>
        {prevButton || '←'}
      </button>
      
      <a 
        href={currentSiteInfo.link} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          src={currentSiteInfo.badge} 
          alt="Site badge"
          style={{ 
            width: '88px', 
            height: '31px',
            display: 'block',
            imageRendering: 'pixelated'
          }}
        />
      </a>
      
      <button onClick={goToNext}>
        {nextButton || '→'}
      </button>
    </div>
  );
}
