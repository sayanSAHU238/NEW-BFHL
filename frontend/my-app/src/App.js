import React, { useState } from 'react';

function App() {
  const [jsonInput, setJsonInput] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/bfhl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonInput,
      });
      const data = await res.json();
      setResponse(data);
      setError(null);
    } catch (err) {
      setError('Error: ' + err.message);
      setResponse(null);
    }
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f4',
      margin: 0,
      padding: 0,
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '50px auto',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ color: '#333' }}>BFHL Frontend</h1>
        <textarea
          style={{
            width: '100%',
            height: '100px',
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            marginBottom: '20px',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder='Enter JSON here, e.g., {"data": ["A", "C", "Z", "c", "i"]}'
        />
        <br />
        <button
          onClick={handleSubmit}
          style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#007bff',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
        >
          Submit
        </button>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {response && (
          <pre style={{ textAlign: 'left' }}>{JSON.stringify(response, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}

export default App;
