'use client';

interface AdSenseProps {
  slot?: string;
  format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  style?: React.CSSProperties;
  className?: string;
}

export default function AdSense({ 
  slot = '1234567890', 
  format = 'auto',
  style,
  className = ''
}: AdSenseProps) {
  // Placeholder for AdSense - Replace with your actual AdSense code
  return (
    <div 
      className={`bg-zinc-800/50 border border-zinc-700 rounded-lg flex items-center justify-center ${className}`}
      style={{ minHeight: format === 'vertical' ? '600px' : format === 'horizontal' ? '100px' : '250px', ...style }}
    >
      <div className="text-center p-4">
        <p className="text-zinc-500 text-xs mb-2">Advertisement</p>
        <div className="bg-zinc-700 rounded p-8 text-zinc-400 text-sm">
          <p>Google AdSense</p>
          <p className="text-xs mt-1">Slot: {slot}</p>
          <p className="text-xs">Format: {format}</p>
        </div>
      </div>
    </div>
  );
}

