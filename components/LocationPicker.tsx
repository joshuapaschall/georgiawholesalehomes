'use client';

import { useMemo, useState } from 'react';
import { POPULAR_METROS } from '@/lib/form-taxonomy';
import { searchGaLocations, STATEWIDE } from '@/lib/ga-location-search';

export function LocationPicker({ value, onChange }: { value: string[]; onChange: (v: string[]) => void }) {
  const [query, setQuery] = useState('');
  const suggestions = useMemo(() => searchGaLocations(query, 8, value), [query, value]);
  const statewideOn = value.length === 1 && value[0] === STATEWIDE;

  return (
    <div className="space-y-3">
      <button type="button" onClick={() => onChange(statewideOn ? [] : [STATEWIDE])} className={`w-full min-h-11 rounded-md border px-4 py-3 text-left ${statewideOn ? 'bg-navy text-white border-navy' : 'bg-white border-navy/30'}`}>
        Anywhere in Georgia — statewide
      </button>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={statewideOn}
        placeholder="Search counties or cities"
        className="w-full min-h-11 text-base px-4 py-2.5 border border-navy/20 rounded-md disabled:opacity-50"
      />

      {!statewideOn && suggestions.length > 0 && (
        <ul role="listbox" className="border border-navy/10 rounded-md bg-white">
          {suggestions.map((item) => (
            <li key={item.label}>
              <button
                type="button"
                className="w-full text-left px-4 py-3 min-h-11 hover:bg-cream"
                onClick={() => {
                  onChange([...value.filter((v) => v !== STATEWIDE), item.label]);
                  setQuery('');
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2">
        {value.map((item) => (
          <span key={item} className="inline-flex items-center gap-1 bg-navy text-white text-sm px-3 py-1.5 rounded-full">
            {item}
            <button type="button" aria-label={`Remove ${item}`} onClick={() => onChange(value.filter((v) => v !== item))}>×</button>
          </span>
        ))}
      </div>

      <div>
        <p className="text-sm text-ink/70 mb-2">Popular metros — tap to add</p>
        <div className="flex flex-wrap gap-2">
          {POPULAR_METROS.map((metro) => (
            <button key={metro.label} type="button" className="min-h-11 border border-navy/30 rounded-full px-4 py-2 text-sm" onClick={() => onChange(Array.from(new Set([...value.filter((v) => v !== STATEWIDE), ...metro.locations])))}>
              {metro.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
