import React, { useState, useEffect } from 'react';

function PublicIP({ version = 'v4' }) {
  const [ip, setIp] = useState('Loading...');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await fetch(`https://api.ipify.org?format=json&${version === 'v6' ? 'ipVersion=6' : ''}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setIp(data.ip);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch IP');
      }
    };

    fetchIP();
  }, [version]);

  return (
    <div>
      <strong>{version.toUpperCase()} Address:</strong> {error || ip}
    </div>
  );
}

export default PublicIP;
