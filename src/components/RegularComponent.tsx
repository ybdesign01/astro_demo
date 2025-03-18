import React, { useState } from 'react';

export default function RegularComponent() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="demo-component" style={{ borderColor: '#607d8b' }}>
      <h3>Regular Component</h3>
      <div className="status" style={{ backgroundColor: '#cfd8dc' }}>
        Static (No Hydration)
      </div>
      <p>This component has no client directives. It's rendered on the server and sent as static HTML to the browser.</p>
      <p>It doesn't become interactive because no JavaScript is sent for it.</p>
      
      <button 
        onClick={() => setCount(count + 1)}
        style={{
          backgroundColor: '#607d8b',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          opacity: 0.8
        }}
      >
        Count is: {count} (clicking won't work without a directive)
      </button>
    </div>
  );
}