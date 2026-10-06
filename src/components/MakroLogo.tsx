import React from 'react';

interface MakroLogoProps {
  variant?: 'full' | 'symbol' | 'wordmark';
  color?: 'cmyk' | 'navy' | 'magenta' | 'white' | 'black';
  className?: string;
  symbolSize?: number;
}

export const MakroMSymbol: React.FC<{
  color?: 'cmyk' | 'navy' | 'magenta' | 'white' | 'black';
  className?: string;
  size?: number;
}> = ({ color = 'cmyk', className = '', size = 36 }) => {
  const height = size;
  const width = Math.round(size * 1.25);
  const clipId = React.useId();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Makro Impress M"
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M0 0 L28 0 L36 28 L36 0 L64 0 L72 28 L72 0 L100 0 L100 80 L76 80 L68 52 L60 80 L40 80 L32 52 L24 80 L0 80 Z" />
        </clipPath>
      </defs>

      {color === 'cmyk' ? (
        <g clipPath={`url(#${clipId})`}>
          <rect y="0" width="100" height="27" fill="#009FE3" />
          <rect y="26.5" width="100" height="27.5" fill="#001244" />
          <rect y="53.5" width="100" height="26.5" fill="#E6007E" />
        </g>
      ) : (
        <path
          d="M0 0 L28 0 L36 28 L36 0 L64 0 L72 28 L72 0 L100 0 L100 80 L76 80 L68 52 L60 80 L40 80 L32 52 L24 80 L0 80 Z"
          fill={
            color === 'navy'
              ? '#001244'
              : color === 'magenta'
              ? '#E6007E'
              : color === 'white'
              ? '#FFFFFF'
              : '#0A0B0E'
          }
        />
      )}
    </svg>
  );
};

export const MakroLogo: React.FC<MakroLogoProps> = ({
  variant = 'full',
  color = 'cmyk',
  className = '',
  symbolSize = 34,
}) => {
  const textColor =
    color === 'white'
      ? '#FFFFFF'
      : color === 'magenta'
      ? '#E6007E'
      : color === 'navy'
      ? '#001244'
      : '#0A0B0E';

  if (variant === 'symbol') {
    return <MakroMSymbol color={color} size={symbolSize} className={className} />;
  }

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {variant === 'full' && (
        <MakroMSymbol color={color} size={symbolSize} />
      )}
      <div className="flex flex-col leading-[0.88] tracking-tight">
        <div className="flex items-start">
          <span
            className="font-extrabold text-[22px] tracking-[-0.04em] font-sans lowercase"
            style={{ color: textColor }}
          >
            makro
          </span>
          <span
            className="text-[9px] font-bold ml-[1.5px] mt-[1px]"
            style={{ color: textColor }}
          >
            &reg;
          </span>
        </div>
        <span
          className="font-semibold text-[17px] tracking-[-0.03em] font-sans lowercase mt-[1px]"
          style={{ color: textColor }}
        >
          impress
        </span>
      </div>
    </div>
  );
};

export default MakroLogo;
