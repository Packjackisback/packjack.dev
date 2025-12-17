import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import DraggableWindow from "../templates/DraggableWindow";

import "../css/main.css";

function TreeNav() {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev => {
      const next = new Set(prev);
      if (next.has(folder)) {
        next.delete(folder);
      } else {
        next.add(folder);
      }
      return next;
    });
  };

  return (
    <DraggableWindow initialX="80%" initialY="60%" title="Navigation">
      <nav className="nav-tree">
        <pre style={{fontFamily: "blockface"}}>
          <NavLink to="/">packjack.dev</NavLink>{'\n'}
          {'├── '}<span onClick={() => toggleFolder('me')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>me/</span>{'\n'}
          {expandedFolders.has('me') && (
            <>
              {'│   ├── '}<NavLink to="/me/about">about</NavLink>{'\n'}
              {'│   ├── '}<NavLink to="/me/carry">carry</NavLink>{'\n'}
              {'│   ├── '}<NavLink to="/me/contact">contact</NavLink>{'\n'}
              {'│   ├── '}<NavLink to="/me/ideas">ideas</NavLink>{'\n'}
              {'│   ├── '}<NavLink to="/me/now">now</NavLink>{'\n'}
              {'│   ├── '}<NavLink to="/me/pfp">pfp</NavLink>{'\n'}
              {'│   └── '}<NavLink to="/me/soapbox">soapbox</NavLink>{'\n'}
            </>
          )}
          {'├── '}<span onClick={() => toggleFolder('tech')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>tech/</span>{'\n'}
          {expandedFolders.has('tech') && (
            <>
              {'│   ├── '}<NavLink to="/tech/ai">ai</NavLink>{'\n'}
              {'│   ├── '}<NavLink to="/tech/colophon">colophon</NavLink>{'\n'}
              {'│   ├── '}<NavLink to="/tech/defaults">defaults</NavLink>{'\n'}
							{'│   ├── '}<NavLink to="/tech/linux">linux</NavLink>{'\n'}
              {'│   └── '}<NavLink to="/tech/status">status</NavLink>{'\n'}
            </>
          )}
          {'├── '}<span onClick={() => toggleFolder('world')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>world/</span>{'\n'}
          {expandedFolders.has('world') && (
            <>
              {'│   ├── '}<NavLink to="/world/clouds">clouds</NavLink>{'\n'}
              {'│   └── '}<NavLink to="/world/music">music</NavLink>{'\n'}
            </>
          )}
					{'├── '}<NavLink to="/blank">blank</NavLink>{'\n'}
          {'├── '}<NavLink to="/images">images</NavLink>{'\n'}
          {'├── '}<NavLink to="/links">links</NavLink>{'\n'}
					{'└── '}<NavLink to="/sitemap">sitemap</NavLink>

        </pre>
      </nav>
    </DraggableWindow>
  );
}
export default TreeNav;
