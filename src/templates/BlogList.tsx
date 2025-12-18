import { useEffect, useState } from 'react';
import { fetchContent } from '../utils/contentFetcher';
import type { Content } from '../utils/contentFetcher';

import ReactMarkdown from 'react-markdown';

export default function BlogList({ folder }: { folder: string }) {
  const [posts, setPosts] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent(folder).then(content => {
      setPosts(content);
      setLoading(false);
    });
  }, [folder]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {posts.map(post => (
        <article key={post.filename} style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #ccc' }}>
          <h2>{post.meta.title}</h2>
          <time style={{ color: '#666', fontSize: '0.9rem' }}>
            {new Date(post.meta.date).toLocaleDateString()}
          </time>
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </article>
      ))}
    </div>
  );
}
