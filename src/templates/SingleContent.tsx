import { useEffect, useState } from 'react';
import { fetchSingleContent } from '../utils/contentFetcher';
import type { Content } from '../utils/contentFetcher';
import ReactMarkdown from 'react-markdown';

export default function SingleContent({ folder }: { folder: string }) {
  const [content, setContent] = useState<Content | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSingleContent(folder).then(content => {
      setContent(content);
      setLoading(false);
    });
  }, [folder]);

  if (loading) return <div>Loading...</div>;
  if (!content) return <div>No content found</div>;

  return (
    <article>
      <h1>{content.meta.title}</h1>
      <time style={{ color: '#666', fontSize: '0.9rem' }}>
        {new Date(content.meta.date).toLocaleDateString()}
      </time>
      <ReactMarkdown>{content.body}</ReactMarkdown>
    </article>
  );
}
