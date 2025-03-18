import { useState, useEffect } from 'react';

interface Props {
  timeout?: number;
  title?: string;
}

export default function IdleComponent({ timeout, title }: Props) {
  const [count, setCount] = useState(0);
  const [mountTime, setMountTime] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date();
    setMountTime(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds().toString().padStart(2, '0')}`);
  }, []);

  return (
    <div className="demo-component">
      <h3>{title || `client:idle Demo ${timeout ? `(timeout: ${timeout}ms)` : '(no timeout)'}`}</h3>
      <div className="status">
        Component hydrated at: {mountTime}
      </div>
      <button onClick={() => setCount(count + 1)}>
        Count is: {count}
      </button>
    </div>
  );
}