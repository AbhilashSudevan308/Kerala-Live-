
import type { KeralaUpdates } from '../types';

export const parseUpdateText = (text: string): KeralaUpdates => {
  const updates: KeralaUpdates = {
    topStories: [],
    weather: [],
    generalUpdate: '',
  };

  if (!text) return updates;

  // Split by markdown headers (## Title)
  const sections = text.split(/##\s(.+)/).filter(s => s.trim() !== '');

  for (let i = 0; i < sections.length; i += 2) {
    const title = sections[i]?.trim();
    const content = sections[i + 1]?.trim();
    if (!title || !content) continue;

    const items = content.split('\n').map(item => item.trim().replace(/^- \*\*/, '')).filter(item => item);

    if (title.toLowerCase().includes('top stories')) {
      updates.topStories = items.map(item => {
        const parts = item.split(':**');
        const headline = parts[0]?.trim() || 'No Headline';
        const summary = parts.slice(1).join(':**').trim() || 'No summary available.';
        return { headline, summary };
      });
    } else if (title.toLowerCase().includes('weather')) {
      updates.weather = items.map(item => {
        const parts = item.split(':**');
        const city = parts[0]?.trim() || 'Unknown City';
        const details = parts[1]?.trim() || 'N/A, N/A';
        const [temperature, condition] = details.split(',').map(s => s.trim());
        return {
          city,
          temperature: temperature || 'N/A',
          condition: condition || 'N/A',
        };
      });
    } else if (title.toLowerCase().includes('general update')) {
      updates.generalUpdate = content;
    }
  }

  return updates;
};
