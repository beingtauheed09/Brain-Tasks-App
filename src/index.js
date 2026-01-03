import React from 'react';
import ReactDOM from 'react-dom/client';

// This is a simple, beautiful dashboard that won't crash
const App = () => {
  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      textAlign: 'center', 
      padding: '50px', 
      backgroundColor: '#f0fdf4', 
      minHeight: '100vh' 
    }}>
      <h1 style={{ color: '#059669', fontSize: '3rem' }}>Brain Tasks App</h1>
      <div style={{ 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '15px', 
        display: 'inline-block', 
        shadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
      }}>
        <p style={{ fontSize: '1.2rem', color: '#374151' }}>
          ✅ <strong>Status:</strong> Production Ready
        </p>
        <p style={{ fontSize: '1.2rem', color: '#374151' }}>
          🚀 <strong>Deployment:</strong> AWS EKS & CodePipeline
        </p>
        <hr style={{ border: '0.5px solid #e5e7eb', margin: '20px 0' }} />
        <p style={{ color: '#6b7280' }}>Phase 1 complete: Pipeline is fully automated.</p>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);