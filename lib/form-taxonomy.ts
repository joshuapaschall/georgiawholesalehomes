export const BUYER_TYPES = [
  { key: 'fix_flip', label: 'Fix & Flip' },
  { key: 'buy_hold', label: 'Buy & Hold' },
  { key: 'first_time', label: 'First-Time Buyer' },
  { key: 'developer', label: 'Developer / Home Builder' },
  { key: 'wholesaler', label: 'Wholesaler' },
  { key: 'realtor', label: 'Realtor / Agent' },
] as const;

export const PAYMENT_METHODS = [
  { key: 'cash', label: 'Cash' },
  { key: 'hard_money', label: 'Hard Money' },
  { key: 'creative_finance', label: 'Creative Finance' },
] as const;

export const PROPERTY_TYPES = [
  'Single Family',
  'Multi-Family',
  'Townhouse',
  'Condo',
  'Land',
  'Commercial',
  'Mobile/Manufactured',
] as const;

export const POPULAR_METROS: { label: string; locations: string[] }[] = [
  {
    label: 'Metro Atlanta',
    locations: [
      'Fulton County (GA)',
      'DeKalb County (GA)',
      'Cobb County (GA)',
      'Gwinnett County (GA)',
      'Clayton County (GA)',
      'Henry County (GA)',
      'Rockdale County (GA)',
      'Newton County (GA)',
    ],
  },
  { label: 'Savannah', locations: ['Chatham County (GA)'] },
  { label: 'Augusta', locations: ['Richmond County (GA)'] },
  { label: 'Columbus', locations: ['Muscogee County (GA)'] },
  { label: 'Macon', locations: ['Bibb County (GA)'] },
  { label: 'Athens', locations: ['Clarke County (GA)'] },
];
