import { useState, useEffect } from 'react';

export default function VisibleComponent() {
  const [count, setCount] = useState(0);
  const [mountTime, setMountTime] = useState<string | null>(null);

  useEffect(() => {
    const now = new Date();
    setMountTime(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds().toString().padStart(2, '0')}`);
  }, []);

  return (
    <div className="demo-component">
      <h3>client:visible Demo</h3>
      <div className="status">
        Component became interactive at: {mountTime}
      </div>
      <p>Astro hydrates this component when it enters the viewport. The timestamp shows when the component's JavaScript started running.</p>
      <button onClick={() => setCount(count + 1)}>
        Count is: {count}
      </button>
    </div>
  );
}