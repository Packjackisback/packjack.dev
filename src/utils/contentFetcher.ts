export interface ContentMeta {
  title: string;
  date: string;
  slug?: string;
  cover?: string;
  images?: string[];
  [key: string]: any;
}

export interface Content {
  meta: ContentMeta;
  body: string;
  filename: string;
}

function parseFrontmatter(markdown: string): { meta: ContentMeta; body: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);
  
  if (!match) {
    return { meta: { title: 'Untitled', date: '' }, body: markdown };
  }
  
  const [, frontmatter, body] = match;
  const meta: any = {};
  const lines = frontmatter.split('\n');
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    const colonIndex = line.indexOf(':');
    
    if (colonIndex === -1) {
      i++;
      continue;
    }
    
    const key = line.substring(0, colonIndex).trim();
    const value = line.substring(colonIndex + 1).trim();
    
    // Check if this is an array (next lines are indented with -)
    if (value === '' && i + 1 < lines.length && lines[i + 1].trim().startsWith('-')) {
      const arrayItems: string[] = [];
      i++;
      while (i < lines.length && lines[i].trim().startsWith('-')) {
        arrayItems.push(lines[i].trim().substring(1).trim());
        i++;
      }
      meta[key] = arrayItems;
      continue;
    }
    
    meta[key] = value;
    i++;
  }
  
  return { meta, body: body.trim() };
}

export async function fetchContent(folder: string): Promise<Content[]> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/packjackisback/packjack.dev-content/contents/${folder}`
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch content from ${folder}`);
    }
    
    const files = await response.json();
    
    const contents = await Promise.all(
      files
        .filter((file: any) => file.name.endsWith('.md'))
        .map(async (file: any) => {
          const contentResponse = await fetch(file.download_url);
          const markdown = await contentResponse.text();
          const { meta, body } = parseFrontmatter(markdown);
          
          return {
            meta,
            body,
            filename: file.name.replace('.md', '')
          };
        })
    );
    
    // Sort by date, most recent first
    return contents.sort((a, b) => {
      const dateA = new Date(a.meta.date || 0).getTime();
      const dateB = new Date(b.meta.date || 0).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    console.error('Error fetching content:', error);
    return [];
  }
}

export async function fetchSingleContent(folder: string): Promise<Content | null> {
  const contents = await fetchContent(folder);
  return contents[0] || null;
}
