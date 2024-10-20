import React, { useEffect, useState } from 'react';

function FetchComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:5000/api/data');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? <div>{data}</div> : <div>Loading...</div>}
    </div>
  );
}

export default FetchComponent;