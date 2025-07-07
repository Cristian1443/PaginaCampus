import { useState, useEffect } from 'react';

export default function VideoTest() {
  const [testResults, setTestResults] = useState([]);
  const [isTesting, setIsTesting] = useState(false);

  const videoUrls = [
    '/assets/video/minisoft.mp4',
    'assets/video/minisoft.mp4',
    './assets/video/minisoft.mp4',
    'https://campusue.netlify.app/assets/video/minisoft.mp4'
  ];

  const testVideoUrl = async (url) => {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      video.muted = true;
      video.preload = 'metadata';
      
      const timeout = setTimeout(() => {
        resolve({ url, success: false, error: 'Timeout' });
      }, 5000);

      video.onloadedmetadata = () => {
        clearTimeout(timeout);
        resolve({ url, success: true });
      };

      video.onerror = () => {
        clearTimeout(timeout);
        resolve({ url, success: false, error: 'Network error' });
      };

      video.src = url;
    });
  };

  const runTests = async () => {
    setIsTesting(true);
    setTestResults([]);
    
    for (const url of videoUrls) {
      const result = await testVideoUrl(url);
      setTestResults(prev => [...prev, result]);
    }
    
    setIsTesting(false);
  };

  useEffect(() => {
    runTests();
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '15px',
      borderRadius: '8px',
      fontSize: '12px',
      maxWidth: '300px',
      zIndex: 10000
    }}>
      <h4>Video Test Results</h4>
      {isTesting && <p>Testing videos...</p>}
      {testResults.map((result, index) => (
        <div key={index} style={{
          margin: '5px 0',
          padding: '5px',
          background: result.success ? 'rgba(0,255,0,0.2)' : 'rgba(255,0,0,0.2)',
          borderRadius: '4px'
        }}>
          <strong>{result.success ? '✅' : '❌'}</strong> {result.url}
          {!result.success && <div style={{fontSize: '10px', color: '#ff9999'}}>
            Error: {result.error}
          </div>}
        </div>
      ))}
      <button 
        onClick={runTests}
        style={{
          marginTop: '10px',
          padding: '5px 10px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Retest
      </button>
    </div>
  );
} 