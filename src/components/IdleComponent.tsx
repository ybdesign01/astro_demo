import { useState, useEffect } from 'react';

interface Props {
  timeout?: number;
  title?: string;
}

export default function IdleComponent({ timeout, title }: Props) {
  const [count, setCount] = useState(0);
  const [mountTime, setMountTime] = useState<string | null>(null);
  const [hydrationTime, setHydrationTime] = useState<number | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const now = new Date();
    const startTime = (window as any).__pageLoadTime || 0;
    const currentTime = performance.now();
    const timeDiff = Math.round(currentTime - startTime);
    
    setMountTime(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds().toString().padStart(2, '0')}`);
    setHydrationTime(timeDiff);
    setIsHydrated(true);
    
    console.log(`IdleComponent hydrated after ${timeDiff}ms`);
  }, []);

  return (
    <div className="demo-component" style={{ position: 'relative', borderColor: isHydrated ? '#4CAF50' : '#ff9800' }}>
      <div style={{
        position: 'absolute',
        top: '0.5rem',
        right: '0.5rem',
        backgroundColor: isHydrated ? '#4CAF50' : '#ff9800',
        color: 'white',
        padding: '0.25rem 0.5rem',
        borderRadius: '4px',
        fontSize: '0.8rem'
      }}>
        {isHydrated ? 'Hydrated' : 'Not Hydrated'}
      </div>
      
      <h3>{title || `client:idle Demo ${timeout ? `(timeout: ${timeout}ms)` : '(no timeout)'}`}</h3>
      <div className="status">
        Component became interactive at: {mountTime}
        {hydrationTime !== null && <div>Hydration delay: {hydrationTime}ms</div>}
      </div>
      <p>Medium Priority: Hydrates when the page is done with initial load and requestIdleCallback fires, or after timeout. Good for lower-priority UI that doesn't need immediate interactivity.</p>
      <button 
        onClick={() => setCount(count + 1)}
        style={{ backgroundColor: isHydrated ? '#4CAF50' : '#ccc' }}
        disabled={!isHydrated}
      >
        Count is: {count} {!isHydrated && '(waiting for hydration)'}
      </button>
    </div>
  );
}