import React, { useEffect, useState } from 'react';
import { fetchBackendData } from '../services/api.js'

const SecondPage = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetchBackendData()
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return <h1>{data}</h1>;
};

export default SecondPage;