type LogoProps = {
  size?: number;
  className?: string;
  variant?: 'mark' | 'horizontal' | 'stacked';
};

export function Logo({ size = 48, className = '', variant = 'mark' }: LogoProps) {
  const mark = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Georgia Wholesale Homes"
      className={variant === 'mark' ? className : ''}
    >
      <circle cx="40" cy="28" r="20" fill="#F97316" />
      <path d="M 43 10 Q 53 4 58 10 Q 53 14 43 10 Z" fill="#1E3A8A" />
      <rect x="20" y="36" width="40" height="30" fill="#1E3A8A" />
      <path d="M 15 37 L 40 16 L 65 37 Z" fill="#1E3A8A" />
      <rect x="35.5" y="51" width="9" height="15" fill="#F9F7F1" />
      <rect x="25" y="44" width="7" height="7" fill="#F9F7F1" />
      <rect x="48" y="44" width="7" height="7" fill="#F9F7F1" />
    </svg>
  );

  if (variant === 'mark') return mark;

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {mark}
        <div className="flex flex-col leading-tight">
          <span className="text-navy font-medium tracking-[0.2em] text-[11px] uppercase">Georgia Wholesale</span>
          <span className="text-navy font-medium tracking-[0.2em] text-[11px] uppercase">Homes</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {mark}
      <div className="flex flex-col items-center leading-tight">
        <span className="text-navy font-medium tracking-[0.2em] text-[11px] uppercase">Georgia Wholesale</span>
        <span className="text-navy font-medium tracking-[0.2em] text-[11px] uppercase">Homes</span>
      </div>
    </div>
  );
}
