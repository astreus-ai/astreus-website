'use client';

import { useState } from 'react';
import Image from 'next/image';

interface DeveloperAvatarProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export default function DeveloperAvatar({ 
  src, 
  width, 
  height, 
  alt 
}: DeveloperAvatarProps) {
  const [hasError, setHasError] = useState(false);
  
  return (
    <div className={`rounded-full overflow-hidden ${hasError ? 'bg-emerald-500' : 'bg-gray-200'}`} style={{ width: '100%', height: '100%' }}>
      {!hasError && (
        <Image 
          src={src} 
          width={width} 
          height={height} 
          alt={alt}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
} 