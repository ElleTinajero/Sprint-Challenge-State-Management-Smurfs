import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';


export default function App () {

  const [ smurfs, setSmurfs ] = useState([])

  useEffect(() => {
    axios.get('https://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data);
      setSmurfs(res.data);
    })
    .catch(error => { 
      console.error('error', err)
    });
  },[])

  const addSmurf = smurf => {
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err)
    });
  };

  return (
    <div className="App">
      <h1>Smurfs :)</h1>
    </div>
  )
}
