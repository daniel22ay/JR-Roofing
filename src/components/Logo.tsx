import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  className = '',
  size = 'md' 
}) => {
  const isLight = variant === 'light';

  // Dimension presets
  const sizeClasses = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-12',
    lg: 'h-14 sm:h-16'
  };

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <div className={`relative flex items-center justify-center ${sizeClasses[size]}`}>
        <img
          src={isLight ? '/logo-light.svg' : '/logo.svg'}
          alt="JR Roofing Solutions LLC"
          className="h-full w-auto max-w-[210px] sm:max-w-[250px] object-contain drop-shadow-sm"
        />
      </div>
    </div>
  );
};
