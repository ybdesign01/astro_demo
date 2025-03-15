import { useState, useEffect } from 'react';

export default function OnlyComponent() {
  const [count, setCount] = useState(0);
  const [mountTime, setMountTime] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date();
    setMountTime(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds().toString().padStart(2, '0')}`);
  }, []);

  return (
    <div className="demo-component">
      <h3>client:only Demo</h3>
      <div className="status">
        Component became interactive at: {mountTime}
      </div>
      <p>This component only exists in the browser - it completely skips server-side rendering. The timestamp shows when the component's JavaScript started running.</p>
      <button onClick={() => setCount(count + 1)}>
        Count is: {count}
      </button>
    </div>
  );
}