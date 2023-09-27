import react from 'react'
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const[data,setData]=useState({});
  const[loading,setLoading]=useState(true);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response=>response.json())
    .then(data=>{
      setData(data);
      setLoading(false);
    })
    .catch(error=>console.log(error));
  },[]);
  return (
    <div className="App">
      <h1>API Data:</h1>
      {loading?<p>Loading...</p>:<pre>{JSON.stringify(data,null,2)}</pre>}
    </div>
  );
}

export default App;
