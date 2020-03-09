import React, { useState, useEffect } from "react";
import "./App.css";
import { connect } from 'react-redux';
import axios from 'axios';
// import smurfForm from './smurfForm'

import { addSmurf, getSmurf, deleteSmurf } from '../actions/index';

const App = (props) => {

  const [ newSmurf, setNewSmurf ] = useState({ name:'', age:'', height:''})

  const handleChange = (e) => {
    switch(e.target.name) {
      case 'name':
        setNewSmurf({
          ...newSmurf,
          name: e.target.value
        })
        break;
        case 'height':
          setNewSmurf({
            ...newSmurf,
            height: e.target.value
          })
          break;
          case 'age':
            setNewSmurf({
              ...newSmurf,
              age: e.target.value
            })
            break;
            default:
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(newSmurf.name && newSmurf.height && newSmurf.age){
      axios.post('http://localhost:3333/smurfs', {
        name: newSmurf.name,
        height: newSmurf.height,
        age: newSmurf.age
      }).then(res => {
        props.addSmurfs(res.data)
        setNewSmurf({
          name:'',
          height:'',
          age:''
        })
      })
    } else {
      alert('REQUIRED')
    }
  }

    useEffect(() => {
      const renderSmurfs = async () => {
        axios.get('https://localhost:3333/smurfs')
        .then(res => {
          props.renderSmurfs(res.data)
        })
        .catch(error => console.log(error))
      }
      renderSmurfs();
    },[])

    const smurfs = props.smurfs;
    const deleteAction = (id) => {
      axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        props.deleteSmurf(res.data)
      })
    }

    return (
      <div>
        <h1>Smurfs :)</h1>
        {smurfs.map((props) =>
        <>
          <h1>
            {props.name}
          </h1>

          <h3>
            {props.age}
          </h3>

          <h3>
            {props.height}
          </h3>

          <button onClick={() => {deleteAction(props.id)}}>
            Delete Smurf :(
          </button>
          <form onSubmit={handleSubmit} name="smurf-form">
            <input onChange={handleChange} value={newSmurf.name} name="name" placeholder="name" type="text"/> 
            <input onChange={handleChange} value={newSmurf.age} name="age" placeholder="age" type="text"/> 
            <input onChange={handleChange} value={newSmurf.height} name="height" placeholder="height" type="text"/> 
            <button>Add</button>
        </form>
        </>
          )}
      </div>
    )
}

export default connect(state => {
  return {smurfs: state.smurfs}
},
  { getSmurf : getSmurf, deleteSmurf : deleteSmurf })
(App);
