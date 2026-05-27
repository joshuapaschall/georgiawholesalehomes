import locationsData from '@/data/ga-locations.json';

export const STATEWIDE = 'GA, USA';

type LocationItem = { label: string; type: 'county' | 'city' };

const counties = (locationsData.counties || []) as LocationItem[];
const cities = (locationsData.cities || []) as LocationItem[];

export function searchGaLocations(query: string, limit = 8, selected: string[] = []): LocationItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const selectedSet = new Set(selected);
  const results = [...counties, ...cities]
    .filter((item) => item.label.toLowerCase().includes(q))
    .filter((item) => !selectedSet.has(item.label));

  const deduped = new Map<string, LocationItem>();
  for (const item of results) {
    if (!deduped.has(item.label)) deduped.set(item.label, item);
  }

  return Array.from(deduped.values()).slice(0, limit);
}
